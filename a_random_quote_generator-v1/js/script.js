/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
Andrew Shanks
December 2019
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
 * Adding the 'quotes' array with 'quote', 'source', 'citation', and 'year' objects within the array. 
***/
var ranNum;

var quotes = [
  {
    quote: 'It never ceases to amaze me: we all love ourselves more than other people, but care more about their opinion than our own.',
    source: 'Marcus Aurelius'
  },
  {
    quote: 'Gretchen, stop trying to make fetch happen! It\'s not going to happen!',
    source: 'Regina',
    citation: 'Mean Girls',
    year: 2004
  },
  {
    quote: 'Leave passion for the amateurs. Make it about what you feel you <i>must</i> do and say, not what you care about and wish to be.',
    source: 'Ryan Holiday',
    citation: 'Ego is the Enemy',
    year: 2016
  },
  {
    quote: 'If you mean it when you say you\'re at the end of your rope and would rather quit, you actually have a unique chance to grow and improve yourself. A unique opportunity to experiment with different solutions, to try different tactics, or to take on new projects to add to your skill set.',
    source: 'Ryan Holiday',
    citation: 'The Obstacle is the Way',
    year: 2014
  },
  {
    quote: 'You look like a thing and I love you.',
    source: 'Janelle Shane\'s flirtatious bot'
  },
];


/***
 * using the 'getRandomQuote function to pull a random quote
 * Using Math.floor(Math.random()) to generate a random number from 0 to the total number of quotes
 * then returning that quote
***/

function getRandomQuote() {
  ranNum = Math.floor(Math.random() * quotes.length);
  return quotes[ranNum];
}

/***
 * `printQuote` function
 * Using 'words' to hold the random quote this being pulled. 
 * using 'html' to create a string that will post the quote and any 'source', 'citation', 'year'. 
 * outputDiv is to bring in the 'quote-box' clas and use that for my 'html' string
***/

function printQuote(quotes) {
  var words = getRandomQuote();
  var html = '';
  html = '<p class="quote">' + words.quote + '</p>' + '';
  html += '<p class="source">' + words.source + ''; 
  if (words.citation != null) {
    html += '<span class="citation">' + words.citation + '</span>';
  };
  if (words.year != null) {
    html += '<span class="year">' + words.year + '</span>';
  };
  html += '</p>';
  var outputDiv = document.getElementById('quote-box');
  outputDiv.innerHTML = html;
  return html;
}

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);