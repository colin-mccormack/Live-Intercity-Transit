package com.example.springbootweb.data.payloads;

import com.sun.istack.NotNull;

public class request {

    @NotNull
    private Integer stop_id;
    @NotNull
    private String stop_code;
    @NotNull
    private String stop_name;
    @NotNull
    private Integer location_type;
    @NotNull
    private Double stop_lon;
    @NotNull
    private Double stop_lat;
    @NotNull
    private String stop_timezone;
    @NotNull
    private String parent_station;
    private Integer wheelchair_boarding;

    public Integer getStop_id() {
        return stop_id;
    }

    public void setStop_id(Integer stop_id) {
        this.stop_id = stop_id;
    }

    public String getStop_code() {
        return stop_code;
    }

    public void setStop_code(String stop_code) {
        this.stop_code = stop_code;
    }

    public String getStop_name() {
        return stop_name;
    }

    public void setStop_name(String stop_name) {
        this.stop_name = stop_name;
    }

    public Integer getLocation_type() {
        return location_type;
    }

    public void setLocation_type(Integer location_type) {
        this.location_type = location_type;
    }

    public Double getStop_lon() {
        return stop_lon;
    }

    public void setStop_lon(Double stop_lon) {
        this.stop_lon = stop_lon;
    }

    public Double getStop_lat() {
        return stop_lat;
    }

    public void setStop_lat(Double stop_lat) {
        this.stop_lat = stop_lat;
    }

    public String getStop_timezone() {
        return stop_timezone;
    }

    public void setStop_timezone(String stop_timezone) {
        this.stop_timezone = stop_timezone;
    }

    public String getParent_station() {
        return parent_station;
    }

    public void setParent_station(String parent_station) {
        this.parent_station = parent_station;
    }

    public Integer getWheelchair_boarding() {
        return wheelchair_boarding;
    }

    public void setWheelchair_boarding(Integer wheelchair_boarding) {
        this.wheelchair_boarding = wheelchair_boarding;
    }

}
