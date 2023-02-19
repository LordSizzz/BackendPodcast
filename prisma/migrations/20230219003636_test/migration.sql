-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Podcast" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nom" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "sound" TEXT NOT NULL,
    "userId" INTEGER NOT NULL,
    "duree" INTEGER,
    "autheur" TEXT NOT NULL,
    "text" TEXT NOT NULL,
    CONSTRAINT "Podcast_userId_fkey" FOREIGN KEY ("userId") REFERENCES "myUser" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Podcast" ("autheur", "duree", "id", "image", "nom", "sound", "text", "userId") SELECT "autheur", "duree", "id", "image", "nom", "sound", "text", "userId" FROM "Podcast";
DROP TABLE "Podcast";
ALTER TABLE "new_Podcast" RENAME TO "Podcast";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
