package com.dev.e_commerce.models;


import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.List;

@Entity
@Data
@AllArgsConstructor
public class Product {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private Double price;

    @Column(nullable = true, columnDefinition = "TEXT")
    private String description;

    @Column(nullable = false)
    private String brand;

    private String photoUrl;

    @Enumerated(EnumType.STRING)
    private Category category;

    @Column(nullable = false)
    private Integer stock;

    @Column(nullable = true)
    private String shortDescription;

    @ManyToOne
    @JoinColumn(name = "seller_id", nullable = false)
    private Client seller;

    @OneToMany(mappedBy = "product", cascade = CascadeType.ALL)
    private List<DetailsOrder> detailsProducts;
}