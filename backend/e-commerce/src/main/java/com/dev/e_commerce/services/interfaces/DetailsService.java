package com.dev.e_commerce.services.interfaces;

import com.dev.e_commerce.models.DetailsOrder;

import java.util.List;

public interface DetailsService extends EntityGenericService<DetailsOrder>{
  List<DetailsOrder> createAll(List<DetailsOrder> orders);
}
