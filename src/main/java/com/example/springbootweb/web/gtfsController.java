package com.example.springbootweb.web;


import com.example.springbootweb.data.models.gtfs;
import com.example.springbootweb.service.GtfsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/gtfs")
public class gtfsController {
    @Autowired
    GtfsService gtfsService;

    @GetMapping("/all")
    public ResponseEntity<List<gtfs>> getAllData() {
        List<gtfs> stations = gtfsService.getAllStations();
        return new ResponseEntity<>(stations, HttpStatus.OK);
    }
}
