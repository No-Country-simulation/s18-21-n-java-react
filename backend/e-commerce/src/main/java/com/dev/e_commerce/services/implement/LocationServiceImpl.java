package com.dev.e_commerce.services.implement;

import com.dev.e_commerce.dtos.request.LocationRequestDto;
import com.dev.e_commerce.dtos.response.LocationResponseDto;
import com.dev.e_commerce.exceptions.ApplicationException;
import com.dev.e_commerce.mappers.LocationMapper;
import com.dev.e_commerce.models.Location;
import com.dev.e_commerce.repositories.LocationRepository;
import com.dev.e_commerce.services.interfaces.LocationService;
import org.mapstruct.factory.Mappers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class LocationServiceImpl implements LocationService {

    private final LocationRepository locationRepository;

    LocationMapper locationMapper = Mappers.getMapper(LocationMapper.class);

    @Autowired
    public LocationServiceImpl(LocationRepository locationRepository) {
        this.locationRepository = locationRepository;
    }

    @Override
    public LocationResponseDto save(LocationRequestDto requestDTO) {
        Location location = new Location();
        location.setAddress(requestDTO.address());
        location.setCity(requestDTO.city());
        location.setCountry(requestDTO.country());
        location = locationRepository.save(location);
        return new LocationResponseDto(location.getCountry(),location.getCity(),location.getAddress());
    }

    @Override
    public Optional<LocationResponseDto> findById(Long id) {
        return locationRepository.findById(id)
                .map(locationMapper::toLocationResponseDto);
    }

    @Override
    public Iterable<LocationResponseDto> findAll() {
        List<LocationResponseDto> responseList = new ArrayList<>();
        for(Location location : locationRepository.findAll()){
                responseList.add(new LocationResponseDto(location.getCountry(), location.getCity(), location.getAddress()));
        }
        return responseList;
    }

    @Override
    public void deleteById(Long id) {
        locationRepository.deleteById(id);
    }

    @Override
    public Location getById(Long id) {
        return this.locationRepository.findById(id)
                .orElseThrow(()-> new ApplicationException("Location not found, id:"+id));
    }
}
