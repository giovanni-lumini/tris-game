/* 
-impostare una condizione che se l’utente clicca sul bottone player 1, l’unico carattere che si può inserire nei quadrati è X; dopo che ha cliccato, l’unico carattere che si può inserire è O.

Impostare la variabile:
let currentPlayer = “”;

Impostare una funzione che cliccando su player 1: 
let currentPlayer = “x”;

Impostare una funzione che cliccando su player 2:
let currentPlayer = “o”;

Impostare una funzione che cliccando su un quadrato:
Se currentPlayer = “X”; 
Viene inserito il testo X
Poi impostato currentPlayer = “O”;
Altrimenti
Viene inserito il testo O
let currentPlayer = “X”;
*/

//variable for understand how is current player 
let currentPlayer = "";

//elements from dom
//player bottuns 
let btnPlayer1 = document.getElementById("btn-player1");
let btnPlayer2 = document.getElementById("btn-player2");
//cells
let cell1 = document.getElementById("cell-1");
let cell2 = document.getElementById("cell-2");
let cell3 = document.getElementById("cell-3");
let cell4 = document.getElementById("cell-4");
let cell5 = document.getElementById("cell-5");
let cell6 = document.getElementById("cell-6");
let cell7 = document.getElementById("cell-7");
let cell8 = document.getElementById("cell-8");
let cell9 = document.getElementById("cell-9");

//functions
//current player
function currentPlayer1(){
    currentPlayer = "x";
    console.log("current player: " + currentPlayer);
    
}

function currentPlayer2(){
    currentPlayer = "o";
    console.log("current player: " + currentPlayer);
}

btnPlayer1.onclick = currentPlayer1;
btnPlayer2.onclick = currentPlayer2;

