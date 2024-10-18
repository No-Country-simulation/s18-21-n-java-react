package com.dev.e_commerce.mappers;


import com.dev.e_commerce.dtos.request.ProductRequestDto;
import com.dev.e_commerce.dtos.response.ProductResponseDTO;
import com.dev.e_commerce.models.Category;
import com.dev.e_commerce.models.Client;
import com.dev.e_commerce.models.Product;
import com.dev.e_commerce.services.interfaces.CloudinaryService;
import org.mapstruct.Context;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.springframework.web.multipart.MultipartFile;

@Mapper(componentModel = "spring")
public interface ProductMapper {
  @Mapping(target = "photoUrl", source = "photo")
  @Mapping(target = "seller", source = "clientId")
  Product toEntity(ProductRequestDto productRequestDto, @Context CloudinaryService cloudinaryService);

  @Mapping(target = "clientId", source = "seller.id")
  ProductResponseDTO toProductResponseDto(Product product);


  default Category mapCategory(String category) {
    return category != null ? Category.valueOf(category) : null; // Convierte el String a Category
  }
  /*mapeo provisional hasta que client service este implementado*/
  default Client map(Long id){
    Client client = new Client();
    client.setId(id);
    return client;
  }

  default String map(MultipartFile photo, @Context CloudinaryService cloudinaryService){
    return cloudinaryService.uploadImage(photo);
  }
}
