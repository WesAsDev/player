-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Music" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "binary" TEXT NOT NULL,
    "published" BOOLEAN NOT NULL DEFAULT false,
    "publisherId" INTEGER NOT NULL,
    CONSTRAINT "Music_publisherId_fkey" FOREIGN KEY ("publisherId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Music" ("binary", "id", "published", "publisherId", "title") SELECT "binary", "id", "published", "publisherId", "title" FROM "Music";
DROP TABLE "Music";
ALTER TABLE "new_Music" RENAME TO "Music";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
