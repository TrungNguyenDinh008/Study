var player1NameHTML = document.querySelector(".p1Name");
var player2NameHTML = document.querySelector(".p2Name");
var state = document.querySelector(".title");
var choices = [];
var player1Name = prompt("What's player 1 name?") || "Player 1";
var player2Name = "Computer";
player1NameHTML.innerHTML = player1Name;
var isTwoPlayerMode = confirm("Two Player Mode?");
var chooseBtns = document.querySelectorAll(".choose");
var numberOfChooseBtns = chooseBtns.length;
let isPlayer1Win = false;
let isPlayer2Win = false;
for (let i = 0; i < numberOfChooseBtns; i++) {
  chooseBtns[i].addEventListener("click", function () {
    if (isTwoPlayerMode) {
      state.innerHTML = "Player 2 turn.";
      choices.push(this.innerText);
      if (choices.length > 1) {
        choose(choices[0], isTwoPlayerMode, choices[1]);
      }
    } else {
      choose(this.innerText, isTwoPlayerMode);
    }
  });
}
if (isTwoPlayerMode) {
  var player2Name = prompt("What's player 2 name?") || "Player 2";
  player2NameHTML.innerHTML = player2Name;
} else {
  player2NameHTML.innerHTML = player2Name;
}
function choose(c1, boolean, c2) {
  if (boolean) {
    compare(c1, c2);
    changeImg(c1, c2);
    choices = [];
  } else {
    let a = Math.floor(Math.random() * 3);
    var player2Choose = chooseBtns[a].innerText;
    compare(c1, player2Choose);
    changeImg(c1, player2Choose);
  }
}
function changeImg(player1Choose, player2Choose) {
  let player1Img = document.querySelector(".p1Choose");
  let player2Img = document.querySelector(".p2Choose");
  if (isPlayer1Win) {
    player1Img.setAttribute(
      "src",
      "https://trungnguyendinh008.github.io/Study/Homework/Homework_12-May-2023/images/" + player1Choose.toLowerCase() + "-win.jpg"
    );
  } else {
    player1Img.setAttribute(
      "src",
      "https://trungnguyendinh008.github.io/Study/Homework/Homework_12-May-2023/images/" + player1Choose.toLowerCase() + ".jpg"
    );
  }
  if (isPlayer2Win) {
    player2Img.setAttribute(
      "src",
      "https://trungnguyendinh008.github.io/Study/Homework/Homework_12-May-2023/images/" + player2Choose.toLowerCase() + "-win.jpg"
    );
  } else {
    player2Img.setAttribute(
      "src",
      "https://trungnguyendinh008.github.io/Study/Homework/Homework_12-May-2023/images/" + player2Choose.toLowerCase() + ".jpg"
    );
  }
  isPlayer1Win = false;
  isPlayer2Win = false;
}
function compare(choice1, choice2) {
  switch (choice1) {
    case "ROCK":
      if (choice2 === "SCISSORS") {
        state.innerHTML = `${player1Name} win!`;
        isPlayer1Win = true;
      } else if (choice2 === "ROCK") {
        state.innerHTML = "Draw!";
      } else {
        state.innerHTML = `${player2Name} win!`;
        isPlayer2Win = true;
      }
      break;
    case "PAPER":
      if (choice2 === "ROCK") {
        state.innerHTML = `${player1Name} win!`;
        isPlayer1Win = true;
      } else if (choice2 === "PAPER") {
        state.innerHTML = "Draw!";
      } else {
        state.innerHTML = `${player2Name} win!`;
        isPlayer2Win = true;
      }
      break;
    case "SCISSORS":
      if (choice2 === "PAPER") {
        state.innerHTML = `${player1Name} win!`;
        isPlayer1Win = true;
      } else if (choice2 === "SCISSORS") {
        state.innerHTML = "Draw!";
      } else {
        state.innerHTML = `${player2Name} win!`;
        isPlayer2Win = true;
      }
      break;
    default:
  }
}
