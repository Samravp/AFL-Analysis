-- Exported from QuickDBD: https://www.quickdatabasediagrams.com/
-- NOTE! If you have used non-SQL datatypes in your design, you will have to change these here.

-- Modify this code to update the DB schema diagram.
-- To reset the sample schema, replace everything with
-- two dots ('..' - without quotes).

CREATE TABLE "Games" (
    "away_score" int   NOT NULL,
    "venue" varchar   NOT NULL,
    "away_team" varchar   NOT NULL,
    "home_goals" int   NOT NULL,
    "away_behinds" int   NOT NULL,
    "winner" varchar   NOT NULL,
    "roundname" varchar   NOT NULL,
    "home_score" int   NOT NULL,
    "home_team" varchar   NOT NULL,
    "away_goals" int   NOT NULL,
    "home_behinds" int   NOT NULL,
    "year" int   NOT NULL,
    CONSTRAINT "pk_Games" PRIMARY KEY (
        "venue"
     )
);

CREATE TABLE "Players" (
    "team" varchar   NOT NULL,
    "displayName" varchar   NOT NULL,
    "Disposals" int   NOT NULL,
    "Kicks" int   NOT NULL,
    "Marks" int   NOT NULL,
    "Handballs" int   NOT NULL,
    "Goals" int   NOT NULL,
    "Behinds" int   NOT NULL,
    "Hit_Outs" int   NOT NULL,
    "Tackles" int   NOT NULL,
    CONSTRAINT "pk_Players" PRIMARY KEY (
        "team"
     )
);

CREATE TABLE "Venue" (
    "Venue" varchar   NOT NULL,
    "Latitude" float   NOT NULL,
    "Longtitude" float   NOT NULL,
    CONSTRAINT "pk_Venue" PRIMARY KEY (
        "Venue"
     )
);

ALTER TABLE "Games" ADD CONSTRAINT "fk_Games_venue" FOREIGN KEY("venue")
REFERENCES "Venue" ("Venue");

ALTER TABLE "Games" ADD CONSTRAINT "fk_Games_home_team" FOREIGN KEY("home_team")
REFERENCES "Players" ("team");

