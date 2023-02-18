-- CreateTable
CREATE TABLE "Podcast" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "sound" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "duree" INTEGER NOT NULL,
    "autheur" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    CONSTRAINT "Podcast_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MyUser" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Comment" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "valid" BOOLEAN NOT NULL DEFAULT false,
    "userId" INTEGER NOT NULL,
    "nom" TEXT NOT NULL,
    "podcastId" INTEGER NOT NULL,
    CONSTRAINT "Comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "MyUser" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Comment_podcastId_fkey" FOREIGN KEY ("podcastId") REFERENCES "Podcast" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "MyUser" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "email" TEXT NOT NULL,
    "nom" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "MyUser_email_key" ON "MyUser"("email");
