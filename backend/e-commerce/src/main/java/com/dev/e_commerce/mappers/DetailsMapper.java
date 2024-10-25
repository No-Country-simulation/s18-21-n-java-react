package com.dev.e_commerce.mappers;

import com.dev.e_commerce.dtos.request.DetailsOrderReq;
import com.dev.e_commerce.dtos.response.DetailsOrderRes;
import com.dev.e_commerce.models.DetailsOrder;
import com.dev.e_commerce.models.Order;
import com.dev.e_commerce.models.Product;
import com.dev.e_commerce.services.interfaces.OrderService;
import com.dev.e_commerce.services.interfaces.ProductService;
import org.mapstruct.*;

import java.util.List;

@Mapper(componentModel = "spring")
public interface DetailsMapper {
  @Mapping(target = "product", source = "productId")
  DetailsOrder reqToEntity(DetailsOrderReq request,
                           @Context ProductService productService);

  @Mapping(target = "orderId", source = "order.id")
  @Mapping(target = "productId", source = "product.id")
  @Mapping(target = "sellerId", source = "seller.id")
  DetailsOrderRes entityToRes(DetailsOrder detailsOrder);

  List<DetailsOrderRes> listEntityToRes(List<DetailsOrder> detailsOrders);

  @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
  @Mapping(target = "id", ignore = true)
  void updateEntity(@MappingTarget DetailsOrder previous, DetailsOrder current);

  default Order map(Long id, @Context OrderService orderService){
    return orderService.getOrderById(id);
  }
  default Product map(Long id, @Context ProductService productService){
    return productService.getById(id);
  }
}
