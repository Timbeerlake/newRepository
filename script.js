"use strict";


function myNumber () {
    return function (num) {
        return Math.ceil((Math.random() * 100));
    };
};

const number = myNumber();

console.log(number());

// const ask = +prompt("Угадайте число от 1 до 100")
const game = function(n){
    n = +prompt("Угадайте число от 1 до 100")
    if (n == "" || n == null ) {
        alert("введите число !!!")
        game(n)
    }  if(n > number()) {
        alert("ваше число больше загаданного"); 
        game(n)
    }  if (n < number()) {
        alert("ваше число меньше загаданного") ;
        game(n)
    } if (n === number()) {
        alert("Ура вы победили!!!")
    }
}
 game()
