console.log('client.js sourced');

$( document ).ready( onReady );


function onReady() {
    console.log('DOM ready');
    $('#addJokeButton').on('submit', addJokes);
}


function addJokes(event){
    event.preventDefault();
    
    const jokeAdded = {
        name: $('whoseJokeIn').val(''),
        question: $('questionIn').val(''),
        answer: $('punchlineIn').val(''),
    }
    jokes.push(addJokes);
  console.table(jokes);
  render();
    }

function render(){

  for (let addJokes of jokes) {

    $('#js-table-body').append(`
    <tr>
            <td>${addJokes.name}</td>
            <td>${addJokes.question}</td>
            <td>${addJokes.answer}</td>
          </tr>`);
  }
}