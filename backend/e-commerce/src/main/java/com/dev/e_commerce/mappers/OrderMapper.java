package com.dev.e_commerce.mappers;

import com.dev.e_commerce.dtos.reponse.OrderResponseDto;
import com.dev.e_commerce.dtos.request.OrderRequestDto;
import com.dev.e_commerce.models.Order;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING,uses={})
public interface OrderMapper {

Order toOrderEntity(OrderRequestDto orderRequestDtoDtoDto);
OrderResponseDto toOrderResponseDto(Order order);

}
