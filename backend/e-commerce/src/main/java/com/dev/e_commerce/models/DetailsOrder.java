package com.dev.e_commerce.models;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
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

    @ManyToOne
    @JoinColumn(name = "seller_id", nullable = false)
    private Client seller;

    private Integer quantity;

    private Double price;
}