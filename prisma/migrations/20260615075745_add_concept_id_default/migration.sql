-- CreateEnum
CREATE TYPE "AssetStatus" AS ENUM ('PENDING', 'GENERATING', 'COMPLETED', 'FAILED');

-- AlterTable
ALTER TABLE "Concept" ADD COLUMN     "assetStatus" "AssetStatus" NOT NULL DEFAULT 'PENDING';
