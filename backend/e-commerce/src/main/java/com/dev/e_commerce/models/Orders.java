package com.dev.e_commerce.models;

import jakarta.persistence.Entity;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.util.Date;
import java.util.List;

@Entity
@Table(name = "orders")
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Orders {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

//    @ManyToOne
//    @JoinColumn(name = "client_id", nullable = false)
//    private Client seller;


    @Temporal(TemporalType.DATE)
    private LocalDate date;

    private Double amount;

    private Integer totalProduct;
//------------------------Relacionships -------------

    @OneToMany(mappedBy = "order", cascade = CascadeType.ALL)
    private List<DetailsOrder> detailsOrders;  // Relación con detalles de la orden

    @ManyToOne
    @JoinColumn(name = "client_id", nullable = false)
    private Client client;
}
