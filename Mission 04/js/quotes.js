const quotes = [
    {
        quote: "This too shall pass",
        author: "_ Edward FitzGerald",
    },
    {
        quote: "I never dreamed about success, I worked for it",
        author: "_ Estee Lauder",
    },
    {
        quote: "Do not try to be original, just try to be good",
        author: "_ Paul Rand",
    },
    {
        quote: "Where there is a will there is a way",
        author: "_ Angela Merkel",
    },
    {
        quote: "I was newver less alone than when by myself",
        author: "_ Edward Gibbon",
    },
    {
        quote: "Only I can change my life, no one can do it for me",
        author: "_ Carol Burnett",
    },
    {
        quote: "It is not length of life, But depth of life",
        author: "_ Ralph Waldo Emerson",
    },
    {
        quote: "I find the harder I work, the more luck I have",
        author: "_ Thomas Jefferson",
    },
    {
        quote: "Necessity is the mother of taking chances",
        author: "_ Mark Twain",
    },
    {
        quote: "Every horse thinks its own pack heaviest",
        author: " - Thomas Fuller",
    },
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;