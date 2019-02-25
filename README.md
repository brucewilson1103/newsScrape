# newsScrape

Scraping the Near Earth Object asteroid data from spaceweather.com in order to take notes on potentailly hazardous asteroids. This was done using MongoDB, Mongoose, Axios, Cheerio, express, mLab, and heroku.

https://still-island-98839.herokuapp.com/

routes:

/neo       : This will bring back a JSON object that lists NEOs that approach Earth near today's date.

/neo/:id   : If you input neo/the specific id of the neo you will bring up the neo, a link to its trajectory on the NASA site, and any notes associated with it in the mLab/mongo database.

