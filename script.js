const quoteText = document.querySelector("#text")
const quoteBtn = document.querySelector("#new-quote")
const authorName = document.querySelector("#author")


function randomQuote(){
    fetch("https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json")
    .then(response => response.json()).then(res => {
        const randomNum = Math.floor(Math.random() * res.quotes.length)
        quoteText.innerText = res.quotes[randomNum].quote
        authorName.innerText = res.quotes[randomNum].author
        randomColors()
    })
}

quoteBtn.addEventListener("click", randomQuote)

const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

function randomColors(){
  let color = Math.floor(Math.random() * colors.length);
  $('html body').animate(
    {
      backgroundColor: colors[color],
      color: colors[color]
    },
    1000
  );
  $('.button').animate(
    {
      backgroundColor: colors[color]
    },
    1000
  );
}

