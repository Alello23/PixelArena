<template>
    <div id="app">
      <canvas ref="gameCanvas" width="800" height="600"></canvas>
      <div v-if="gameOver" class="game-over">
        <h2>Game Over</h2>
        <p>Score: {{ score }}</p>
        <button @click="restartGame">Restart</button>
      </div>
      <div v-else class="score">
        <p>Score: {{ score }}</p>
      </div>
      <div v-if="loading" class="loading">
        <div class="spinner-border text-primary" role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        player: {
          x: 375,
          y: 550,
          width: 50,
          height: 50,
          speed: 5,
        },
        obstacles: [],
        leftPressed: false,
        rightPressed: false,
        gameOver: false,
        score: 0,
        loading: false, // Controla la visibilidad del icono de carga
      };
    },
    methods: {
      drawPlayer() {
        const ctx = this.$refs.gameCanvas.getContext("2d");
        ctx.fillStyle = "blue";
        ctx.fillRect(this.player.x, this.player.y, this.player.width, this.player.height);
      },
      drawObstacles() {
        const ctx = this.$refs.gameCanvas.getContext("2d");
        ctx.fillStyle = "red";
        for (const obstacle of this.obstacles) {
          ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
        }
      },
      update() {
        if (!this.gameOver && !this.loading) {
          if (this.leftPressed && this.player.x > 0) {
            this.player.x -= this.player.speed;
          }
  
          if (this.rightPressed && this.player.x < this.$refs.gameCanvas.width - this.player.width) {
            this.player.x += this.player.speed;
          }
  
          // Move obstacles
          for (const obstacle of this.obstacles) {
            obstacle.y += obstacle.speed;
  
            // Check for collision with player
            if (
              this.player.x < obstacle.x + obstacle.width &&
              this.player.x + this.player.width > obstacle.x &&
              this.player.y < obstacle.y + obstacle.height &&
              this.player.y + this.player.height > obstacle.y
            ) {
              this.gameOver = true;
            }
          }
  
          // Remove off-screen obstacles
          this.obstacles = this.obstacles.filter(obstacle => obstacle.y < this.$refs.gameCanvas.height);
  
          // Add new obstacles
          if (Math.random() < 0.03) {
            const newObstacle = {
              x: Math.random() * (this.$refs.gameCanvas.width - 20),
              y: 0,
              width: 20,
              height: 20,
              speed: Math.random() * 3 * 2,
            };
            this.obstacles.push(newObstacle);
          }
  
          this.score++; // Incrementa la puntuación
  
          const ctx = this.$refs.gameCanvas.getContext("2d");
          ctx.clearRect(0, 0, this.$refs.gameCanvas.width, this.$refs.gameCanvas.height);
          this.drawPlayer();
          this.drawObstacles();
          requestAnimationFrame(this.update);
        }
      },
      keyDownHandler(event) {
        if (event.key === "ArrowLeft") {
          this.leftPressed = true;
        } else if (event.key === "ArrowRight") {
          this.rightPressed = true;
        }
      },
      keyUpHandler(event) {
        if (event.key === "ArrowLeft") {
          this.leftPressed = false;
        } else if (event.key === "ArrowRight") {
          this.rightPressed = false;
        }
      },
      restartGame() {
        this.player.x = 375;
        this.obstacles = [];
        this.gameOver = false;
        this.score = 0;
        this.loading = true;
        setTimeout(() => {
          this.loading = false;
          this.update();
        }, 2000); // Simulando un tiempo de espera antes de reiniciar el juego
      },
    },
    mounted() {
      document.addEventListener("keydown", this.keyDownHandler);
      document.addEventListener("keyup", this.keyUpHandler);
      this.update();
    },
  };
  </script>
  
  <style>
  #app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
    position: relative;
  }
  
  canvas {
    display: block;
    margin: auto;
    border: 1px solid #000;
  }
  
  .game-over {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.8);
    padding: 20px;
    border-radius: 10px;
  }
  
  .game-over h2 {
    margin-bottom: 10px;
  }
  
  .game-over button {
    padding: 10px;
    font-size: 16px;
    cursor: pointer;
  }
  
  .score {
    position: absolute;
    top: 10px;
    right: 10px;
    font-size: 18px;
  }
  
  .loading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  
  .spinner-border {
    margin-bottom: 10px;
  }
  </style>
  