/*
  Warnings:

  - Added the required column `timeControl` to the `Game` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "TimeControl" AS ENUM ('TEN_MIN', 'FIFTEEN_MIN', 'THIRTY_MIN');

-- AlterTable
ALTER TABLE "Game" ADD COLUMN     "startAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "timeControl" "TimeControl" NOT NULL;
