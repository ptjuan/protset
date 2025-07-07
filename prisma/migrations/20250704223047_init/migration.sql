-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "cc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Client" (
    "cc" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Informative" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "medium" TEXT NOT NULL,
    "doneAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Informative_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "NonMonetaryTransactional" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "medium" TEXT NOT NULL,
    "doneAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "NonMonetaryTransactional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "MonetaryTransactional" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "medium" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "doneAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "MonetaryTransactional_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Service" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "medium" TEXT NOT NULL,
    "clientt" TEXT NOT NULL,
    "user" INTEGER NOT NULL,
    "doneAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "complexity" TEXT NOT NULL,

    CONSTRAINT "Service_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Feedback" (
    "id" SERIAL NOT NULL,
    "type" TEXT NOT NULL,
    "product" TEXT NOT NULL,
    "medium" TEXT NOT NULL,
    "doneAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "description" TEXT NOT NULL,
    "score" INTEGER NOT NULL,

    CONSTRAINT "Feedback_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_id_key" ON "User"("id");

-- CreateIndex
CREATE UNIQUE INDEX "User_cc_key" ON "User"("cc");

-- CreateIndex
CREATE UNIQUE INDEX "Client_cc_key" ON "Client"("cc");

-- AddForeignKey
ALTER TABLE "Service" ADD CONSTRAINT "Service_user_fkey" FOREIGN KEY ("user") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
