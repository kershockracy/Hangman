let POSSIBLE_WORDS = ["obdurate", "verisimilitude", "defenestrate", "obsequious", "dissonant", "toady", "idempotent"];

let guesses = "";
let word = "";
let MAX_GUESSES = 6;
let guessCount = MAX_GUESSES;
let gameFinished = false;


function newGame() {
    guesses = "";
    guessCount = MAX_GUESSES;
    let randomIndex = parseInt(Math.random() * POSSIBLE_WORDS.length);
    word = POSSIBLE_WORDS[randomIndex];
    gameFinished = false;

    document.getElementById("guess").value = "";
    document.getElementById("guess").disabled = false;
    document.getElementById("guessbutton").disabled = false;

    updateScreen();
}
function guess() {
    let input = document.getElementById("guess");
    let letter = input.value;
    if(word.indexOf(letter)<0){
        guessCount--;
    }
    guesses += letter;
    updateScreen();
}
function updateScreen() {
    let clueString = "";
    for (let i = 0; i < word.length; i++) {
        let letter = word.charAt(i);
        if (guesses.indexOf(letter) >= 0) {
            clueString += letter + " ";
        }
        else {
            clueString += "_ ";
        }
    }
    let clue = document.getElementById("clue");
    clue.textContent = clueString;

    let guessArea = document.getElementById("guesses");
    guessArea.textContent = "Guesses Letter";

    let image=document.getElementById("hangmanpic;")
    image.src='images/hangman${guessCount}'

}