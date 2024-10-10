package com.dev.e_commerce.models;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;


import java.util.Date;


@Entity
@Data
@AllArgsConstructor
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String email;


    private String password;


    private String name;


    private String lastname;

    private String photoUrl;


    private Boolean isEnabled;

    @Enumerated(EnumType.STRING)
    private Role role;


    @Temporal(TemporalType.TIMESTAMP)
    private Date createdAt;
}