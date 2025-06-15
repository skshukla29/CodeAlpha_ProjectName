const quotes = [
  { text: "Be yourself; everyone else is already taken.", Author: "Oscar Wilde" },
  { text: "Two things are infinite: the universe and human stupidity.", Author: "Albert Einstein" },
  { text: "So many books, so little time.", Author: "Frank Zappa" },
  { text: "A room without books is like a body without a soul.", Author: "Marcus Tullius Cicero" },
  { text: "In three words I can sum up everything I've learned about life: it goes on.", Author: "Robert Frost" },
  { text: "If you tell the truth, you don't have to remember anything.", Author: "Mark Twain" },
  { text: "Always forgive your enemies; nothing annoys them so much.", Author: "Oscar Wilde" },
  { text: "We accept the love we think we deserve.", Author: "Stephen Chbosky" },
  { text: "It is better to be hated for what you are than to be loved for what you are not.", Author: "André Gide" },
  { text: "Life is what happens to us while we are making other plans.", Author: "Allen Saunders" },
  { text: "Good friends, good books, and a sleepy conscience: this is the ideal life.", Author: "Mark Twain" },
  { text: "To live is the rarest thing in the world. Most people exist, that is all.", Author: "Oscar Wilde" },
  { text: "Without music, life would be a mistake.", Author: "Friedrich Nietzsche" },
  { text: "We are all in the gutter, but some of us are looking at the stars.", Author: "Oscar Wilde" },
  { text: "The only thing necessary for the triumph of evil is for good men to do nothing.", Author: "Edmund Burke" },
  { text: "Happiness in intelligent people is the rarest thing I know.", Author: "Ernest Hemingway" },
  { text: "That which does not kill us makes us stronger.", Author: "Friedrich Nietzsche" },
  { text: "Success is not final, failure is not fatal: it is the courage to continue that counts.", Author: "Winston Churchill" },
  { text: "Do what you can, with what you have, where you are.", Author: "Theodore Roosevelt" },
  { text: "Believe you can and you're halfway there.", Author: "Theodore Roosevelt" }
];
function getRandomQuote() {
  return quotes[Math.floor(Math.random() * quotes.length)];
}

function displayQuote() {
  const quote = getRandomQuote();
  document.getElementById("quote").innerText = `"${quote.text}"`;
  document.getElementById("Author").innerText = `" ${quote.Author}"`;
}

document.getElementById("new-quote").addEventListener("click", displayQuote);

window.onload = displayQuote;
