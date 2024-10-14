package com.dev.e_commerce.models;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.*;

import java.util.Date;
import java.util.List;

@Entity
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "orders")
public class Order {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "seller_id", nullable = false)
    private Client seller;

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private Client client;

    @Temporal(TemporalType.TIMESTAMP)
    private Date date;

    private Double amount;

    private Integer totalProduct;

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<DetailsOrder> detailsOrders;  // Relación con detalles de la orden
}
