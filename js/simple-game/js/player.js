class Player {
  constructor(img, x, y, width, height, step) {
    this.img = img;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.step = step;
    this.gold = 0;
  }
  draw = (ctx) => {
    ctx.drawImage(this.img, this.x, this.y, this.width, this.height);
  };

  moveRight = () => {
    let newX = this.x + this.step;
    if (newX <= 500 - this.width) {
      this.x = newX;
    }
  };

  moveLeft = () => {
    let newX = this.x - this.step;
    if (newX >= 0) {
      this.x = newX;
    }
  };

  moveUp = () => {
    let newY = this.y - this.step;
    if (newY >= 0) {
      this.y = newY;
    }
  };

  moveDown = () => {
    let newY = this.y + this.step;
    if (newY <= 500 - this.height) {
      this.y = newY;
    }
  };

  collectGold = () => {
    this.gold += 1;
  };
}
