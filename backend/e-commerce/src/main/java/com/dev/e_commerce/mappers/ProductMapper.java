package com.dev.e_commerce.mappers;


import com.dev.e_commerce.dtos.request.ProductRequestDto;
import com.dev.e_commerce.dtos.response.ProductResponseDTO;
import com.dev.e_commerce.models.Category;
import com.dev.e_commerce.models.Product;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface ProductMapper {

@Mapping(target =  "seller", source = "clientId")
    Product toEntity(ProductRequestDto productRequestDto);
    ProductResponseDTO toProductResponseDto(Product product);


    default Category mapCategory(String category) {
        return category != null ? Category.valueOf(category) : null; // Convierte el String a Category
    }

}
