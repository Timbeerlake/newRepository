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
    if (n == " " || n == null ) {
        +prompt("Угадайте число от 1 до 100")
        game(n)
    } else if(n > number()) {
        alert("ваше число больше загаданного"); continue
    } else if (n < number()) {
        alert("ваше число меньше загаданного") ;
    }
}
 game()
