function generate(){
const quotes = {
    "- Rachel Macy Stafford" : '“Only love today. Be kind to yourself.”',
    "- Glennon Doyle" : '"This life is mine alone. So I have stopped asking people for directions to places they have never been."',
    "- Oprah Winfrey" : '“Breathe. Let go. And remind yourself that this very moment is the only one you know you have for sure.”',
    "- Ellie Holcomb" : '"When you make a mistake, respond to yourself in a loving way rather than a self-shaming way."'
}

const authors = Object.keys(quotes);

const author = authors[Math.floor(Math.random() * authors.length) ];

const quote = quotes[author];

document.getElementById("quote").innerHTML = quote

document.getElementById("author").innerHTML = author

}