package com.example.ProyectoEcommece.dtos;

import com.example.ProyectoEcommece.entity.Category;
import com.example.ProyectoEcommece.entity.Client;

import lombok.*;

@Data  // Genera los getters, setters, equals, hashCode, toString automáticamente
@AllArgsConstructor  // Genera un constructor con todos los argumentos
@NoArgsConstructor   // Genera un constructor sin argumentos
public class ProductDTO {

    private String name;
    private Double price;
    private String description;
    private String brand;
    private String photoUrl;
    private Category category;
    private Integer stock;
    private String shortDescription;
    private Client client;


}
