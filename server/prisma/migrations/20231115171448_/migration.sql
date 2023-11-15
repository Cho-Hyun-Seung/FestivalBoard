/*
  Warnings:

  - Made the column `title` on table `Festival` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Festival" ALTER COLUMN "title" SET NOT NULL;
