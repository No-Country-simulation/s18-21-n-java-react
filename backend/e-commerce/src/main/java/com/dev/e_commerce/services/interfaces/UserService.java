package com.dev.e_commerce.services.interfaces;

import com.dev.e_commerce.dtos.user.UserRequestDto;
import com.dev.e_commerce.dtos.user.UserResponseDto;
import com.dev.e_commerce.models.User;
import org.springframework.stereotype.Service;

@Service
public interface UserService extends ServiceGeneric< User, UserRequestDto, UserResponseDto> {




}
