/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
let quotes = [
  {
    quote: "If you can’t imagine it, you can’t have it.",
    source: "Toni Morrison",
    citation: "Talk at Portland Arts & Lectures",
    year: 1992,
    tag: "motivational"
  },
  {
    quote: "Definitions belong to the definers, not the defined.",
    source: "Toni Morrison",
    citation: "Beloved",
    year: 1987
  },
  {
    quote: "If you have some power, then your job is to empower somebody else.",
    source: "Toni Morrison",
    citation: "O, The Oprah Magazine",
    year: 2003,
    tag: "motivational"
  },
  {
    quote: "I am no longer accepting the things I cannot change. I am changing the things I cannot accept.",
    source: "Angela Davis",
    tag: "motivational"
  },
  {
    quote: "Sometimes we have to do the work even though we don't yet see a glimmer on the horizon that it's actually going to be possible.",
    source: "Angela Davis",
    tag: "motivational"
  },
];

// used array
let used = [];


/***
 * `getRandomQuote` function
***/
function getRandomQuote() {
  if (used.length === quotes.length) {
    used = [used[quotes.length-1]]; // accounts for edge case where used is cleared and same quote is regenerated
  }

  let num = Math.floor(Math.random() * quotes.length); // Math.random() returns a number between 0 and 1
 
  while (used.includes(quotes[num])) {
    num = Math.floor(Math.random() * quotes.length);
  }

  used.push(quotes[num]);
  return quotes[num];
  
}


/***
 * `printQuote` function
***/
function printQuote() {
  let quote = getRandomQuote();
  document.querySelector(".quote").textContent = quote.quote;
  // document set up requires source to contain citation and year
  if (quote.hasOwnProperty("year") && quote.hasOwnProperty("citation")) {
    document.querySelector(".source").innerHTML = `${quote.source} <span class="citation">${quote.citation}</span><span class="year">${quote.year}</span>`;
  } else if (quote.hasOwnProperty("year")) {
    document.querySelector(".source").innerHTML = `${quote.source} <span class="year">${quote.year}</span>`;
  } else if (quote.hasOwnProperty("citation")) {
    document.querySelector(".source").innerHTML = `${quote.source} <span class="citation">${quote.citation}</span>`;
  } else {
    document.querySelector(".source").textContent = quote.source;
  }
  if (quote.hasOwnProperty("tag")) {
    document.querySelector(".source").innerHTML += `<p class="tag">${quote.tag}</p>`;
  }
  // change background color -- using Math.floor() and 254 to avoid white (255,255,255)
  let r = Math.floor(Math.random() * 254);
  let g = Math.floor(Math.random() * 254);
  let b = Math.floor(Math.random() * 254);
  document.getElementsByTagName('body')[0].style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}



/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

window.setInterval(printQuote, 10000);