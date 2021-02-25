const api = "https://api.quotable.io/random";

const quote = document.getElementById("quote");
const author = document.getElementById("author");
const btn = document.querySelector('.btn-next');
const btnTweet = document.querySelector('.btn-tweet');
const baseTweetText = "https://twitter.com/intent/tweet?text=";

btn.addEventListener("click", getQuote);

function getQuote() {
  fetch(api)
    .then((res) => res.json())
    .then((data) => {
      quote.innerHTML = `"${data.content}"`;
      author.innerHTML = `"${data.author}"`;
      btnTweet.href=`${baseTweetText}${data.content} --${data.author}`;
     
    });
    btnTweet.target="_blank";
}