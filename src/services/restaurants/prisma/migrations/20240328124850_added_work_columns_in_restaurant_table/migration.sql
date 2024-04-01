/*
  Warnings:

  - Added the required column `ends_at` to the `restaurants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `starts_at` to the `restaurants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "restaurants" ADD COLUMN     "ends_at" TIME(0) NOT NULL,
ADD COLUMN     "starts_at" TIME(0) NOT NULL,
ADD COLUMN     "work_days" INTEGER[];
