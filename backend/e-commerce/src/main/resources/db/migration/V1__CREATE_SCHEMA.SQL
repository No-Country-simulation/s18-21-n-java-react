USE ${db_name};

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `user_type` varchar(31) NOT NULL,
  `id` bigint NOT NULL AUTO_INCREMENT,
  `created_at` date DEFAULT NULL,
  `email` varchar(255) NOT NULL,
  `is_enabled` bit(1) DEFAULT NULL,
  `lastname` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `photo_url` varchar(255) DEFAULT NULL,
  `role` enum('ADMIN','CLIENT') DEFAULT NULL,
  `verification_code` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `UKob8kqyqqgmefl0aco34akdtpe` (`email`)
);

DROP TABLE IF EXISTS `location`;
CREATE TABLE `location` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `address` varchar(255) NOT NULL,
  `city` varchar(255) NOT NULL,
  `country` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
);

DROP TABLE IF EXISTS `client`;
CREATE TABLE `client` (
  `birth_date` date DEFAULT NULL,
  `document_identification` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `user_id` bigint NOT NULL,
  `location_id` bigint NOT NULL,
  PRIMARY KEY (`user_id`),
  UNIQUE KEY `UKsdr2wae1w7cqwje97aeb78yfj` (`document_identification`),
  KEY `FK3inq4hvkr7tfc1s4u9jhcggai` (`location_id`),
  CONSTRAINT `FK3inq4hvkr7tfc1s4u9jhcggai` FOREIGN KEY (`location_id`) REFERENCES `location` (`id`),
  CONSTRAINT `FKk1fi84oi1yyuswr40h38kjy1s` FOREIGN KEY (`user_id`) REFERENCES `user` (`id`)
);

DROP TABLE IF EXISTS `product`;
CREATE TABLE `product` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `brand` varchar(255) NOT NULL,
  `category` enum('COMPUTADORAS','ELECTRONICOS','OTHER','TECNOLOGIA') DEFAULT NULL,
  `description` text,
  `name` varchar(255) NOT NULL,
  `photo_url` varchar(255) DEFAULT NULL,
  `price` double NOT NULL,
  `short_description` varchar(255) DEFAULT NULL,
  `stock` int NOT NULL,
  `seller_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKf7ya3vifwcwi0866kti9w3a1v` (`seller_id`),
  CONSTRAINT `FKf7ya3vifwcwi0866kti9w3a1v` FOREIGN KEY (`seller_id`) REFERENCES `client` (`user_id`)
);

DROP TABLE IF EXISTS `orders`;
CREATE TABLE `orders` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `amount` double DEFAULT NULL,
  `date` datetime(6) DEFAULT NULL,
  `total_product` int DEFAULT NULL,
  `client_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FK17yo6gry2nuwg2erwhbaxqbs9` (`client_id`),
  CONSTRAINT `FK17yo6gry2nuwg2erwhbaxqbs9` FOREIGN KEY (`client_id`) REFERENCES `client` (`user_id`)
);

DROP TABLE IF EXISTS `details_order`;
CREATE TABLE `details_order` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `price` double DEFAULT NULL,
  `quantity` int DEFAULT NULL,
  `order_id` bigint NOT NULL,
  `product_id` bigint NOT NULL,
  `seller_id` bigint NOT NULL,
  PRIMARY KEY (`id`),
  KEY `FKfnrkunrxnt2hangtbqccf49v6` (`order_id`),
  KEY `FK2se4ndi1r05dwym0i9ciil4i0` (`product_id`),
  KEY `FKicqj6svqvmbjkd5o8agtkf2fp` (`seller_id`),
  CONSTRAINT `FK2se4ndi1r05dwym0i9ciil4i0` FOREIGN KEY (`product_id`) REFERENCES `product` (`id`),
  CONSTRAINT `FKfnrkunrxnt2hangtbqccf49v6` FOREIGN KEY (`order_id`) REFERENCES `orders` (`id`),
  CONSTRAINT `FKicqj6svqvmbjkd5o8agtkf2fp` FOREIGN KEY (`seller_id`) REFERENCES `client` (`user_id`)
);
