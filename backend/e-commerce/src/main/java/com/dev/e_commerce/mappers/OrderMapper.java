package com.dev.e_commerce.mappers;

import com.dev.e_commerce.dtos.request.OrderRequestDto;
import com.dev.e_commerce.dtos.response.OrderResponseDto;
import com.dev.e_commerce.models.Order;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING, uses = {DetailsMapper.class})
public interface OrderMapper {

  Order toOrderEntity(OrderRequestDto orderRequestDtoDtoDto);

  @Mapping(target = "clientId", source = "client.id")
  OrderResponseDto toOrderResponseDto(Order order);

}
