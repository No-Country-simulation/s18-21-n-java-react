package com.dev.e_commerce.mappers;


import com.dev.e_commerce.dtos.request.ProductRequestDto;
import com.dev.e_commerce.dtos.response.ProductResponseDTO;
import com.dev.e_commerce.models.Category;
import com.dev.e_commerce.models.Product;
import com.dev.e_commerce.services.interfaces.CloudinaryService;
import org.mapstruct.Context;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.web.multipart.MultipartFile;

@Mapper(componentModel = "spring")
public interface ProductMapper {
  @Mapping(target = "photoUrl", source = "photo")
  Product toEntity(ProductRequestDto productRequestDto, @Context CloudinaryService cloudinaryService);

  @Mapping(target = "sellerId", source = "seller.id")
  ProductResponseDTO toProductResponseDto(Product product);


  default Category mapCategory(String category) {
    return category != null ? Category.valueOf(category) : null; // Convierte el String a Category
  }

  default String map(MultipartFile photo, @Context CloudinaryService cloudinaryService){
    return cloudinaryService.uploadImage(photo);
  }
}
