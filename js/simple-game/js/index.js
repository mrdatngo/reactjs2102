let c = document.getElementById("simple-game");
let ctx = c.getContext("2d");

let map = [
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [-1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, -1, 0, 0, 0, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, -1, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 1, 0, 0, 0],
  [0, -1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
];

let playerImg = document.createElement("img");
let treasureImg = document.createElement("img");
let trapImg = document.createElement("img");
playerImg.src = "images/player.png";
treasureImg.src = "images/treasure.png";
trapImg.src = "images/trap.png";

let player = new Player(playerImg, 0, 0, 50, 50, 50);

document.addEventListener("keydown", (event) => {
  console.log(event);
  switch (event.key) {
    case "ArrowRight":
      player.moveRight();
      checkMove();
      break;
    case "ArrowLeft":
      player.moveLeft();
      checkMove();
      break;
    case "ArrowUp":
      player.moveUp();
      checkMove();
      break;
    case "ArrowDown":
      player.moveDown();
      checkMove();
      break;
  }
});

function checkMove() {
  let j = Number.parseInt(player.x / 50);
  let i = Number.parseInt(player.y / 50);
  if (map[i][j] === 1) {
    player.collectGold();
    map[i][j] = 0;
    if (player.gold === 4) {
      alert("Win");
    }
  } else if (map[i][j] === -1) {
    alert("You lose");
  }
}

window.onload = () => {
  //   ctx.drawImage(playerImg, 100, 100, 50, 50);
  setInterval(() => {
    // console.log("Draw");
    // clear screen
    ctx.fillStyle = "#FFFFFF";
    ctx.fillRect(0, 0, 500, 500);
    // draw map
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] == 1) {
          let x = j * 50;
          let y = i * 50;
          ctx.drawImage(treasureImg, x, y, 50, 50);
        } else if (map[i][j] == -1) {
          let x = j * 50;
          let y = i * 50;
          ctx.drawImage(trapImg, x, y, 50, 50);
        }
      }
    }
    // draw player
    player.draw(ctx);
  }, 50);
};
