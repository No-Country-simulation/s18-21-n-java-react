package com.dev.e_commerce.controllers;

import com.dev.e_commerce.dtos.ApiResponseDto;
import com.dev.e_commerce.dtos.request.LocationRequestDto;
import com.dev.e_commerce.dtos.response.LocationResponseDto;
import com.dev.e_commerce.mappers.LocationMapper;
import com.dev.e_commerce.models.Location;
import com.dev.e_commerce.services.interfaces.LocationService;
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
import java.util.Optional;

@RestController
@RequestMapping("${api.base}/location")
@Tag(name = "Location Management", description = "Location API")
public class LocationController {


  @Autowired
  private LocationService locationService;

  @Autowired
  private LocationMapper locationMapper;

  @Operation(
          description = "Create a new location",
          summary = "Create a new location",
          responses = {
                  @ApiResponse(
                          responseCode = "200",
                          description = "Location created successfully",
                          content = {
                                  @Content(mediaType = "application/json",
                                          schema = @Schema(implementation = ApiResponseDto.class))
                          })
          }
  )

  @PostMapping("/")
  public ResponseEntity<LocationResponseDto> createLocation(@RequestBody @Parameter(
          description = "DTO Location",
          schema = @Schema(implementation = LocationResponseDto.class)
  ) LocationRequestDto locationRequestDto) {
    try {
      Location location = locationMapper.toLocation(locationRequestDto);
      LocationResponseDto locationDto = locationMapper.toLocationResponseDto(location);
      ApiResponseDto<LocationResponseDto> response = new ApiResponseDto<>(true, "Location created sucessfully", locationDto);
      return ResponseEntity.ok(response.getData());
    } catch (Exception e) {
      ApiResponseDto<LocationResponseDto> locationResponse = new ApiResponseDto<>(false, "Error, location can't be saved", null);
      return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(locationResponse.getData());
    }


  }

    @Operation(
            description = "Get location by id",
            summary = "Get location by id",
            responses = {
                    @ApiResponse(
                            responseCode= "200",
                            description = "Location retrieved successfully",
                            content = @Content(
                                    mediaType = "application/json",
                                    schema =  @Schema(implementation = ApiResponseDto.class)
                            )
                    )


            }


    )
    @GetMapping("/{location_id}")
    public ResponseEntity<ApiResponseDto<LocationResponseDto>> findLocationById(@PathVariable @Parameter(description = "find Location by Id",required = true) Long location_id){
            try{
                Optional<LocationResponseDto> location = this.locationService.findById(location_id);
                  LocationResponseDto locationResponseDto = new LocationResponseDto(location);
                ApiResponseDto<LocationResponseDto> response = new ApiResponseDto<>(true, "Location found", null);
                return ResponseEntity.ok(response);
            }catch (Exception e){
                ApiResponseDto<LocationResponseDto> errorResponse = new ApiResponseDto<>(false, "Location not found", null);
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
  public ResponseEntity<ApiResponseDto<Iterable<LocationResponseDto>>> findAllLocations() {
    Iterable<LocationResponseDto> locations = this.locationService.findAll();

    ApiResponseDto<Iterable<LocationResponseDto>> responseDto = new ApiResponseDto<>(
            true,
            "All location found",
            locations
    );

    return ResponseEntity.ok(responseDto);

  }

}
