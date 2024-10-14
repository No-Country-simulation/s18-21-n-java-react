package com.dev.e_commerce.services.implement;

import com.cloudinary.Cloudinary;
import com.dev.e_commerce.services.interfaces.CloudinaryService;
import jakarta.annotation.Resource;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.HashMap;
import java.util.Map;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class CloudinaryServiceImpl implements CloudinaryService {
  @Resource
  private Cloudinary cloudinary;

  @Override
  public String uploadImage(MultipartFile file) {
    if (file.isEmpty()) {
      throw new IllegalArgumentException("File is empty");
    }

    try {
      String filename = UUID.randomUUID().toString() + "_" + file.getName();
      HashMap<Object, Object> options = new HashMap<>();
      options.put("folder", "prueba");
      options.put("public_id", filename);

      Map uploadedFile = cloudinary.uploader().upload(file.getBytes(), options);
      String publicId = (String) uploadedFile.get("public_id");
      return cloudinary.url().secure(true).generate(publicId);

    } catch (IOException e) {
      e.printStackTrace();
      return null;
    }
  }
}
