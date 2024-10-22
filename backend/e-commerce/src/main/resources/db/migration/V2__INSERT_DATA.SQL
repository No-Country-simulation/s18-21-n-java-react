INSERT INTO `ecommerce`.`user`
(`user_type`, `id`, `created_at`, `email`, `is_enabled`, `lastname`, `name`, `password`, `photo_url`, `role`, `verification_code`)
VALUES
('User', 1, '2024-10-01', 'prueba01@gmail.com', true, 'Garcia', 'Carlos', '$2a$10$i0vxx9r/4pVJclqjeQa1Fux00sVWs1wiNNHYdbizTv9zKCoYPdS3.', 'https://example.com/photo1.jpg', 'CLIENT', 'ver_code_1'),
('User', 2, '2024-10-02', 'prueba02@gmail.com', true, 'Lopez', 'Maria', '$2a$10$i0vxx9r/4pVJclqjeQa1Fux00sVWs1wiNNHYdbizTv9zKCoYPdS3.', 'https://example.com/photo2.jpg', 'CLIENT', 'ver_code_2'),
('User', 3, '2024-10-03', 'prueba03@gmail.com', true, 'Fernandez', 'Pedro', '$2a$10$i0vxx9r/4pVJclqjeQa1Fux00sVWs1wiNNHYdbizTv9zKCoYPdS3.', 'https://example.com/photo3.jpg', 'CLIENT', 'ver_code_3'),
('User', 4, '2024-10-04', 'prueba04@gmail.com', true, 'Martinez', 'Sofia', '$2a$10$i0vxx9r/4pVJclqjeQa1Fux00sVWs1wiNNHYdbizTv9zKCoYPdS3.', 'https://example.com/photo4.jpg', 'CLIENT', 'ver_code_4'),
('User', 5, '2024-10-05', 'prueba05@gmail.com', true, 'Rodriguez', 'Juan', '$2a$10$i0vxx9r/4pVJclqjeQa1Fux00sVWs1wiNNHYdbizTv9zKCoYPdS3.', 'https://example.com/photo5.jpg', 'CLIENT', 'ver_code_5'),
('User', 6, '2024-10-06', 'prueba06@gmail.com', true, 'Perez', 'Ana', '$2a$10$i0vxx9r/4pVJclqjeQa1Fux00sVWs1wiNNHYdbizTv9zKCoYPdS3.', 'https://example.com/photo6.jpg', 'CLIENT', 'ver_code_6'),
('User', 7, '2024-10-07', 'prueba07@gmail.com', true, 'Sanchez', 'Luis', '$2a$10$i0vxx9r/4pVJclqjeQa1Fux00sVWs1wiNNHYdbizTv9zKCoYPdS3.', 'https://example.com/photo7.jpg', 'CLIENT', 'ver_code_7'),
('User', 8, '2024-10-08', 'prueba08@gmail.com', true, 'Diaz', 'Elena', '$2a$10$i0vxx9r/4pVJclqjeQa1Fux00sVWs1wiNNHYdbizTv9zKCoYPdS3.', 'https://example.com/photo8.jpg', 'CLIENT', 'ver_code_8'),
('User', 9, '2024-10-09', 'prueba09@gmail.com', true, 'Ramirez', 'Miguel', '$2a$10$i0vxx9r/4pVJclqjeQa1Fux00sVWs1wiNNHYdbizTv9zKCoYPdS3.', 'https://example.com/photo9.jpg', 'CLIENT', 'ver_code_9'),
('User', 10, '2024-10-10', 'prueba10@gmail.com', true, 'Vargas', 'Lucia', '$2a$10$i0vxx9r/4pVJclqjeQa1Fux00sVWs1wiNNHYdbizTv9zKCoYPdS3.', 'https://example.com/photo10.jpg', 'CLIENT', 'ver_code_10');

INSERT INTO `ecommerce`.`location`
(`id`, `address`, `city`, `country`)
VALUES
(1, '123 Main St', 'New York', 'USA'),
(2, '456 Maple Ave', 'Los Angeles', 'USA'),
(3, '789 Oak St', 'Chicago', 'USA'),
(4, '101 Pine Ln', 'Houston', 'USA'),
(5, '202 Cedar Blvd', 'San Francisco', 'USA'),
(6, '303 Birch Rd', 'Miami', 'USA'),
(7, '404 Elm St', 'Boston', 'USA'),
(8, '505 Aspen St', 'Seattle', 'USA'),
(9, '606 Redwood Dr', 'Denver', 'USA'),
(10, '707 Willow St', 'Dallas', 'USA');

INSERT INTO `ecommerce`.`client`
(`birth_date`, `document_identification`, `phone`, `user_id`, `location_id`)
VALUES
('1990-05-15', 'ID1234567890', '555-1234', 1, 1),
('1985-08-23', 'ID2345678901', '555-2345', 2, 2),
('1992-11-05', 'ID3456789012', '555-3456', 3, 3),
('1988-03-18', 'ID4567890123', '555-4567', 4, 4),
('1995-07-30', 'ID5678901234', '555-5678', 5, 5),
('1991-01-10', 'ID6789012345', '555-6789', 6, 6),
('1983-12-12', 'ID7890123456', '555-7890', 7, 7),
('1996-04-22', 'ID8901234567', '555-8901', 8, 8),
('1989-09-08', 'ID9012345678', '555-9012', 9, 9),
('1993-02-17', 'ID0123456789', '555-0123', 10, 10);

