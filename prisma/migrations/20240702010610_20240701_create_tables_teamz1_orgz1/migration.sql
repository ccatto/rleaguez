-- CreateTable
CREATE TABLE "Teamz1" (
    "team_id" SERIAL NOT NULL,
    "team_name" TEXT NOT NULL,
    "league_color" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Teamz1_pkey" PRIMARY KEY ("team_id")
);

-- CreateTable
CREATE TABLE "Organizationz1" (
    "organization_id" SERIAL NOT NULL,
    "organization_name" TEXT NOT NULL,
    "organization_color" TEXT NOT NULL,
    "is_active" BOOLEAN NOT NULL DEFAULT true,
    "organization_owner" TEXT NOT NULL,

    CONSTRAINT "Organizationz1_pkey" PRIMARY KEY ("organization_id")
);
