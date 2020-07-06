console.log('client.js sourced');

$( document ).ready( onReady );

const jokeList ={
    
}

function onReady() {
    console.log('DOM ready');
    $('addJokeButton').on('submit', addJokes);
}


function addJokes(event){
    event.preventDefault();
    
    const jokeAdded = {
        name: $('whoseJokeIn').val(''),
        question: $('questionIn').val(''),
        answer: $('punchlineIn').val(''),
    }
    }
  
