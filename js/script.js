/* ------------------------------------------------------------------------------------------------------------------------------------------------------
   L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
   Ogni cella ha un numero progressivo, da 1 a 100.
   Ci saranno quindi 10 caselle per ognuna delle 10 righe.
   Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
   Bonus
   Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
   - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
   - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
   - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
------------------------------------------------------------------------------------------------------------------------------------------------------- */
/*
// Metto in allerta il bottone
// Per 100 volte genero un quadrato
// Lo aggiungo nel DOM
// - Al click di ogni quadrato cambia il colore
// - Stampa in console il numero della cella
*/
/* VARIABLES */
const playButton = document.querySelector('#play-btn');
const mainContainer = document.querySelector('.ms-container');
const mainGrid = document.querySelector('#ms-grid');
/* EVENTS */
playButton.addEventListener('click', function () {
    const footer = document.querySelector('footer');
    const difficultly = changeDifficulty('easy', 'medium', 'hard', 100, 81, 49);
    footer.classList.remove('d-none');
    footer.classList.add('d-flex');
    mainContainer.classList.remove('d-none');
    mainGrid.innerHTML = '';
    for (let i = 1; i <= difficultly; i++) {
        const square = createSquare(i);
        mainGrid.append(square);
        square.addEventListener('click', function () {
            this.classList.add('bg-primary');
            setTimeout(function () {
                alert(`Hai selezionato il quadrato: ${i}`);
            }, 1);
        });
    }
});
/* FUNCTIONS */
// Funzione che genera un quadrato
// number: dato di tipo numerico
// return: elemento nel DOM rappresentante un quadrato
function createSquare(number) {
    const difficultySelect = document.querySelector('#difficulty').value;
    const square = document.createElement('div');
    if (difficultySelect === 'hard') {
        square.classList.add('ms-square-hard');

    } else if (difficultySelect === 'medium') {
        square.classList.add('ms-square-medium');
    } else {
        square.classList.add('ms-square-easy');
    }
    square.classList.add('ms-square');
    square.classList.add('d-flex');
    square.classList.add('justify-content-center');
    square.classList.add('align-items-center');
    square.innerHTML = `<span>${number}</span>`;
    return square;
}
// Funzione per cambiare livello di difficoltà
// value1, value2, value3: elemento di tipo stringa che rappresenta il value nel DOM
// number1, number2, number3: elemento di tipo numero
// return: variabile che cambia la diffcoltà
function changeDifficulty(value1, value2, value3, number1, number2, number3) {
    let difficulty;
    const difficultySelect = document.querySelector('#difficulty').value;
    if (difficultySelect === value1) {
        difficulty = number1;
    } else if (difficultySelect === value2) {
        difficulty = number2;
    } else if (difficultySelect === value3) {
        difficulty = number3;
    }
    return difficulty;
}
