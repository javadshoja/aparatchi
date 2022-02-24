-- CreateTable
CREATE TABLE "movie" (
    "id" TEXT NOT NULL,
    "imdbId" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "summary" VARCHAR(500) NOT NULL,
    "year" INTEGER NOT NULL,
    "time" INTEGER NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "movie_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "movie_imdbId_key" ON "movie"("imdbId");
