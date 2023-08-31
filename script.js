let rulbtn = document.getElementById("rules-btn");
let close = document.getElementById("close");
// localStorage.setItem("pcScore", 0);
// localStorage.setItem("playerScore", 0);
// let icons = document.getElementsByClassName("play-icons");
// console.log(rulbtn);
// localStorage.clear();
if (localStorage.length == 0) {
  // console.log("hi");
  // document.getElementById("comp-score").innerText = 0;
  // document.getElementById("score").innerText = 0;
  localStorage.setItem("pcScore", 0);
  localStorage.setItem("playerScore", 0);
}
rulbtn.onclick = function () {
  document.getElementById("rules").style.display = "block";
};

close.onclick = function () {
  document.getElementById("rules").style.display = "none";
};

function playAgain() {
  // Clear the modified play area
  // document.getElementById("winner").innerText = "";
  const pcAreaChild = document.getElementById("pc-icon");
  pcAreaChild.removeChild(pcAreaChild.firstChild);
  document.getElementById("loser").style.visibility = "visible";

  document.getElementById("nxt").style.display = "none";

  const playerAreaChild = document.getElementById("player-icon");
  playerAreaChild.removeChild(playerAreaChild.firstChild);
  // Set display to original values.
  document.getElementById("mod-play-area").style.display = "none";
  document.getElementById("play-area").style.display = "block";
}

function res(val) {
  let pcChoice = Math.floor(Math.random() * 3 + 1);
  // console.log(pcChoice);
  let pcSymbol;
  switch (pcChoice) {
    case 1:
      pcSymbol = "rock";
      break;
    case 2:
      pcSymbol = "paper";
      break;
    case 3:
      pcSymbol = "scissor";
      break;
  }
  // console.log("pc picked", pcSymbol);
  document.getElementById("play-area").style.display = "none";
  document.getElementById("mod-play-area").style.display = "block";
  document.getElementById("nxt").style.display = "block";
  // To append pc picked element along with style.
  const pcElement = document.getElementById(pcSymbol);
  const pcClone = pcElement.cloneNode(true);
  document.getElementById("pc-icon").appendChild(pcClone);

  // To append player picked element along with style.
  const playerElement = document.getElementById(val);
  const playerClone = playerElement.cloneNode(true);
  document.getElementById("player-icon").appendChild(playerClone);
  // document.getElementById("pc-icon").append(document.getElementById(pcSymbol));
  let pcScore = Number(localStorage.getItem("pcScore"));

  let playerScore = Number(localStorage.getItem("playerScore"));
  // console.log(val, pcSymbol);
  if (pcSymbol === val) {
    document.getElementById("winner").innerText = "TIE UP";
    document.getElementById("loser").style.visibility = "hidden";
    document.getElementById("nxt").style.display = "none";
  } else if (pcSymbol === "rock" && val === "paper") {
    playerScore += 1;
    localStorage.setItem("playerScore", playerScore);
    document.getElementById("winner").innerText = "YOU WON";
  } else if (pcSymbol === "paper" && val === "scissor") {
    playerScore += 1;
    localStorage.setItem("playerScore", playerScore);
    document.getElementById("winner").innerText = "YOU WON";
  } else if (pcSymbol === "scissor" && val == "rock") {
    document.getElementById("winner").innerText = "YOU WON";
    playerScore += 1;
    localStorage.setItem("playerScore", playerScore);
  } else {
    document.getElementById("winner").innerText = "YOU LOST";
    pcScore += 1;
    localStorage.setItem("pcScore", pcScore);
    document.getElementById("nxt").style.display = "none";
  }
  // console.log(playerScore, pcScore);
  document.getElementById("comp-score").innerHTML =
    localStorage.getItem("pcScore");
  document.getElementById("score").innerHTML =
    localStorage.getItem("playerScore");
  document.getElementById("comp-score").innerHTML =
    localStorage.getItem("pcScore");
  document.getElementById("score").innerHTML =
    localStorage.getItem("playerScore");
}
// localStorage.clear();
document.getElementById("comp-score").innerHTML =
  localStorage.getItem("pcScore");
document.getElementById("score").innerHTML =
  localStorage.getItem("playerScore");

// localStorage.clear();
