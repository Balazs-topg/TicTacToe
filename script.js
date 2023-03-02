let wrapper = document.querySelector(".wrapper");
let squares = document.querySelectorAll(".square");

let isPlayerOnesTurn = true;

let legalMoves = {
  num0: true,
  num1: true,
  num2: true,
  num3: true,
  num4: true,
  num5: true,
  num6: true,
  num7: true,
  num8: true,
};

for (let i = 0; i < squares.length; i++) {
  console.log(i)
  squares[i].addEventListener("click", () => {
    console.log(squares[i].classList[1]);
    //check if it's a legal move
    if (legalMoves[`num${i}`]) {
      let mark = document.createElement("div");
      if (isPlayerOnesTurn) {
        mark.classList.add("player-one");
      } else {
        mark.classList.add("player-two");
      }
      squares[i].appendChild(mark);
      setTimeout(newSquareAnim, 1);
      function newSquareAnim() {
        mark.classList.add("grow");
      }
      legalMoves[`num${i}`] = false;
      isPlayerOnesTurn = !isPlayerOnesTurn;
    }

    //'<div class="player-one" style="height: 50%; width: 50%; border-radius: 999px; transform: scale(0); transition: all;"></div>';
  });
}
