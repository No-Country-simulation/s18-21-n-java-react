package com.dev.e_commerce.services.implement;


import com.dev.e_commerce.dtos.request.ProductRequestDto;
import com.dev.e_commerce.dtos.response.ProductResponseDTO;
import com.dev.e_commerce.exceptions.ApplicationException;
import com.dev.e_commerce.mappers.ProductMapper;
import com.dev.e_commerce.models.Client;
import com.dev.e_commerce.models.DetailsOrder;
import com.dev.e_commerce.models.Product;
import com.dev.e_commerce.repositories.ProductRepository;
import com.dev.e_commerce.services.interfaces.AuthService;
import com.dev.e_commerce.services.interfaces.CloudinaryService;
import com.dev.e_commerce.services.interfaces.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductInterfacesImpl implements ProductService {

  // inyeccion
  @Autowired
  private ProductRepository productRepository;
  @Autowired
  private ProductMapper productMapper;
  @Autowired
  private CloudinaryService cloudinaryService;
  @Autowired
  private AuthServiceImp authService;


  // LISTADO DE TODOS LOS PRODUCTOS

  // LISTADO DE PRODUCTOS PAGINADOS
  @Override
  public Page<Product> listProduct(int page, int size) {
    Pageable pageable = PageRequest.of(page, size);
    Page<Product> productPage = productRepository.findAll(pageable);
    return productPage;
  }

  // GUARDAR PRODUCTO
  @Override
  public Product guardarProducto(Product product) {
    Client authClient = this.authService.getAuthClient();
    product.setSeller(authClient);
    return this.productRepository.save(product);
  }


  // BUSCAR PRODUCTO POR ID
  @Override
  public Optional<ProductResponseDTO> buscarProducto(long productId) {
    Optional<Product> product = productRepository.findById(productId);
    if (product.isEmpty()) {
      throw new ApplicationException("Product not found");
    }
    return Optional.ofNullable(productMapper.toProductResponseDto(product.get()));
  }


  //MODIFICAR PRODUCTO
  @Override
  public void modificarProducto(ProductRequestDto productRequestDto, long productId) {
    Product product = productMapper.toEntity(productRequestDto, cloudinaryService);
    Optional<Product> response = productRepository.findById(productId);
    if (response.isPresent()) {
      product.setId(productId);
      productRepository.save(product);
    } else {
      throw new ApplicationException("Product not found");
    }
  }

  // ACTUALIZAR STOCK
  @Override
  public void updateStock(List<DetailsOrder> detailsOrders){

    for (DetailsOrder detailsOrder : detailsOrders) {
      Product product = detailsOrder.getProduct();
      if(product.getStock() < detailsOrder.getQuantity()) {
        throw new ApplicationException("Product: "+ product.getName()+" out of stock, try again, quantity: "+product.getStock());
      }
      product.setStock(product.getStock() - detailsOrder.getQuantity());
      productRepository.save(product);
    }
  }

  // ELIMINAR PRODUCTO
  @Override
  public void EliminarProducto(long productId) {
    if (productRepository.existsById(productId)) {
      this.productRepository.deleteById(productId);
    }
    System.out.println("producto NO eliminado NO se encontro"); // AQUI ESTARIAN EXCEPCIONES

  }

  public long countTotalProducts() {
    // Este método cuenta el número total de productos en la base de datos
    return productRepository.count();
  }

  @Override
  public Product getById(Long id) {
    return this.productRepository.findById(id)
            .orElseThrow(()-> new ApplicationException("Product not found, id"+id));
  }

}





