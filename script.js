let wrapper = document.querySelector(".wrapper");
let squares = document.querySelectorAll(".square");

let isPlayerOnesTurn = true;

let filedOcupiedBy = {
  num0: "unoccupied",
  num1: "unoccupied",
  num2: "unoccupied",
  num3: "unoccupied",
  num4: "unoccupied",
  num5: "unoccupied",
  num6: "unoccupied",
  num7: "unoccupied",
  num8: "unoccupied",
  clearBoard() {
    this.num0 = "unoccupied";
    this.num1 = "unoccupied";
    this.num2 = "unoccupied";
    this.num3 = "unoccupied";
    this.num4 = "unoccupied";
    this.num5 = "unoccupied";
    this.num6 = "unoccupied";
    this.num7 = "unoccupied";
    this.num8 = "unoccupied";
    for (let i = 0; i < squares.length; i++) {
      squares[i].innerHTML = ""
    }
    isPlayerOnesTurn = true
  },
};

let cover = document.querySelector(".cover");

let winnerText = document.querySelector(".winner");

let restartBtn = document.querySelector(".restart");

restartBtn.addEventListener("click", () => {
  cover.classList.add("hidden");
  filedOcupiedBy.clearBoard();
});

function checkWin(playerName) {
  //there are 8 win possibilities (actually 16 if you cout both players)
  //check horizontal possibilites first
  if (
    filedOcupiedBy.num0 === playerName &&
    filedOcupiedBy.num1 === playerName &&
    filedOcupiedBy.num2 === playerName
  ) {
    return true;
  } else if (
    filedOcupiedBy.num3 === playerName &&
    filedOcupiedBy.num4 === playerName &&
    filedOcupiedBy.num5 === playerName
  ) {
    return true;
  } else if (
    filedOcupiedBy.num6 === playerName &&
    filedOcupiedBy.num7 === playerName &&
    filedOcupiedBy.num8 === playerName
  ) {
    return true;
  }
  //check vertical possibilites
  else if (
    filedOcupiedBy.num0 === playerName &&
    filedOcupiedBy.num3 === playerName &&
    filedOcupiedBy.num6 === playerName
  ) {
    return true;
  } else if (
    filedOcupiedBy.num1 === playerName &&
    filedOcupiedBy.num4 === playerName &&
    filedOcupiedBy.num7 === playerName
  ) {
    return true;
  } else if (
    filedOcupiedBy.num2 === playerName &&
    filedOcupiedBy.num5 === playerName &&
    filedOcupiedBy.num8 === playerName
  ) {
    return true;
  }
  //check dioginal possibilites
  else if (
    filedOcupiedBy.num0 === playerName &&
    filedOcupiedBy.num4 === playerName &&
    filedOcupiedBy.num8 === playerName
  ) {
    return true;
  } else if (
    filedOcupiedBy.num2 === playerName &&
    filedOcupiedBy.num4 === playerName &&
    filedOcupiedBy.num6 === playerName
  ) {
    return true;
  }
  return false;
}

//add click event listener to every box
for (let i = 0; i < squares.length; i++) {
  squares[i].addEventListener("click", () => {
    //check if it's a legal move
    if (filedOcupiedBy[`num${i}`] === "unoccupied") {
      let mark = document.createElement("div");
      if (isPlayerOnesTurn) {
        mark.classList.add("player-one");
        filedOcupiedBy[`num${i}`] = "playerOne";
      } else {
        mark.classList.add("player-two");
        filedOcupiedBy[`num${i}`] = "playerTwo";
      }
      squares[i].appendChild(mark);
      setTimeout(newSquareAnim, 1);
      function newSquareAnim() {
        mark.classList.add("grow");
      }
      isPlayerOnesTurn = !isPlayerOnesTurn;
      if (checkWin("playerOne")) {
        cover.classList.remove("hidden");
        winnerText.innerHTML = "Green";
      }
      if (checkWin("playerTwo")) {
        cover.classList.remove("hidden");
        winnerText.innerHTML = "Red";
      }
    }

    //'<div class="player-one" style="height: 50%; width: 50%; border-radius: 999px; transform: scale(0); transition: all;"></div>';
  });
}
