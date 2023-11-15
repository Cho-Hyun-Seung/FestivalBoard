-- CreateTable
CREATE TABLE "User" (
    "id" SERIAL NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phoneNum" INTEGER NOT NULL,
    "sex" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Planner" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "date" INTEGER NOT NULL,
    "detail" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "weather" TEXT[],

    CONSTRAINT "Planner_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Event" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "location" TEXT,
    "rnAddress" TEXT,
    "lnAddress" TEXT,
    "stDate" TEXT,
    "fnDate" TEXT,
    "stTime" TEXT,
    "fnTime" TEXT,
    "charge" TEXT,
    "org" TEXT,
    "discountInfo" TEXT,
    "enterAge" TEXT,
    "url" TEXT,
    "parking" BOOLEAN,
    "detail" TEXT,

    CONSTRAINT "Event_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Festival" (
    "id" SERIAL NOT NULL,
    "title" TEXT,
    "tel" TEXT,
    "first_image" TEXT,
    "first_image2" TEXT,
    "startDate" TEXT,
    "endDate" TEXT,
    "contentId" TEXT,
    "contentTypeId" TEXT,
    "addr1" TEXT,
    "addr2" TEXT,
    "ageLimit" TEXT,
    "bookingPlace" TEXT,
    "discountInfo" TEXT,
    "homepage" TEXT,
    "grade" TEXT,
    "sponsor1" TEXT,
    "sponsor1Tel" TEXT,
    "sponsor2" TEXT,
    "sponsor2Tel" TEXT,
    "subevent" TEXT,
    "useTimeFestival" TEXT,

    CONSTRAINT "Festival_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Region" (
    "id" SERIAL NOT NULL,
    "level1" TEXT NOT NULL,
    "level2" TEXT,
    "level3" TEXT,
    "xCoord" TEXT,
    "yCoord" TEXT,
    "midTermCode" TEXT,
    "shortTermCode" TEXT,
    "shortTermWeather" TEXT,
    "midTermWeather" TEXT,

    CONSTRAINT "Region_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Touristspot" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "rdnmadr" TEXT,
    "lnmadr" TEXT,
    "cnvnncFclty" TEXT,
    "appnDate" TEXT,
    "aceptncCo" TEXT,
    "parkingPlace" TEXT,
    "introduce" TEXT,
    "phoneNumber" TEXT,
    "institutionNm" TEXT,

    CONSTRAINT "Touristspot_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Review" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "date" INTEGER NOT NULL,
    "grade" INTEGER NOT NULL,
    "authorId" INTEGER NOT NULL,

    CONSTRAINT "Review_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Reviewphoto" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "reviewId" INTEGER NOT NULL,

    CONSTRAINT "Reviewphoto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_PlannerToTouristspot" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_EventToPlanner" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_FestivalToPlanner" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_PlannerToTouristspot_AB_unique" ON "_PlannerToTouristspot"("A", "B");

-- CreateIndex
CREATE INDEX "_PlannerToTouristspot_B_index" ON "_PlannerToTouristspot"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_EventToPlanner_AB_unique" ON "_EventToPlanner"("A", "B");

-- CreateIndex
CREATE INDEX "_EventToPlanner_B_index" ON "_EventToPlanner"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_FestivalToPlanner_AB_unique" ON "_FestivalToPlanner"("A", "B");

-- CreateIndex
CREATE INDEX "_FestivalToPlanner_B_index" ON "_FestivalToPlanner"("B");

-- AddForeignKey
ALTER TABLE "Planner" ADD CONSTRAINT "Planner_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Reviewphoto" ADD CONSTRAINT "Reviewphoto_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlannerToTouristspot" ADD CONSTRAINT "_PlannerToTouristspot_A_fkey" FOREIGN KEY ("A") REFERENCES "Planner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_PlannerToTouristspot" ADD CONSTRAINT "_PlannerToTouristspot_B_fkey" FOREIGN KEY ("B") REFERENCES "Touristspot"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToPlanner" ADD CONSTRAINT "_EventToPlanner_A_fkey" FOREIGN KEY ("A") REFERENCES "Event"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_EventToPlanner" ADD CONSTRAINT "_EventToPlanner_B_fkey" FOREIGN KEY ("B") REFERENCES "Planner"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FestivalToPlanner" ADD CONSTRAINT "_FestivalToPlanner_A_fkey" FOREIGN KEY ("A") REFERENCES "Festival"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_FestivalToPlanner" ADD CONSTRAINT "_FestivalToPlanner_B_fkey" FOREIGN KEY ("B") REFERENCES "Planner"("id") ON DELETE CASCADE ON UPDATE CASCADE;
