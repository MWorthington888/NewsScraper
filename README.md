# Newsscraper

## Description
----------------------
Newsscraper is an app that extracts data by fetching a webpage and mining data from it. This particular version of Newsscraper has been setup to data-mine articles from The New YorK Times Food section. 


## How Newsscraper is built
-----------------------------------
The app uses an NPM package called 'Cheerio' to scrape the NY Times Food Section website. Articles that meet certain parameters will be grabbed and stored in a Mongo Database, as well as being displayed to the user.

The articles are displayed in this format: 

- Title of the article 
- A brief summary of the story
- A link to the story in the NYT


The user can click on the link which will redirect them to the Times article. 
https://drive.google.com/open?id=1tgoeoitwILY0ViwAKe1v6es5YTANauWR

They also may save the article to read later.
https://drive.google.com/open?id=1ryTGIinEHetIvEBEddiJRGqQJXGJDigo

Multiple notes may be left by many users on any article. Notes and articles can be deleted at any time.
https://drive.google.com/open?id=1ZeI7NBca8gzjojPfGpARo43QAL8KoPGq


Click here https://mikeworthingtonscrape-live1.herokuapp.com/ to access to the deployed version of the app.

## Technologies used
-----------------------------
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
Future enhancements could be added to this application:

 * Will debug the notes section. At this time, only one note is populating the notes section. Additional notes are replacing instead of         appending. 
 * Would like to add more different kinds of data to be scraped like images.


## Contributors to this app (GitHub account) and templates used for this app
 --------------------------------------------------------
 - Thank you to Phil, my instructor for his help.
 - This app was built based on templates taken from Week 18 - Activities 12, 19 and 20.
