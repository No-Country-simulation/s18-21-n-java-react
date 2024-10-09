package com.dev.e_commerce.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.Date;
import java.util.List;

import jakarta.persistence.*;
@Entity
@Data
@AllArgsConstructor
@Table(name = "client")

public class Client  {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long client_id;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false, unique = true)
    private String documentIdentification;

    @Temporal(TemporalType.DATE)
    private Date birthDate;

    @ManyToOne
    @JoinColumn(name = "location_id", nullable = false)
    private Location location;

   
    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private List<Product> products;
}