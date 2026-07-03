/*
  Warnings:

  - You are about to drop the column `published` on the `Post` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "Visibility" AS ENUM ('PUBLIC', 'PRIVATE');

-- AlterTable
ALTER TABLE "Post" DROP COLUMN "published",
ADD COLUMN     "visibility" "Visibility" NOT NULL DEFAULT 'PUBLIC';
