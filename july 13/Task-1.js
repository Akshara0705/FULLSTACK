let score = 0;

let answer1 = prompt("Which movie features the song 'Naatu Naatu'?");
    if (answer1.toLowerCase() === "rrr") {
    alert("correct!");
    score++;
    } else {
        alert("Incorrect. The correct answer is RRR.");
    }

let answer2 = prompt("What is 2 + 2?");
    if (answer2 === "4") {
        alert("correct!");
        score++;
    } else {
        alert("Incorrect. The correct answer is 4.");
    }

let answer3 = prompt("Why don't eggs tell jokes?");
    if (answer3.trim().toLowerCase() === "they might crack up") {
        alert("Correct! They might crack up!");
        score++;
    } else {
        alert("Oops! Because they might crack up! Egg-cellent try!");
}

alert("You scored " + score + " out of 3!");
