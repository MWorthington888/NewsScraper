# Newsscraper

## Description

Newsscraper is an app that extracts data by fetching a webpage and mining data from it. This particular version of Newsscraper has been setup to data-mine articles from The New YorK Times Food section. 

Newsscraper will scrap and return all articles and display them in this format: 

- Title of the article 
- A brief summary of the story
- A link to the story in the NYT







## How to find the most trending brands!
The app lets users select the name of their college/university and the season they want to choose. 
Upon submitting the choices, the user is taken to the season page corresponding to the selection made.

![](CollegeRunway_demo1.gif)

The user then select the favorite brands under different fashion category and submits.

Once the app gets all the feedback from the particular school selected by the user, it will display the most popular or trending brand for that specific university!!!


## How is CollegeRunway built
The app is built with HTML/CSS/Bootstrap
The app will store every entry in the database, and updates and retrieves as requested!
All the informations concerning the user are stored in the userTable.

_The userTable is built as a look up table which means _it hold data in the form of key values. All the columns of the userTable (except the Id) are foreign keys from other tables_

Once the user select an university and a season, these 2 informations are stored in the userTable with an unique Id to define the user
Then, the user access to the season page to select the brands. Once the user submit the choosen brands, the row corresponding to the id of the user is updated with all the brands.
Since the userTable contains only key values, it is then joined with the "parents" tables to get the data that will be displayed.

To do so, __views__ are used. The views _which are virtual tables resulting of a SQL statement_ will help avoid the use of long queries inside the program and will make the maintenance easier.

Click here https://collegerunway.herokuapp.com/ to access to the deployed version of the app.

## Technologies used
 * Javascript
 * [Node.js]Download the latest version of Node https://nodejs.org/en/
 * Express
 * Cheerio
 * Handlebars
 * Bootstrap
 * HTML
 * CSS
 * Mongoose
 * Morgan
 * Request
 * Mongo DB


## Future developments
-----------------------------
For the future, enhancements could be added to this application:

 * Not having prepopulated dropdown lists, but populate the dropdown lists from the information in the table.
 * Give to the user the possibility to add a College or a brand.
 * On the result page, the logos of the brands could be displayed via an access to a logo API.
 * The users could be given the option to shop from the trending brand or from a multibrand platform like Amazon via the Amazon API.
 * Give the user the option to see what are the trending brands in another college.
 * Access the user's device camera (after authorization) to let them create fashion "selfies" that they can share on social media


## Contributors to this project (GitHub account)
 - Darakshan Ahmed (https://github.com/dara9234)
 - Zach Garcia (https://github.com/Zgarcia72292)
 - Fatou Thiam (https://github.com/Yfatou)
 - Michael Worthington (https://github.com/MWorthington888)

 - Thank you to Phil, our instructor for his help
