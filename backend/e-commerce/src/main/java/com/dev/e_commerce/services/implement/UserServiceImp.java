package com.dev.e_commerce.services.implement;

import com.dev.e_commerce.dtos.request.UpdatePasswordDto;
import com.dev.e_commerce.dtos.request.UserRequestDto;
import com.dev.e_commerce.dtos.response.UserResponseDto;
import com.dev.e_commerce.exceptions.ApplicationException;
import com.dev.e_commerce.mappers.ClientMapper;
import com.dev.e_commerce.mappers.LocationMapper;
import com.dev.e_commerce.mappers.UserMapper;
import com.dev.e_commerce.models.Client;
import com.dev.e_commerce.models.Location;
import com.dev.e_commerce.models.Role;
import com.dev.e_commerce.models.User;
import com.dev.e_commerce.repositories.UserRepository;
import com.dev.e_commerce.services.interfaces.ClientService;
import com.dev.e_commerce.services.interfaces.CloudinaryService;
import com.dev.e_commerce.services.interfaces.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImp implements UserService {
  private final UserMapper userMapper;
  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final MailService mailService;
  private final CloudinaryService cloudinaryService;
  private final ClientService clientService;
  private final ClientMapper clientMapper;
  private final LocationMapper locationMapper;

  @Autowired
  public UserServiceImp(UserRepository userRepository, PasswordEncoder passwordEncoder, UserMapper userMapper, MailService mailService, CloudinaryService cloudinaryService, ClientService clientService, ClientMapper clientMapper, LocationMapper locationMapper) {
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
    this.userMapper = userMapper;
    this.mailService = mailService;
    this.cloudinaryService = cloudinaryService;
    this.clientService = clientService;
    this.clientMapper = clientMapper;
    this.locationMapper = locationMapper;
  }

  @Override
  public UserResponseDto save(UserRequestDto requestDTO) {
    User user = userMapper.toEntity(requestDTO, cloudinaryService);
    user.setPassword(passwordEncoder.encode(requestDTO.password()));
    user.setIsEnabled(false);
    user.setRole(Role.CLIENT);
    user.setCreatedAt(LocalDate.now());
    user.setVerificationCode(mailService.generateVerificationCode());

    Client client = this.clientMapper.toEntityFromUser(requestDTO);
    this.clientMapper.updateFromUser(client, user);
    Location location = this.locationMapper.toEntityFromUserDto(requestDTO);
    client.setLocation(location);
    clientService.save(client);
    mailService.sendEmailToVerification(user.getEmail(), user.getVerificationCode());
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

  @Override
  @Transactional
  public void updateUser(UserRequestDto requestDto, Long id) {
    Optional<User> response = userRepository.findById(id);
    if (response.isPresent()) {
      User userUpdate = response.get();
      userMapper.updateUser(requestDto, userUpdate, cloudinaryService);
      userRepository.save(userUpdate);
    } else {
      throw new ApplicationException("User not found");
    }
  }

  @Override
  @Transactional
  public void changePassword(UpdatePasswordDto requestDto, Long id) {

    Optional<User> user = userRepository.findById(id);
    if (user.isEmpty()) {
      throw new ApplicationException("User not found");
    }
    String oldPassword = user.get().getPassword();
    if (!passwordEncoder.matches(requestDto.oldPassword(), oldPassword)) {
      throw new ApplicationException("Wrong password");
    }
    user.get().setPassword(passwordEncoder.encode(requestDto.newPassword()));
    userRepository.save(user.get());
  }

  @Override
  public boolean validateCode(String email, String codeSend) {
    // Buscar usuario por correo electrónico
    User user = userRepository.findByEmail(email).orElse(null);

    if (user != null && user.getVerificationCode().equals(codeSend)) {
      user.setIsEnabled(true);
      userRepository.save(user);
      return true;
    }
    return false;
  }

}
