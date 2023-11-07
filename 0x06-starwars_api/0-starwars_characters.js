#!/usr/bin/node  // This is called a shebang, and it specifies the interpreter to use when running the script.

const request = require('request'); // Import the 'request' module for making HTTP requests.

const filmNum = process.argv[2] + '/'; // Get the command line argument at index 2 (typically, a film number), and append a '/' to it.
const filmURL = 'https://swapi-api.hbtn.io/api/films/'; // The base URL for the Star Wars API.

// Makes an API request to get film information
request(filmURL + filmNum, async function (err, res, body) {
  if (err) return console.error(err); // Handle any errors during the API request.

  // Parse the response body to get the list of character URLs
  const charURLList = JSON.parse(body).characters;

  // Iterate through the character URLs and fetch character information
  // Make a request to each character URL
  for (const charURL of charURLList) {
    await new Promise(function (resolve, reject) {
      request(charURL, function (err, res, body) {
        if (err) return console.error(err); // Handle any errors during character information request.

        // Parse the character information and print the character's name. Resolve the promise to indicate completion.
        console.log(JSON.parse(body).name);
        resolve();
      });
    });
  }
});

