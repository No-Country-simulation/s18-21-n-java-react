package com.example.ProyectoEcommece.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Data
@AllArgsConstructor
public class DetailsOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "order_id", nullable = false)
    private Order order;  // RELACION CON LA ORDEN

    @ManyToOne
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;  //RELACION CON EL PRODUCTO

    private Integer quantity;

    private Double price;
}