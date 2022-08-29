package com.example.springbootweb;

import com.example.springbootweb.data.models.gtfs;
import com.example.springbootweb.data.repository.GtfsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.view.RedirectView;

import java.io.IOException;
import java.net.MalformedURLException;
import java.net.URI;
import java.net.URISyntaxException;
import java.net.URL;
import java.util.Scanner;

@Controller
public class MainController {

    @GetMapping("")
    public String showHomePage() {
        return "index";
    }

    @Autowired
    private GtfsRepository gtfsRepository;

    @GetMapping(path="/all")
    public @ResponseBody Iterable<gtfs> getAllStations() {
        return gtfsRepository.findAll();
    }

    @GetMapping(path="/routes")
    public ResponseEntity<InputStreamResource> sendRoute() {
        ClassPathResource geoJSON = new ClassPathResource("static/GeoJSON/CanadianPassengerTrains.json");
        try {
            return ResponseEntity
                    .ok()
                    .body(new InputStreamResource((geoJSON.getInputStream())));
        } catch (IOException e) {
            throw new RuntimeException(e);
        }
    }

    @GetMapping(path="/live")
    public @ResponseBody String sendLive() {
        URL url = null;
        try {
            url = new URL("https://tsimobile.viarail.ca/data/allData.json");
        } catch (MalformedURLException e) {
            throw new RuntimeException(e);
        }
        Scanner sc = null;

        try {
            sc = new Scanner(url.openStream());
        } catch (IOException e) {
            throw new RuntimeException(e);
        }

        StringBuffer sb = new StringBuffer();

        while(sc.hasNext()){
            sb.append(sc.next());
        }
        String result = sb.toString();

        return String.format(result);
    }


}
