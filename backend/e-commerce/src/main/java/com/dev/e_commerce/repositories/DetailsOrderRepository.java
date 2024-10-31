package com.dev.e_commerce.repositories;

import com.dev.e_commerce.models.DetailsOrder;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface DetailsOrderRepository extends JpaRepository<DetailsOrder, Long> {
}
