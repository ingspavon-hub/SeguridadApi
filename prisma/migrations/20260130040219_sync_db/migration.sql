-- This is an empty migration.
createTable "User" (
  "id"       INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
  "email"     TEXT NOT NULL UNIQUE,
  "name"      TEXT,
  "password"  TEXT NOT NULL,
  "telephone" TEXT,
  "createdAt" DATETIME NOT NULL DEFAULT current_timestamp,
  "updatedAt" DATETIME NOT NULL ,
    "role"   TEXT    NOT NULL DEFAULT 'USER',
    "terminalId" INTEGER
);

CREATE UNIQUE INDEX "User.email_KEY" ON "User"("email");