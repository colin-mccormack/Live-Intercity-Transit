FROM openjdk:18
COPY ./target/spring-boot-web-0.0.1-SNAPSHOT.jar .
ENTRYPOINT ["java", "-jar", "spring-boot-web-0.0.1-SNAPSHOT.jar"]