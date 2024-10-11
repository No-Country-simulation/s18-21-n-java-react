package com.dev.e_commerce.services.implement;

import com.dev.e_commerce.dtos.user.UserRequestDto;
import com.dev.e_commerce.dtos.user.UserResponseDto;
import com.dev.e_commerce.exceptions.ApplicationException;
import com.dev.e_commerce.mappers.user.UserMapper;
import com.dev.e_commerce.models.User;
import com.dev.e_commerce.repositories.UserRepository;
import com.dev.e_commerce.services.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImp implements UserService {
    private final UserMapper userMapper;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;

    @Autowired
    public UserServiceImp(UserRepository userRepository, PasswordEncoder passwordEncoder, UserMapper userMapper) {
        this.userRepository = userRepository;
        this.passwordEncoder = passwordEncoder;
        this.userMapper = userMapper;
    }

    @Override
    public UserResponseDto save(UserRequestDto requestDTO) {
        User user = userMapper.toEntity(requestDTO);
        user.setPassword(passwordEncoder.encode(requestDTO.password()));
        user.setIsEnabled(true);
        userRepository.save(user);
        return userMapper.toResponseDto(user);
    }

    @Override
    public Optional<UserResponseDto> findById(Long id) {
        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty()) {
            throw new ApplicationException("User not found");
        }
        return Optional.ofNullable(userMapper.toResponseDto(user.get()));
    }

    @Override
    public Iterable<UserResponseDto> findAll() {
        List<User> users = userRepository.findAll();
        return users.stream().map(userMapper::toResponseDto).toList();
    }

    @Override
    public void deleteById(Long id) {

        Optional<User> user = userRepository.findById(id);
        if (user.isEmpty()) {
            throw new ApplicationException("User not found");
        }
        user.get().setIsEnabled(false);
        userRepository.save(user.get());
    }

}
