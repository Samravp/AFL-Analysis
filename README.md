# Australian Football League Teams Analysis


![image](https://user-images.githubusercontent.com/85004202/145362005-2c1d17fd-5d9f-4b01-8a6f-6dcbab84ceb0.png)


In this project, we aim to provide some insights on the AFL team performance throughout the past nine years (2012 - 2021).

Please see the dashboard [here](https://samravp.github.io/AFL-Analysis/).

## Team Members  👨🏻‍💻👩🏻‍💻👩🏻‍💻👩🏻‍💻

- [Ishaan Nigam](https://github.com/ishaan04)
- [Nga Phu](https://github.com/nkphu)
- [Samra Vatan Parast](https://github.com/Samravp)
- [Serena Zhao](https://github.com/SerenaZhaoYanqing)


## Datasets
### Please add password for postgresql before running the code in jupyter notebook 
We extracted our data by performing API calls, we used [Squiggle API](https://api.squiggle.com.au/#section_teams). 
The Squiggle API offers public access to raw data about AFL games and predictions made by popular online models.
Query types we used are as per below;
 - Teams query
 - Games query
 - Tips query

## ETL Process

* **Extract**:Datasets were extracted using [Squiggle API](https://api.squiggle.com.au/#section_teams) calls.

* **Transform**: Using Jupyter Notebook and pandas, we cleaned and reorganised the data according to our needs.

* **Load**: Considering the normalised and relational structure of our data, PostgreSQL was our database of choice.


## Data Engineering - Architecture Diagram

We created our table schemas and configured primary key and foreign keys to create relationships between our tables.

The tool we used is this step was [Quick Database Diagrams (QuickDBD)](https://www.quickdatabasediagrams.com/)

![DBD](https://user-images.githubusercontent.com/85004202/145706069-9ec59e8f-2be2-4a56-b9a9-87f67e02891f.png)



## Data Visualisation

We draw insights from our data using JavaScript and HTML.

Libraries we used are as follows;

 - D3.js: D3 is a JavaScript library for manipulating documents based on data.
 - AnyChart: AnyChart is a lightweight and robust JavaScript charting library.
 - Plotly: Plotly provides online graphing, analytics, and statistics tools for individuals and collaboration.

## Final Dashboard


 <p align="center">
<img width="364" alt="Screen Shot 2021-12-13 at 17 52 28" src="https://user-images.githubusercontent.com/85004202/145765858-28a8d867-8b82-4094-ac3f-b58cb6b095ad.png">
 </p>
