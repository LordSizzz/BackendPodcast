/*
  Warnings:

  - You are about to drop the `MyUser` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropIndex
DROP INDEX "MyUser_email_key";

-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MyUser";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "myUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "valid" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    "nom" TEXT NOT NULL,
    "podcastId" INTEGER NOT NULL,
    CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "myUser" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Comment_podcastId_fkey" FOREIGN KEY ("podcastId") REFERENCES "Podcast" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Comment" ("content", "id", "nom", "podcastId", "userId", "valid") SELECT "content", "id", "nom", "podcastId", "userId", "valid" FROM "Comment";
DROP TABLE "Comment";
ALTER TABLE "new_Comment" RENAME TO "Comment";
CREATE TABLE "new_Podcast" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "sound" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "duree" INTEGER NOT NULL,
    "autheur" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    CONSTRAINT "Podcast_userId_fkey" FOREIGN KEY ("userId") REFERENCES "myUser" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Podcast" ("autheur", "duree", "id", "image", "nom", "sound", "text", "userId") SELECT "autheur", "duree", "id", "image", "nom", "sound", "text", "userId" FROM "Podcast";
DROP TABLE "Podcast";
ALTER TABLE "new_Podcast" RENAME TO "Podcast";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "myUser_email_key" ON "myUser"("email");
