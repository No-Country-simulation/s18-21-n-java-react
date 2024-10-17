package com.dev.e_commerce.dtos.response;


public record ProductResponseDTO(


   String name,
    Double price,
     String description,
   String brand,
     String photoUrl,
    String category,
     Integer stock,
     String shortDescription,
   Long clientId
) { }