INSERT INTO `ecommerce`.`product`
(`id`, `brand`, `category`, `description`, `name`, `photo_url`, `price`, `short_description`, `stock`, `seller_id`)
VALUES
(1, 'Apple', 'TECNOLOGIA', 'iPhone 14 with A15 Bionic chip and 128GB storage.', 'iPhone 14', 'https://example.com/iphone14.jpg', 999.99, 'Latest iPhone model with 128GB storage.', 50, 1),
(2, 'Samsung', 'TECNOLOGIA', 'Galaxy S22 Ultra with 256GB storage and S Pen.', 'Galaxy S22 Ultra', 'https://example.com/galaxys22ultra.jpg', 1199.99, 'Premium Samsung phone with S Pen.', 30, 1),
(3, 'Dell', 'COMPUTADORAS', 'Dell XPS 13 with Intel i7 and 16GB RAM.', 'Dell XPS 13', 'https://example.com/dellxps13.jpg', 1399.99, 'High-end ultrabook from Dell.', 20, 1),
(4, 'Apple', 'COMPUTADORAS', 'MacBook Air M2 with 256GB SSD and 8GB RAM.', 'MacBook Air M2', 'https://example.com/macbookairm2.jpg', 1099.99, 'Light and powerful MacBook Air.', 40, 1),

(5, 'HP', 'COMPUTADORAS', 'HP Spectre x360 with Intel i7 and 512GB SSD.', 'HP Spectre x360', 'https://example.com/hpspectrex360.jpg', 1499.99, 'Convertible laptop from HP.', 25, 2),
(6, 'Asus', 'COMPUTADORAS', 'Asus ROG Strix with AMD Ryzen 9 and 16GB RAM.', 'Asus ROG Strix', 'https://example.com/asusrogstrix.jpg', 1799.99, 'Gaming laptop with high performance.', 15, 2),
(7, 'Google', 'TECNOLOGIA', 'Google Pixel 7 Pro with 128GB storage.', 'Google Pixel 7 Pro', 'https://example.com/googlepixel7pro.jpg', 899.99, 'Flagship phone with great camera.', 60, 2),
(8, 'Sony', 'OTHER', 'Sony WH-1000XM5 wireless noise-cancelling headphones.', 'Sony WH-1000XM5', 'https://example.com/sonywh1000xm5.jpg', 349.99, 'Top-tier noise-cancelling headphones.', 100, 2),

(9, 'Lenovo', 'COMPUTADORAS', 'Lenovo ThinkPad X1 Carbon with 14-inch display and Intel i7.', 'Lenovo ThinkPad X1 Carbon', 'https://example.com/thinkpadx1carbon.jpg', 1299.99, 'Business laptop with robust design.', 35, 3),
(10, 'Samsung', 'ELECTRONICOS', 'Samsung Galaxy Watch 5 with health tracking.', 'Samsung Galaxy Watch 5', 'https://example.com/galaxywatch5.jpg', 249.99, 'Smartwatch with health monitoring features.', 80, 3),
(11, 'Apple', 'ELECTRONICOS', 'Apple Watch Series 8 with GPS and health tracking.', 'Apple Watch Series 8', 'https://example.com/applewatchseries8.jpg', 399.99, 'Advanced smartwatch from Apple.', 75, 3),
(12, 'Microsoft', 'COMPUTADORAS', 'Surface Laptop 4 with 13.5-inch screen and Intel i5.', 'Surface Laptop 4', 'https://example.com/surfacelaptop4.jpg', 999.99, 'Versatile laptop with touchscreen.', 45, 3),

(13, 'Sony', 'OTHER', 'Sony Alpha A7 III mirrorless camera with 24.2 MP.', 'Sony Alpha A7 III', 'https://example.com/sonya7iii.jpg', 1999.99, 'Full-frame mirrorless camera for professionals.', 10, 4),
(14, 'Canon', 'OTHER', 'Canon EOS R6 with 20 MP and 4K video recording.', 'Canon EOS R6', 'https://example.com/canoneosr6.jpg', 2499.99, 'High-performance mirrorless camera.', 12, 4),
(15, 'Apple', 'OTHER', 'iPad Pro 12.9-inch with M1 chip and 128GB storage.', 'iPad Pro 12.9', 'https://example.com/ipadpro12.jpg', 1099.99, 'Powerful tablet with large display.', 50, 4),
(16, 'Bose', 'OTHER', 'Bose SoundLink Revolve+ Bluetooth speaker.', 'Bose SoundLink Revolve+', 'https://example.com/bosesoundlinkrevolve.jpg', 299.99, 'Portable speaker with 360-degree sound.', 100, 4),

(17, 'Razer', 'COMPUTADORAS', 'Razer Blade 15 with Intel i7 and NVIDIA RTX 3070.', 'Razer Blade 15', 'https://example.com/razerblade15.jpg', 2199.99, 'Gaming laptop with high-end performance.', 18, 5),
(18, 'Microsoft', 'OTHER', 'Microsoft Surface Pro 8 with Intel i5 and 128GB SSD.', 'Surface Pro 8', 'https://example.com/surfacepro8.jpg', 1099.99, '2-in-1 tablet and laptop hybrid.', 55, 5),
(19, 'Logitech', 'ELECTRONICOS', 'Logitech MX Master 3 wireless mouse with precision scroll.', 'Logitech MX Master 3', 'https://example.com/mxmaster3.jpg', 99.99, 'Ergonomic wireless mouse.', 150, 5),
(20, 'Apple', 'TECNOLOGIA', 'iPhone 13 with A14 Bionic chip and 128GB storage.', 'iPhone 13', 'https://example.com/iphone13.jpg', 799.99, 'Previous generation iPhone with excellent performance.', 40, 5);
