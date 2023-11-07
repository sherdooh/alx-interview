#!/usr/bin/node
//Import the 'request' module for making HTTP requests
const request = require('request');
//base URL for the Star Wars API
const filmNum = process.argv[2] + '/';
const filmURL = 'https://swapi-api.hbtn.io/api/films/';

// Makes an API request to get film information
request(filmURL + filmNum, async function (err, res, body) {
  if (err) return console.error(err);

  // Parse  response body to get the list of character URLs
  const charURLList = JSON.parse(body).characters;

  // Iterare through the character URLs and fect character information
  // Make a request to each character URL
  for (const charURL of charURLList) {
    await new Promise(function (resolve, reject) {
      request(charURL, function (err, res, body) {
        if (err) return console.error(err);

        // Parse the charcter nformation and print the character's name Resolve the promise to indicate completion
        console.log(JSON.parse(body).name);
        resolve();
      });
    });
  }
});
