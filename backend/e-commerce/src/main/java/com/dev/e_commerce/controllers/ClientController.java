package com.dev.e_commerce.controllers;

import com.dev.e_commerce.dtos.ApiResponseDto;
import com.dev.e_commerce.dtos.OnCreate;
import com.dev.e_commerce.dtos.OnUpdate;
import com.dev.e_commerce.dtos.request.ClientReqDto;
import com.dev.e_commerce.dtos.response.ClientResDto;
import com.dev.e_commerce.mappers.ClientMapper;
import com.dev.e_commerce.mappers.LocationMapper;
import com.dev.e_commerce.models.Client;
import com.dev.e_commerce.models.Location;
import com.dev.e_commerce.services.interfaces.ClientService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.annotation.Validated;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.StreamSupport;

@RestController
@RequiredArgsConstructor
@RequestMapping("${api.base}/client")
@Tag(name = "Client Management", description = "Client controller")
public class ClientController {
  private final ClientService clientService;
  private final ClientMapper clientMapper;
  private final LocationMapper locationMapper;

  @Operation(summary = "Create a new client")
  @PostMapping
  public ResponseEntity<?> create(
          @RequestBody
          @Validated(OnCreate.class)
          @Parameter(description = "DTO client request")
          ClientReqDto request) {
    Client client = this.clientMapper.toEntity(request);
    Location location = this.locationMapper.toEntityFromClientDto(request);
    client.setLocation(location);
    client = this.clientService.save(client);
    var response = new ApiResponseDto<ClientResDto>(
            true,
            "Client created successfully",
            this.clientMapper.toResponse(client));
    return ResponseEntity.status(HttpStatus.CREATED)
            .body(response);
  }

  @Operation(summary = "Get Client by Id")
  @GetMapping("/{id}")
  public ResponseEntity<?> getById(@PathVariable
                                   @Parameter(description = "Get Client by Id", required = true)
                                   Long id) {

    Client currentClient = this.clientService.findById(id);
    var response = new ApiResponseDto<ClientResDto>(
            true,
            "Client found successfully",
            this.clientMapper.toResponse(currentClient));
    return ResponseEntity.ok(response);
  }

  @Operation(summary = "Get all Clients")
  @GetMapping
  public ResponseEntity<?> getAll() {
    List<ClientResDto> Clients = StreamSupport.stream(this.clientService.findAll().spliterator(), false)
            .map(this.clientMapper::toResponse)
            .toList();
    var response = new ApiResponseDto<List<ClientResDto>>(
            true,
            "Clients found successfully",
            Clients);
    return ResponseEntity.ok(response);
  }

  @Operation(summary = "Update Client")
  @PutMapping("/{id}")
  public ResponseEntity<?> updateById(
          @Parameter(required = true, description = "Clients id")
          Long id,
          @Parameter(description = "All fields are optional")
          @RequestBody @Validated(OnUpdate.class) ClientReqDto request) {

    Client updated = this.clientMapper.toEntity(request);
    updated = this.clientService.updateById(id, updated);
    var response = new ApiResponseDto<ClientResDto>(
            true,
            "Client updated successfully",
            this.clientMapper.toResponse(updated));
    return ResponseEntity.ok(response);
  }

  @Operation(summary = "Delete Client by id")
  @DeleteMapping("/{id}")
  public ResponseEntity<?> deleteById(
          @Parameter(required = true, description = "Client id")
          Long id
  ) {
    this.clientService.deleteById(id);
    var response = new ApiResponseDto<ClientResDto>(
            true,
            "Client deleted successfully",
            null);
    return ResponseEntity.ok(response);
  }
}
