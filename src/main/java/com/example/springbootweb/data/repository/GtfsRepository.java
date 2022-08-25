package com.example.springbootweb.data.repository;

import com.example.springbootweb.data.models.gtfs;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GtfsRepository extends JpaRepository<gtfs, String> {
}
