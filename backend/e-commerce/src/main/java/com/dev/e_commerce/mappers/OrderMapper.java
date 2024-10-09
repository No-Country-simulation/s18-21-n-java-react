package com.dev.e_commerce.mappers;

import ch.qos.logback.core.model.ComponentModel;
import com.dev.e_commerce.dtos.OrderDto;
import com.dev.e_commerce.models.Order;
import org.mapstruct.Mapper;
import org.mapstruct.MappingConstants;

@Mapper(componentModel = MappingConstants.ComponentModel.SPRING,uses={})
public interface OrderMapper {

Order toOrderEntity(OrderDto orderDto);
OrderDto toOrderDto(Order order);

}
