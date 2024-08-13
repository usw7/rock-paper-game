
let userScore = 0;
let compScore = 0;

const choice = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");
const userScoreSpan = document.querySelector("#user-score");
const compScoreSpan = document.querySelector("#comp-score");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIndex = Math.floor(Math.random() * 3);
  return options[randIndex];
};

const drawGame = () => {
  msg.innerText = "Game draw! Play again.";
};

const showWinner = (userWin) => {
  if (userWin) {
    msg.innerText = "You win!";
  } else {
    msg.innerText = "You lose!";
  }
};

const playGame = (userChoice) => {
  const compChoice = genComputerChoice();
  console.log(`Computer chose: ${compChoice}`);

  if (userChoice === compChoice) {
    drawGame();
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    showWinner(true);
    userScore++;
  } else {
    showWinner(false);
    compScore++;
  }

  userScoreSpan.innerText = userScore;
  compScoreSpan.innerText = compScore;
};

choice.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");
    playGame(userChoice);
  });
});



  