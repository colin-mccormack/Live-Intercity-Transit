package com.example.springbootweb;

import com.example.springbootweb.data.models.gtfs;
import com.example.springbootweb.data.repository.GtfsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ResponseBody;

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

}
