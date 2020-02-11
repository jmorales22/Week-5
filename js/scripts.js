'use strict';

let category = 'dev'

const refreshQuoteButton = document.querySelector('#refreshQuote');
const submitFormButton = document.querySelector('#submitForm');
const promptNewQuote = document.querySelector('#promptCategory')

function getQuote(category) {
    const apiURL = `https://api.chucknorris.io/jokes/random?category=${category}`;
    const chuckSaysParagraph = document.querySelector('#chuckSays');
    get(apiURL).then(function(response){
        chuckSaysParagraph.innerHTML = response.value;
    });
};

refreshQuoteButton.addEventListener('click', function(e){
    e.preventDefault();
    getQuote(category);
});

submitFormButton.addEventListener('click', function(e){
    e.preventDefault();
    const categoryInput = document.querySelector('#categoryInput')
    category = categoryInput.value;
    getQuote(category);
})

promptNewQuote.addEventListener('click', function(e) {
    e.preventDefault();
    let newCategory = prompt('Select a category: animal, career, celebrity, dev, fashion, food, or history');
    getQuote(newCategory);
})


getQuote(category);