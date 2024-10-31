package com.dev.e_commerce.repositories;

import com.dev.e_commerce.models.Location;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LocationRepository extends JpaRepository<Location, Long> {
}
