package com.example.ProyectoEcommece.Mappers;


import com.example.ProyectoEcommece.dtos.ProductDTO;
import com.example.ProyectoEcommece.entity.Product;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    Product toEntity (ProductDTO productDTO);


}
