package com.dev.e_commerce.services.interfaces;

import org.springframework.web.multipart.MultipartFile;

public interface CloudinaryService {
  String uploadImage(MultipartFile file);
}
