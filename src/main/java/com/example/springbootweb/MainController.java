package com.example.springbootweb;

import com.example.springbootweb.data.models.gtfs;
import com.example.springbootweb.data.repository.GtfsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ClassPathResource;
import org.springframework.core.io.InputStreamResource;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

import java.io.IOException;

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

    @GetMapping(path="/route")
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

}
