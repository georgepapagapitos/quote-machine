let endpoint = 'https://api.whatdoestrumpthink.com/api/v1/quotes/random';

function getQuote() {
    fetch(endpoint)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {
        displayQuote(data.message);
    })
    .catch(function() {
        console.log('ERROR');
    });
}

function displayQuote(quote) {
    let quoteText = document.querySelector('.quote-text');
    quoteText.textContent = quote;
}

let newQuoteButton = document.querySelector('.new-quote-button');
newQuoteButton.addEventListener('click', getQuote);

getQuote();