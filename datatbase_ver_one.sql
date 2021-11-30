-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
-- -----------------------------------------------------
-- Schema shopping_nest
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema shopping_nest
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `shopping_nest` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `shopping_nest` ;

-- -----------------------------------------------------
-- Table `shopping_nest`.`about`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_nest`.`about` (
  `id` INT NOT NULL,
  `title` VARCHAR(250) NULL DEFAULT NULL,
  `description` VARCHAR(250) NULL DEFAULT NULL,
  `image` VARCHAR(250) NULL DEFAULT NULL,
  `detail` TEXT NULL DEFAULT NULL,
  `created_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` VARCHAR(45) NULL DEFAULT NULL,
  `modified_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `modified_by` VARCHAR(45) NULL DEFAULT NULL,
  `status` BIT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `shopping_nest`.`user`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_nest`.`user` (
  `id` INT NOT NULL,
  `username` VARCHAR(45) NOT NULL,
  `password` VARCHAR(45) NOT NULL,
  `firstname` VARCHAR(45) NULL DEFAULT NULL,
  `lastname` VARCHAR(45) NULL DEFAULT NULL,
  `address` VARCHAR(250) NULL DEFAULT NULL,
  `email` VARCHAR(250) NULL DEFAULT NULL,
  `phone` VARCHAR(45) NULL DEFAULT NULL,
  `created_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` VARCHAR(45) NULL DEFAULT NULL,
  `modified_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `modified_by` VARCHAR(45) NULL DEFAULT NULL,
  `status` BIT(1) NULL DEFAULT NULL,
  `role` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `shopping_nest`.`bill`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_nest`.`bill` (
  `id` INT NOT NULL,
  `user_id` INT NOT NULL,
  `total` DOUBLE NULL DEFAULT NULL,
  `payment` VARCHAR(250) NULL DEFAULT NULL,
  `address` TEXT NULL DEFAULT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `phone` VARCHAR(45) NULL DEFAULT NULL,
  `created_time` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  INDEX `FOREIGN` (`user_id` ASC) VISIBLE,
  CONSTRAINT `bill_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `shopping_nest`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `shopping_nest`.`category`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_nest`.`category` (
  `id` INT NOT NULL,
  `name` VARCHAR(250) NULL DEFAULT NULL,
  `meta_title` VARCHAR(250) NULL DEFAULT NULL,
  `created_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` VARCHAR(45) NULL DEFAULT NULL,
  `modified_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `modified_by` VARCHAR(45) NULL DEFAULT NULL,
  `status` BIT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `shopping_nest`.`product`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_nest`.`product` (
  `id` INT NOT NULL,
  `category_id` INT NOT NULL,
  `code` VARCHAR(45) NULL DEFAULT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `meta_title` VARCHAR(250) NULL DEFAULT NULL,
  `description` TEXT NULL DEFAULT NULL,
  `image` VARCHAR(250) NULL DEFAULT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `promotion_price` DOUBLE NULL DEFAULT NULL,
  `include_vat` BIT(1) NULL DEFAULT NULL,
  `quantity` INT NULL DEFAULT NULL,
  `created_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  `created_by` VARCHAR(45) NULL DEFAULT NULL,
  `modified_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `modifed_by` VARCHAR(45) NULL DEFAULT NULL,
  `status` BIT(1) NULL DEFAULT NULL,
  `view_count` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FOREIGN` (`category_id` ASC) VISIBLE,
  CONSTRAINT `product_category`
    FOREIGN KEY (`category_id`)
    REFERENCES `shopping_nest`.`category` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `shopping_nest`.`bill_detail`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_nest`.`bill_detail` (
  `id` INT NOT NULL,
  `bill_id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `price` DOUBLE NULL DEFAULT NULL,
  `quantity` INT NULL DEFAULT NULL,
  PRIMARY KEY (`id`),
  INDEX `FOREIGN` (`bill_id` ASC) VISIBLE,
  INDEX `bill_detail_product_idx` (`product_id` ASC) VISIBLE,
  CONSTRAINT `bill_detail_bill`
    FOREIGN KEY (`bill_id`)
    REFERENCES `shopping_nest`.`bill` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `bill_detail_product`
    FOREIGN KEY (`product_id`)
    REFERENCES `shopping_nest`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `shopping_nest`.`cart`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_nest`.`cart` (
  `id` INT NOT NULL,
  `product_id` INT NOT NULL,
  `quantity` INT NULL DEFAULT NULL,
  `status` BIT(1) NULL DEFAULT b'0',
  `user_id` INT NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `FOREIGN1` (`product_id` ASC) INVISIBLE,
  INDEX `FOREIGN2` (`user_id` ASC) VISIBLE,
  CONSTRAINT `cart_product`
    FOREIGN KEY (`product_id`)
    REFERENCES `shopping_nest`.`product` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `cart_user`
    FOREIGN KEY (`user_id`)
    REFERENCES `shopping_nest`.`user` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `shopping_nest`.`contact`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_nest`.`contact` (
  `id` INT NOT NULL,
  `content` TEXT NULL DEFAULT NULL,
  `status` BIT(1) NULL DEFAULT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `shopping_nest`.`feedback`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `shopping_nest`.`feedback` (
  `id` INT NOT NULL,
  `name` VARCHAR(45) NULL DEFAULT NULL,
  `phone` VARCHAR(45) NULL DEFAULT NULL,
  `email` VARCHAR(45) NULL DEFAULT NULL,
  `address` VARCHAR(250) NULL DEFAULT NULL,
  `content` VARCHAR(250) NULL DEFAULT NULL,
  `status` BIT(1) NULL DEFAULT NULL,
  `created_date` DATETIME NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
