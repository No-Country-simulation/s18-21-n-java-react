package com.dev.e_commerce.mappers;

import com.dev.e_commerce.dtos.request.LocationRequestDto;
import com.dev.e_commerce.dtos.response.LocationResponseDto;
import com.dev.e_commerce.models.Location;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING,uses={})
public interface  LocationMapper {

    Location toLocation(LocationRequestDto locationRequestDto);
    LocationResponseDto toLocationResponseDto(Location location);


}
