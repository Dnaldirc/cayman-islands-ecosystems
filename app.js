'use strict'

var isCorrect = false;

while (!isCorrect){
    var answer = prompt('what is Cayman\'s nantional animal?');
    if (answer.toLowerCase() === 'cayman parrot'){
        alert("Correct");
        isCorrect = true;
    }else{
        alert("Wrong, try again");
    }
}

