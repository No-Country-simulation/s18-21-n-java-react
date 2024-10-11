package com.dev.e_commerce.mappers.user;

import com.dev.e_commerce.dtos.user.UserRequestDto;
import com.dev.e_commerce.dtos.user.UserResponseDto;
import com.dev.e_commerce.models.User;
import org.mapstruct.Mapper;

@Mapper(componentModel = "spring")
public abstract class UserMapper {

    public abstract UserResponseDto toResponseDto(User user);
    public abstract User toEntity(UserRequestDto userRequestDto);



}
