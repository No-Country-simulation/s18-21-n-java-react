package com.dev.e_commerce.dtos.response;

import java.util.Optional;

public record LocationResponseDto(
        String country,
        String city,
        String adress
) {

    public LocationResponseDto(  Optional<LocationResponseDto> location ){
            this( location.get().country,location.get().city,location.get().adress );
    }

    public LocationResponseDto(LocationResponseDto locationResponseDto) {
        this( locationResponseDto.country,locationResponseDto.city,locationResponseDto.adress );
    }


}
