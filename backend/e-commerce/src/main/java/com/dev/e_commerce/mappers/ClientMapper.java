package com.dev.e_commerce.mappers;

import com.dev.e_commerce.dtos.request.ClientReqDto;
import com.dev.e_commerce.dtos.request.UserRequestDto;
import com.dev.e_commerce.dtos.response.ClientResDto;
import com.dev.e_commerce.models.Client;
import com.dev.e_commerce.models.User;
import org.mapstruct.*;

@Mapper(componentModel = "spring",uses={})
public interface ClientMapper {
    @Mapping(target = "documentIdentification", source = "identification")
    @Mapping(target = "birthDate", source = "birthdate")
    Client toEntity(ClientReqDto request);

    @Mapping(target = "birthdate", source = "birthDate")
    @Mapping(target = "identification", source = "documentIdentification")
    @Mapping(target = "address", source = "location.address")
    @Mapping(target = "city", source = "location.city")
    @Mapping(target = "country", source = "location.country")
    ClientResDto toResponse(Client client);

    @Mapping(target = "documentIdentification", source = "identification")
    @Mapping(target = "birthDate", source = "birthdate")
    Client toEntityFromUser(UserRequestDto request);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "id", ignore = true)
    @Mapping(target = "authorities", ignore = true)
    void update(@MappingTarget Client previous, Client current);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    @Mapping(target = "authorities", ignore = true)
    void updateFromUser(@MappingTarget Client previous, User user);
}
