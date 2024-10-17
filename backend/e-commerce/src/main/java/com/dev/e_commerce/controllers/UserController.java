package com.dev.e_commerce.controllers;

import com.dev.e_commerce.dtos.ApiResponseDto;
import com.dev.e_commerce.dtos.user.UpdatePasswordDto;
import com.dev.e_commerce.dtos.user.UserRequestDto;
import com.dev.e_commerce.dtos.user.UserResponseDto;
import com.dev.e_commerce.exceptions.ApplicationException;
import com.dev.e_commerce.mappers.user.UserMapper;
import com.dev.e_commerce.services.implement.MailService;
import com.dev.e_commerce.services.interfaces.UserService;
import io.swagger.v3.oas.annotations.Operation;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
@RequestMapping("${api.base}/user")
public class UserController {
    private final UserService userService;
    private final UserMapper userMapper;


    @Autowired
    private UserController(UserService userService, UserMapper userMapper, MailService mailService) {
        this.userService = userService;
        this.userMapper = userMapper;
    }


    @PostMapping("/register")
    @Operation(summary = "Registra un usuario")
    public ResponseEntity<ApiResponseDto<UserResponseDto>> save(@RequestBody @Valid UserRequestDto requestDto) {

        UserResponseDto responseDto = userService.save(requestDto);
        if (responseDto == null) {
            return new ResponseEntity<>(new ApiResponseDto<>(false, "User not saved", null), HttpStatus.BAD_REQUEST);
        }
        return new ResponseEntity<>(new ApiResponseDto<>(true, "User has been created " +
                "please verify your email", responseDto), HttpStatus.CREATED);
    }
    @Operation(summary = "Verifica el código enviado")
    @PostMapping("/verifyCode")
    public ResponseEntity<ApiResponseDto<String>> verifyCode(@RequestParam String email, @RequestParam String codigo) {
        if (userService.validateCode(email, codigo)) {
            return new ResponseEntity<>(new ApiResponseDto<>(true, "Código de verificación correcto", null), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ApiResponseDto<>(false, "Código de verificación incorrecto", null), HttpStatus.BAD_REQUEST);
        }
    }


    @GetMapping("/findAll")
    @Operation(summary = "Obtiene todos los usuarios")
    public ResponseEntity<ApiResponseDto<UserResponseDto>> findAll() {
        try {
            Iterable<UserResponseDto> users = userService.findAll();
            return new ResponseEntity<>(new ApiResponseDto<>(true, "Users found", users), HttpStatus.OK);
        } catch (Exception e) {
            throw new ApplicationException("An ocurred an error while trying to find users");
        }
    }


    @GetMapping("/{id}")
    @Operation(summary = "Obtiene un usuario por su ID")
    public ResponseEntity<ApiResponseDto<UserResponseDto>> getUserById(@PathVariable Long id) {
        Optional<UserResponseDto> user = userService.findById(id);
        if (user.isPresent()) {
            UserResponseDto userResponseD = user.get();
            String message = "User found";
            return new ResponseEntity<>(new ApiResponseDto<>(true, message, userResponseD), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ApiResponseDto<>(false, "User not found", null), HttpStatus.NOT_FOUND);
        }
    }

    @PatchMapping("/{id}")
    @Operation(summary = "Actualiza un usuario")
    public ResponseEntity<ApiResponseDto<UserResponseDto>> updateUser(@PathVariable Long id, @RequestBody UserRequestDto requestDto) {
        Optional<UserResponseDto> user = userService.findById(id);
        if (user.isPresent()) {
            userService.updateUser(requestDto,id);
            String message = "User updated";
            return new ResponseEntity<>(new ApiResponseDto<>(true, message, user.get()), HttpStatus.NO_CONTENT);
        } else {
            return new ResponseEntity<>(new ApiResponseDto<>(false, "User not found", null), HttpStatus.NOT_FOUND);
        }
    }
    @DeleteMapping("/{id}")
    @Operation(summary = "Elimina un usuario")
    public ResponseEntity<ApiResponseDto<UserResponseDto>> deleteById(@PathVariable Long id) {
        Optional<UserResponseDto> user = userService.findById(id);
        if (user.isPresent()) {
            userService.deleteById(id);
            String message = "User deleted";
            return new ResponseEntity<>(new ApiResponseDto<>(true, message, user.get()), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ApiResponseDto<>(false, "User not found", null), HttpStatus.NOT_FOUND);
        }
    }

    @PostMapping("/{id}/changePassword")
    @Operation(summary = "Cambia la contraseña de un usuario")
    public ResponseEntity<ApiResponseDto<UserResponseDto>> changePassword(@PathVariable Long id, @RequestBody UpdatePasswordDto updatePasswordDto) {
        Optional<UserResponseDto> user = userService.findById(id);
        if (user.isPresent()) {
            userService.changePassword(updatePasswordDto, id);
            String message = "Password changed";
            return new ResponseEntity<>(new ApiResponseDto<>(true, message, null), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(new ApiResponseDto<>(false, "User not found", null), HttpStatus.NOT_FOUND);
        }
    }

}
