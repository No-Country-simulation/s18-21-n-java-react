package com.dev.e_commerce.mappers;

import com.dev.e_commerce.dtos.request.UserRequestDto;
import com.dev.e_commerce.dtos.response.UserResponseDto;
import com.dev.e_commerce.models.User;
import com.dev.e_commerce.services.interfaces.CloudinaryService;
import org.mapstruct.Context;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingTarget;
import org.springframework.web.multipart.MultipartFile;

@Mapper(componentModel = "spring")
public abstract class UserMapper {
  @Mapping(target = "id" , source = "id")
  public abstract UserResponseDto toResponseDto(User user);

  @Mapping(target = "photoUrl", source = "photo")
  public abstract User toEntity(UserRequestDto userRequestDto, @Context CloudinaryService cloudinaryService);

  @Mapping(target = "role", ignore = true)
  @Mapping(target = "password", ignore = true)
  @Mapping(target = "photoUrl", source = "photo")
  public abstract User updateUser(UserRequestDto userRequestDto, @MappingTarget User user, @Context CloudinaryService cloudinaryService);

  public String map(MultipartFile photo, @Context CloudinaryService cloudinaryService){
    return cloudinaryService.uploadImage(photo);
  }
}
