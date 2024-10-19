package com.dev.e_commerce.mappers;

import com.dev.e_commerce.dtos.request.UserRequestDto;
import com.dev.e_commerce.dtos.response.UserResponseDto;
import com.dev.e_commerce.models.User;
import org.mapstruct.*;

@Mapper(componentModel = "spring")
public abstract class UserMapper {

    public abstract UserResponseDto toResponseDto(User user);

    public abstract User toEntity(UserRequestDto userRequestDto);

    @Mapping(target = "role", ignore = true)
@Mapping(target = "password", ignore = true)
    public abstract User updateUser(UserRequestDto userRequestDto, @MappingTarget User user);



}
