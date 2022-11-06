const quoteContainer = document.getElementById('quote-container');
const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');
const twitterBtn = document.getElementById('twitter');
const newQuoteBtn = document.getElementById('new-quote');

let apiQuotes = [];

//show newquote

function newQuote() {
    // pick a random quote from apiQuote array

    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    // check if Auhtor field is blank and replace it with 'unknown'
    if(!quote.auhtor) {
        authorText.textContent = 'Unknown';
    } else {
        authorText.textContent = quote.author;
    }
    // checkk qoute length to determine styling
    if(quoteText.length > 120) {
        quoteText.classList.add('long-quote')
    } else {
        quoteText.classList.remove('long-quote')
    }


    quoteText.textContent = quote.text;
}

// Get Quote From API
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes';
    try {
        const response = await fetch(apiUrl);
        apiQuotes = await response.json();
        newQuote();
    } catch (error) {

        //catch erorr here
    }
}
// Tweet Quote 
function tweetQuote() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
}

// Event Listners
newQuoteBtn.addEventListener('click', newQuote);
twitterBtn.addEventListener('click' , tweetQuote);


//on load
getQuotes();