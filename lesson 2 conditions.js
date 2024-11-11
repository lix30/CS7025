let playerScore = 0;


function checkScoreOddOrEven() {
    if (playerScore % 2 === 0) {
        console.log("The playerscore is even");
    } else {
        console.log("The playerscore is odd");
    }
}
if (playerScore % 2 !== 0) {
    console.log("Player score is odd, show different message");
} else {
    console.log("Player score is even, show other message");
}

