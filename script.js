const buttonE1 = document.querySelector(".roll-button");
const rollHisE1 = document.querySelector("#roll-history");
const diceE1 = document.getElementById("dice");

let history = [];

function getDiceFace(rollResult) {
  switch (rollResult) {
    case 1:
      return "&#9856;";
    case 2:
      return "&#9857;";
    case 3:
      return "&#9858;";
    case 4:
      return "&#9859;";
    case 5:
      return "&#9860;";
    case 6:
      return "&#9861;";
  }
}

function rollDice() {
  const rollResult = Math.floor(Math.random() * 6) + 1;
  const diceFace = getDiceFace(rollResult);
  diceE1.innerHTML = diceFace;
  history.push(rollResult);
  updateRollHistory();
}

function updateRollHistory() {
  rollHisE1.innerHTML = ""; // Clear existing history
  for (let i = 0; i < history.length; i++) {
    const listItem = document.createElement("li");
    listItem.innerHTML = `Roll ${i + 1}: <span>${getDiceFace(
      history[i]
    )}</span>`;
    rollHisE1.appendChild(listItem);
  }
}

buttonE1.addEventListener("click", () => {
  diceE1.classList.remove("roll-animation"); // Reset animation
  void diceE1.offsetWidth; // Force reflow
  diceE1.classList.add("roll-animation");

  setTimeout(() => {
    rollDice();
  }, 1000);
});
