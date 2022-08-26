
## Update maven package
mvn clean package

## Update JAR
java -jar ./target/spring-boot-web-0.0.1-SNAPSHOT.jar

## Install MySQL
docker run -p 3306:3306 --name hb-mysql-example -e MYSQL_ROOT_PASSWORD={} -d mysql

## Build table
create database transit_data;
use transit_data;
create table via_static (
stop_id int NOT NULL,
stop_code varchar(5) NOT NULL,
stop_name varchar(40) NOT NULL,
location_type int,
stop_lon decimal(13,10) NOT NULL,
stop_lat decimal(13,10) NOT NULL,
stop_timezone varchar(25),
parent_station varchar(40),
wheelchair_boarding int
)

# Add ONR stations
INSERT INTO gtfs (stop_code, location_type, stop_id, stop_lat, stop_lon, stop_name, stop_timezone, wheelchair_boarding)
VALUES ('COCH', 720, 072, 49.06055,  -81.02341, 'Cochrane', 'America/Toronto', 1);

INSERT INTO gtfs (stop_code, location_type, stop_id, stop_lat, stop_lon, stop_name, stop_timezone)
VALUES ('FRAS', 0, 189, 49.851183,   -81.6066, 'Fraserdale', 'America/Toronto');
