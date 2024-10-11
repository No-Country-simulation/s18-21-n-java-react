package com.dev.e_commerce.exceptions;

public class ApplicationException extends RuntimeException{

    public ApplicationException(String message) {
        super();
        throw new RuntimeException(message);
    }
}
