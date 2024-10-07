-- CreateTable
CREATE TABLE `Url` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `original_url` VARCHAR(191) NOT NULL,
    `short_url` VARCHAR(191) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `clicks` INTEGER NOT NULL DEFAULT 0,
    `expries_at` DATETIME(3) NULL,

    UNIQUE INDEX `Url_short_url_key`(`short_url`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Analytics` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `url_id` INTEGER NOT NULL,
    `ip_address` VARCHAR(191) NOT NULL,
    `device` VARCHAR(191) NOT NULL,
    `time_stamp` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Analytics` ADD CONSTRAINT `Analytics_url_id_fkey` FOREIGN KEY (`url_id`) REFERENCES `Url`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
