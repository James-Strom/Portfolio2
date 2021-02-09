// var y = Math.floor(Math.random() * 10 + 1);

//         var guess = 1;
//         document.getElementById("subGuess").onclick = function() {

//             var x = document.getElementById("guessField").value;

//             if (x == y) {
//                 alert("CONGRATS!!! YOU GUESSED THE SECRET NUMBER: " +
//                     y + " YOU DID IT IN " + guess + " TRIES. Press the reset button to try again.");
//             } else if (x > y) {
//                 guess++;
//                 alert("NUMBER TOO BIG!! PICK A SMALLER NUMBER");
//             } else if (x < y) {
//                 guess++;
//                 alert("NUMBER TOO SMALL!! PICK A GREATER NUMBER");
//             } else {
//                 guess++;
//                 alert("PICK A NUMBER BETWEEN 1 AND 10");
//             };
//             console.log(x);
//         }
//         document.getElementById("resetGuess").onclick = function() {
//             location.reload()
//         }

var secret = Math.floor(Math.random() * 10) + 1;

var startBtn = document.getElementById("startButton");
startBtn.addEventListener("click", guessNumber)

function guessNumber() {
    var guess = parseInt(prompt("Guess a number between 1 and 10"));
    checkAnswer(guess);
}

function checkAnswer(guess) {
    var active = true;
    while (active) {
        if (guess > secret) {
            alert("NUMBER TOO BIG!! PICK A SMALLER NUMBER");
            guessNumber();
        } else if (guess < secret) {
            alert("NUMBER TOO SMALL!! PICK A GREATER NUMBER");
            guessNumber();
        } else if (guess === secret) {
            alert("CONGRATS!!! YOU GUESSED THE SECRET NUMBER: " + guess);
            active = false;
            document.getElementById("myTxt").innerHTML = "YOU WON!";
        } else {
            alert("PICK A NUMBER BETWEEN 1 AND 10");
            guessNumber();
        }
    }
}