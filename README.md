# Australian Football League Teams Analysis

In this project, we aim to provide some insights on the AFL team performance throughout the past nine years (2012 - 2021).

## Team Members  👨🏻‍💻👩🏻‍💻👩🏻‍💻👩🏻‍💻

- [Ishaan Nigam](https://github.com/ishaan04)
- [Nga Phu](https://github.com/nkphu)
- [Samra Vatan Parast](https://github.com/Samravp)
- [Serena Zhao](https://github.com/SerenaZhaoYanqing)


## Datasets

We extracted our data by performing API calls, we used [Squiggle API](https://api.squiggle.com.au/#section_teams). 
The Squiggle API offers public access to raw data about AFL games and predictions made by popular online models.
Query types we used are as per below;
 - Teams query
 - Games query
 - Tips query


## Data Engineering - Architecture Diagram

We created our table schemas and configured primary key and foreign keys to create relationships between our tables.

The tool we used is this step was [Quick Database Diagrams (QuickDBD)](https://www.quickdatabasediagrams.com/)

![DBD](DBD.png)

## ETL Process

* **Extract**:Datasets were extracted using [Squiggle API](https://api.squiggle.com.au/#section_teams).

* **Transform**: Using Jupyter Notebook and pandas, we cleaned and reorganised the data according to our needs.

* **Load**: Considering the normalised and relational structure of our data, PostgreSQL was our database of choice.
