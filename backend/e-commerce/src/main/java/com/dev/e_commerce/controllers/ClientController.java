package com.dev.e_commerce.controllers;

import com.dev.e_commerce.dtos.ApiResponseDto;
import com.dev.e_commerce.dtos.request.ClientRequestDto;
import com.dev.e_commerce.dtos.response.ClientResponseDto;
import com.dev.e_commerce.mappers.ClientMapper;
import com.dev.e_commerce.models.Client;
import com.dev.e_commerce.services.interfaces.ClientService;
import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.Parameter;
import io.swagger.v3.oas.annotations.media.Content;
import io.swagger.v3.oas.annotations.media.Schema;
import io.swagger.v3.oas.annotations.responses.ApiResponse;
import io.swagger.v3.oas.annotations.tags.Tag;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("${api.base}/client")
@Tag(name = "Client Managment", description = "Client API")
public class ClientController {

    @Autowired
    private ClientService clientService;

    @Autowired
    private ClientMapper clientMapper;
    @Operation(
            description = "Create a new client",
            summary = "Create a new client",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Client created successfully",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = ApiResponseDto.class))
                            })
            }
    )

    @PostMapping("/")
    public ResponseEntity<ClientResponseDto> createClient(@RequestBody @Parameter(
            description = "DTO Client",
            schema = @Schema(implementation = ClientRequestDto.class))ClientRequestDto clientRequestDto){
            try {
                Client client  = clientMapper.toClient(clientRequestDto);
                client = this.clientService.saveClient(client);
                ClientResponseDto responseDto = clientMapper.toClientResponseDto(client);
                ApiResponseDto<ClientResponseDto> response = new ApiResponseDto<>(true,"Client created sucessfully", responseDto);
                return   ResponseEntity.ok(response.getData());
            }catch (Exception e){
                ApiResponseDto<ClientResponseDto> errorResponse = new ApiResponseDto<>(false,"Client creation faild", null);
                return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse.getData());
            }
    }
    @Operation(description = "Get Client By Id",
            summary = "Get Client By Id",
            responses = {
                    @ApiResponse(
                            responseCode = "200",
                            description = "Client retrieved successfully",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = ApiResponseDto.class))
                            })

            })

    @GetMapping("/{idClient}")
    public ResponseEntity<ApiResponseDto<ClientResponseDto>> findClientById(@PathVariable @Parameter(description = "find Client by Id",required = true) Long idClient){
        try{
            Client client = this.clientService.findClientById(idClient);
            ClientResponseDto clientRequestDto = clientMapper.toClientResponseDto(client);
            ApiResponseDto<ClientResponseDto> responseDto = new ApiResponseDto<>(true,"Client find sucessfully", clientRequestDto);
            return ResponseEntity.ok(responseDto);

        }catch (Exception e){
            ApiResponseDto<ClientResponseDto> errorResponse = new ApiResponseDto<>(false,"Client not found", null);
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(errorResponse);
        }
    }
    @Operation(description = "Get all orders",
            summary = "Get all orders",
            responses = {
                    @ApiResponse(
                            responseCode = "200", description = "Orders retrieved successfully",
                            content = {
                                    @Content(mediaType = "application/json",
                                            schema = @Schema(implementation = ApiResponseDto.class))

                            })
            })

     @GetMapping("/")
    public ResponseEntity<ApiResponseDto<List<Client>>> findAllClients(){
        List<Client> clients = this.clientService.findAll();

        ApiResponseDto<List<Client>> responseDto = new ApiResponseDto<>(
                true,
                "Clients find",
                clients
        );

                return ResponseEntity.ok(responseDto);

    }

}
