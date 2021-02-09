var trainSpeed = 250;
var trainPosition = 0;
var animation;

var startButton = document.getElementById("startButton");
startButton.addEventListener("click", speedUp);

var stopButton = document.getElementById("stopButton");
stopButton.addEventListener("click", stopTrain);

var resetButton = document.getElementById("resetButton");
resetButton.addEventListener("click", resetTrain);

function speedUp() {
    if (trainSpeed > 20) {
        trainSpeed -= 20;
    }
    console.log("train speed: " + trainSpeed);

    clearInterval(animation);
    animation = setInterval(frame, trainSpeed);


    function frame() {
        trainPosition += 2;
        train.style.left = trainPosition + 'px';
        console.log(trainPosition);
        checkPosition(trainPosition);
    }
}

function checkPosition(currentPosition) {
    if (currentPosition === 400) {
        alert(":O!");
        console.log("Crash!");
        clearInterval(animation);
    }
}

function stopTrain() {
    if (trainPosition < 400) {
        clearInterval(animation);
        console.log("Whew! That was close!");
    }
}

function resetTrain() {
    location.reload(); {
        clearInterval(animation);
        alert("Try Again");
        console.log("Try Again");
    }
}