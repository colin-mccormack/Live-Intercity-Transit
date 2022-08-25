package com.example.springbootweb.data.repository;

import com.example.springbootweb.data.models.gtfs;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GtfsRepository extends CrudRepository<gtfs, String> {
}
