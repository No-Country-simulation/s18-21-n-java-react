package com.dev.e_commerce.services.interfaces;

import com.dev.e_commerce.dtos.request.LocationRequestDto;
import com.dev.e_commerce.dtos.response.LocationResponseDto;
import com.dev.e_commerce.models.Location;

public interface LocationService extends ServiceGeneric<Location, LocationRequestDto, LocationResponseDto>{
}
