package com.dev.e_commerce.mappers;

import com.dev.e_commerce.dtos.request.ClientReqDto;
import com.dev.e_commerce.dtos.request.UserRequestDto;
import com.dev.e_commerce.dtos.response.LocationResDto;
import com.dev.e_commerce.models.Location;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;

@Mapper(componentModel = "spring")
public interface LocationMapper {
  @Mapping(target = "city", source = "city")
  @Mapping(target = "address", source = "address")
  @Mapping(target = "country", source = "country")
  Location toEntityFromClientDto(ClientReqDto request);
  @Mapping(target = "city", source = "city")
  @Mapping(target = "address", source = "address")
  @Mapping(target = "country", source = "country")
  Location toEntityFromUserDto(UserRequestDto request);

  LocationResDto toResponse(Location location);
}
