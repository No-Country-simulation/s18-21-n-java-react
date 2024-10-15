package com.dev.e_commerce.mappers;


import com.dev.e_commerce.dtos.ProductDTO;
import com.dev.e_commerce.models.Product;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public interface ProductMapper {

    Product toEntity (ProductDTO productDTO);


}
