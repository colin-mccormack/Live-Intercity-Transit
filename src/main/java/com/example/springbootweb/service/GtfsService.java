package com.example.springbootweb.service;

import com.example.springbootweb.data.models.gtfs;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public interface GtfsService {
    List<gtfs> getAllStations();
}
