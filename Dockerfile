FROM openjdk:18
COPY . /opt
WORKDIR /opt
ENTRYPOINT ["java", "-jar", "./target/spring-boot-web-0.0.1-SNAPSHOT.jar"]