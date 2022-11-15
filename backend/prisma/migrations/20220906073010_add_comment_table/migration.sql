-- CreateTable
CREATE TABLE "comment" (
    "id" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "author" TEXT NOT NULL,
    "movie" TEXT NOT NULL,
    "movie_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,
    "user_id" TEXT NOT NULL,

    CONSTRAINT "comment_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "admin_email_key" ON "admin"("email");

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
