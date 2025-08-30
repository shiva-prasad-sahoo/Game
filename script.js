class Game {
  constructor(canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    //inintilazing these to avoid writng canvas.width all time
    this.width;
    this.height;

    //player call
    this.player = new Keyboard1(this, 0, 0, 0, 0);

    //grid making
    this.cellsize = 25;
    this.columns;
    this.rows;

    window.addEventListener("resize", (e) => {
      this.resize(e.currentTarget.innerWidth, e.currentTarget.innerHeight);
    });

    //set initial size
    this.resize(window.innerWidth, window.innerHeight);
  }

  drawGrid() {
    for (let x = 0; x < this.columns; x++) {
      for (let y = 0; y < this.rows; y++) {
        this.ctx.strokeRect(
          x * this.cellsize,
          y * this.cellsize,
          this.cellsize,
          this.cellsize
        );
      }
    }
  }

  resize(width, height) {
    // rounding values to avoid half pixels that create blurry image
    this.canvas.width = width - (width % this.cellsize);
    this.canvas.height = height - (height % this.cellsize);

    //setting the game width and height
    this.width = this.canvas.width;
    this.height = this.canvas.height;

    this.columns = Math.floor(this.width / this.cellsize);
    this.rows = Math.floor(this.height / this.cellsize);

    //called bcoz resize will delete everything
    //so need to call render again
    // this.render();  stores nan value in x,y that affect the player animation

    // console.log("resize called");
  }

  render(deltaTime) {
    // console.log("render called");
    // console.log(deltaTime); //to check if dt is updating or not
    this.drawGrid();
    this.player.draw();
    this.player.update(deltaTime);
  }
}

window.addEventListener("load", () => {
  const canvas = document.getElementById("canvas1");
  const ctx = canvas.getContext("2d");

  const game = new Game(canvas, ctx);

  let lastTime = 0;

  function animate(timestamp) {
    const deltaTime = timestamp - lastTime;
    lastTime = timestamp;

    // console.log(lastTime, deltaTime);

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    game.render(deltaTime);
    window.requestAnimationFrame(animate);
  }

  requestAnimationFrame(animate);
});
