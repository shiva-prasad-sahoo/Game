class Player {
  //cnstr needs game class, width, height

  constructor(game, x, y, speedX, speedY) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
  }

  update() {
    this.x += this.speedX * this.game.cellsize;
    this.y += this.speedY * this.game.cellsize;
  }

  draw() {
    this.game.ctx.fillStyle = "blue";
    this.game.ctx.fillRect(
      this.x,
      this.y,
      2 * this.game.cellsize,
      this.game.cellsize
    );
  }
}
