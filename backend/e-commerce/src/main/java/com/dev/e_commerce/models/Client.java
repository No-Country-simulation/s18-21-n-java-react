package com.dev.e_commerce.models;

import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.*;

import java.util.Date;
import java.util.List;

import jakarta.persistence.*;

@Entity
@Table(name = "client")
@PrimaryKeyJoinColumn(name = "user_id")
@Getter @Setter
@AllArgsConstructor
@NoArgsConstructor
public class Client extends User  {


    @Column(nullable = false)
    private String phone;

    @Column(nullable = false, unique = true)
    private String documentIdentification;

    @Temporal(TemporalType.DATE)
    private Date birthDate;


    // -------------------Relacionships------------------
    @ManyToOne
    @JoinColumn(name = "location_id", nullable = false)
    private Location location;

   
    @OneToMany(mappedBy = "seller", cascade = CascadeType.ALL)
    private List<Product> products;

    @OneToMany(mappedBy = "client", cascade = CascadeType.ALL)
    private List<Orders> orders;


}