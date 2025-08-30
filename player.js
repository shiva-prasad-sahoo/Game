class Player {
  //cnstr needs game class, width, height

  constructor(game, x, y, speedX, speedY) {
    this.game = game;
    this.x = x;
    this.y = y;
    this.speedX = speedX;
    this.speedY = speedY;
    this.isMoving = true;
  }

  update(deltaTime) {
    if (
      (this.x <= 0 && this.speedX <= 0) ||
      (this.x >= this.game.columns - 1 && this.speedX > 0) ||
      (this.y <= 0 && this.speedY <= 0) ||
      (this.y > this.game.rows - 1 && this.speedY > 0)
    ) {
      this.isMoving = false;
    }

    if (this.isMoving) {
      // console.log("update called");
      this.x += this.speedX * this.game.cellsize * (deltaTime / 1000);
      this.y += this.speedY * this.game.cellsize * (deltaTime / 1000);
    }
  }

  draw() {
    // console.log("draw called");
    this.game.ctx.fillStyle = "blue";
    this.game.ctx.fillRect(
      this.x,
      this.y,
      2 * this.game.cellsize,
      this.game.cellsize
    );
  }

  TurnUp() {
    this.speedX = 0;
    this.speedY = -1;
    this.isMoving = true;
  }

  TurnDown() {
    this.speedX = 0;
    this.speedY = 1;
    this.isMoving = true;
  }
  TurnRight() {
    this.speedX = 1;
    this.speedY = 0;
    this.isMoving = true;
  }
  TurnLeft() {
    this.speedX = -1;
    this.speedY = 0;
    this.isMoving = true;
  }
}

class Keyboard1 extends Player {
  constructor(game, x, y, speedX, speedY) {
    super(game, x, y, speedX, speedY);

    window.addEventListener("keydown", (e) => {
      console.log(e.key);
      if (e.key == "ArrowUp") this.TurnUp();
      else if (e.key == "ArrowDown") this.TurnDown();
      else if (e.key == "ArrowRight") this.TurnRight();
      else if (e.key == "ArrowLeft") this.TurnLeft();
    });
  }
}
