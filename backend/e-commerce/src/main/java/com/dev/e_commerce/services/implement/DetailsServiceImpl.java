package com.dev.e_commerce.services.implement;

import com.dev.e_commerce.exceptions.ApplicationException;
import com.dev.e_commerce.mappers.DetailsMapper;
import com.dev.e_commerce.models.DetailsOrder;
import com.dev.e_commerce.repositories.DetailsOrderRepository;
import com.dev.e_commerce.services.interfaces.DetailsService;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class DetailsServiceImpl implements DetailsService {
  private final DetailsOrderRepository detailsOrderRepository;
  private final DetailsMapper detailsMapper;
  @Override
  public DetailsOrder save(DetailsOrder entity) {
    var currentProduct = entity.getProduct();
    entity.setPrice(currentProduct.getPrice());
    entity.setSeller(currentProduct.getSeller());
    return this.detailsOrderRepository.save(entity);
  }

  @Override
  public DetailsOrder findById(Long id) {
    return this.detailsOrderRepository.findById(id)
            .orElseThrow(()-> new ApplicationException("Detail not found, id"+id));
  }

  @Override
  public Iterable<DetailsOrder> findAll() {
    return this.detailsOrderRepository.findAll();
  }

  @Override
  public void deleteById(Long id) {
    this.findById(id);
    this.deleteById(id);
  }

  @Override
  public DetailsOrder updateById(Long id, DetailsOrder entity) {
    DetailsOrder previous = this.findById(id);
    this.detailsMapper.updateEntity(previous, entity);
    return this.detailsOrderRepository.save(previous);
  }

  @Override
  public List<DetailsOrder> createAll(List<DetailsOrder> details) {
    details.forEach(detail->{
      detail.setPrice(detail.getProduct().getPrice());
      detail.setSeller(detail.getProduct().getSeller());
    });
    return this.detailsOrderRepository.saveAll(details);
  }
}
