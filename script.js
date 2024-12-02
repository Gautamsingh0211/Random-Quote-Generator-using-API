const api_url = "https://dummyjson.com/quotes";
const quote = document.getElementById('quote');
const author = document.getElementById('author');

async function getquote(url) {
    const response = await fetch(url);
    var data = await response.json();
    // console.log(data);
    const randomNum = Math.ceil(Math.random()*29)
    // console.log(randomNum); 
    quote.innerHTML = data.quotes[randomNum].quote;
    author.innerHTML = data.quotes[randomNum].author;
}
function tweet() {
    window.open('https://twitter.com/intent/tweet?text='+ quote.innerHTML + "  --By " + author.innerHTML, "Tweet Window", "width = 600, height=300")
}

getquote(api_url);
