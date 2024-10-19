package com.dev.e_commerce.mappers;

import com.dev.e_commerce.dtos.request.ClientRequestDto;
import com.dev.e_commerce.dtos.response.ClientResponseDto;
import com.dev.e_commerce.models.Client;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING,uses={})
public interface ClientMapper {

    Client toClient(ClientRequestDto clientRequestDto);

    ClientResponseDto toClientResponseDto(Client client);

}
