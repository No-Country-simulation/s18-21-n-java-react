package com.dev.e_commerce.exceptions;

import lombok.Data;

@Data
public class ApplicationException extends RuntimeException{

    private String campo;
    public ApplicationException(String message) {
        super(message);
    }
    public ApplicationException(String message, String campo) {
        super(message);
        this.campo = campo;
    }
}
