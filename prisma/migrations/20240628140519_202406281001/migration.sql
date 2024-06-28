-- CreateTable
CREATE TABLE "League1" (
    "league_id" SERIAL NOT NULL,
    "league_name" TEXT NOT NULL,
    "league_color" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "league_sport" TEXT NOT NULL,

    CONSTRAINT "League1_pkey" PRIMARY KEY ("league_id")
);
