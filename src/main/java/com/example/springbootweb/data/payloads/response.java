package com.example.springbootweb.data.payloads;

public class response {

    public class MessageResponse {

        private String message;

        public MessageResponse(String message){
            this.message = message;
        }

        public void setMessage(String message){
            this.message = message;
        }

        public String getMessage(){
            return message;
        }
    }

}
