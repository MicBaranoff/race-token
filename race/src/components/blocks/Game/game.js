import * as PIXI from 'pixi.js';

const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

const obstacleTypes = {
  TYPE_CAR: 'typeCar',
  TYPE_OBSTACLE: 'typeObstacle',
};

const obstacles = [
  './images/game/obstacles/1.png',
  './images/game/obstacles/2.png',
  './images/game/obstacles/3.png',
  './images/game/obstacles/4.png',
];
const cars = [
  './images/game/npc/CAR_1.png',
  './images/game/npc/CAR_2.png',
  './images/game/npc/CAR_3.png',
  './images/game/npc/CAR_4.png',
  './images/game/npc/CAR_5.png',
];
const coins = [
  './images/game/coins/COIN_1.png',
  './images/game/coins/COIN_2.png',
  './images/game/coins/COIN_3.png',
  './images/game/coins/COIN_4.png',
  './images/game/coins/COIN_5.png',
  './images/game/coins/COIN_6.png',
  './images/game/coins/COIN_7.png',
  './images/game/coins/COIN_8.png',
  './images/game/coins/COIN_9.png',
];

const lives = 8;
const score = 0;
const elapsedTime = 0;

const speedX = 0;
const trackSpeed = 10;
const moveSpeed = 5;
const carNpcSpeed = 8;

const mobileScale = 0.5;

class Game {
  constructor() {
    this.containcser = undefined;
    this.app = undefined;
    this.loader = null;

    this.playerCar = null;
    this.currentCar = null;
    this.track = null;
    this.trackSideLeft = null;
    this.trackSideRight = null;

    this.isInvincible = false;

    this.isPaused = false;

    this.obstacles = [];
    this.coins = [];

    this.obstacleTextures = [];
    this.carTextures = [];
    this.coinTextures = [];

    this.generateObstaclesTicker = undefined;
    this.generateCoinsTicker = undefined;
    this.increaseDifficultyTicker = undefined;

    PIXI.settings.SCALE_MODE = PIXI.SCALE_MODES.NEAREST;
  }

  init(container, currentCar) {
    this.container = container;
    this.currentCar = currentCar;

    const { width, height } = this.container.getBoundingClientRect();

    this.app = new PIXI.Application({
      width,
      height,
      backgroundColor: 0x2f2741,
      antialias: false,
      resolution: 1,
    });

    this.container.appendChild(this.app.view);

    this.setup();
  }

  loadResources() {
    this.loader = new PIXI.Loader();

    this.loader
      .add('car_1', './images/game/CAR_1.png')
      .add('car_2', './images/game/CAR_2.png')
      .add('car_3', './images/game/CAR_3.png')
      .add('track', './images/game/ROAD.png')
      .add('track-mob', './images/game/ROAD-mob.png')
      .add('side-left', './images/game/LEFT_SIDE.jpg')
      .add('side-left-mob', './images/game/LEFT_SIDE-mob.jpg')
      .add('side-right', './images/game/RIGHT_SIDE.jpg')
      .add('side-right-mob', './images/game/RIGHT_SIDE-mob.jpg');

    obstacles.forEach((url, index) => {
      this.loader.add('obstacle' + (index + 1), url);
    });

    cars.forEach((url, index) => {
      this.loader.add('car' + (index + 1), url);
    });

    coins.forEach((url, index) => {
      this.loader.add('coin' + (index + 1), url);
    });

    this.loader.onProgress.add((loader) => {
      window.dispatchEvent(
        new CustomEvent('game-loading', {
          detail: {
            progress: loader.progress,
          },
        })
      );
    });

    this.loader.load(() => {
      window.dispatchEvent(new CustomEvent('game-loaded'));
    });
  }

  setup() {
    this.obstacleTextures = obstacles.map((_url, index) => {
      return this.loader.resources['obstacle' + (index + 1)].texture;
    });

    this.carTextures = obstacles.map((_url, index) => {
      return this.loader.resources['car' + (index + 1)].texture;
    });

    this.coinTextures = obstacles.map((_url, index) => {
      return this.loader.resources['coin' + (index + 1)].texture;
    });

    this.createTrack();
    this.createPlayerCar();
    this.addControls();

    this.speedX = speedX;
    this.trackSpeed = trackSpeed;
    this.moveSpeed = moveSpeed;
    this.carNpcSpeed = carNpcSpeed;

    this.lives = lives;
    this.score = score;
    this.elapsedTime = elapsedTime;

    // document.addEventListener('visibilitychange', () => {
    //   if (document.hidden) {
    //     this.app.ticker.stop();
    //   } else {
    //     this.app.ticker.start();
    //   }
    // });

    window.dispatchEvent(new CustomEvent('game-init'));
  }

  start() {
    window.dispatchEvent(new CustomEvent('game-start'));

    this.generateObstaclesTicker = setInterval(
      this.generateObstacles.bind(this),
      900
    );
    this.generateCoinsTicker = setInterval(this.generateCoins.bind(this), 1800);
    this.increaseDifficultyTicker = setInterval(
      this.increaseDifficulty.bind(this),
      3000
    );

    this.app.ticker.add(this.gameLoop.bind(this), PIXI.UPDATE_PRIORITY.LOW);
  }

  createTrack() {
    this.track = new PIXI.TilingSprite(
      this.loader.resources[!isMobile ? 'track' : 'track-mob'].texture,
      isMobile ? 145 : 352,
      this.app.view.height
    );
    this.track.x = this.app.view.width / 2 - this.track.width / 2;
    this.track.y = 0;
    this.app.stage.addChild(this.track);

    this.trackSideLeft = new PIXI.TilingSprite(
      this.loader.resources[!isMobile ? 'side-left' : 'side-left-mob'].texture,
      isMobile ? 73 : 230,
      this.app.view.height,
      1
    );
    this.trackSideLeft.x = 0;
    this.trackSideLeft.y = 0;
    this.app.stage.addChild(this.trackSideLeft);

    this.trackSideRight = new PIXI.TilingSprite(
      this.loader.resources[
        !isMobile ? 'side-right' : 'side-right-mob'
      ].texture,
      isMobile ? 73 : 230,
      this.app.view.height
    );
    this.trackSideRight.x = this.app.view.width - this.trackSideRight.width;
    this.trackSideRight.y = 0;
    this.app.stage.addChild(this.trackSideRight);
  }

  createPlayerCar() {
    this.playerCar = new PIXI.Sprite(
      this.loader.resources[this.currentCar].texture
    );
    this.playerCar.x = this.app.view.width / 2 - this.playerCar.width / 2;
    this.playerCar.y = this.app.view.height - this.playerCar.height - 20;
    this.playerCar.zIndex = 10;
    isMobile && this.playerCar.scale.set(mobileScale);
    this.app.stage.addChild(this.playerCar);
  }

  generateObstacles() {
    if (this.isPaused) return;

    let obstacle;
    let positionValid = false;

    while (!positionValid) {
      const isCar = Math.random() > 0.5;

      obstacle = new PIXI.Sprite(
        !isCar
          ? this.obstacleTextures[
              Math.floor(Math.random() * this.obstacleTextures.length)
            ]
          : this.carTextures[
              Math.floor(Math.random() * this.carTextures.length)
            ]
      );

      const minX = this.track.x;
      const maxX = this.track.x + this.track.width - obstacle.width;

      obstacle.x = Math.random() * (maxX - minX) + minX;
      obstacle.y = -obstacle.height;
      isMobile && obstacle.scale.set(mobileScale);
      obstacle.type = isCar
        ? obstacleTypes.TYPE_CAR
        : obstacleTypes.TYPE_OBSTACLE;

      positionValid =
        this.checkNoOverlap(obstacle, this.obstacles) &&
        this.checkNoOverlap(obstacle, this.coins);
    }

    this.obstacles.push(obstacle);
    this.app.stage.addChild(obstacle);
  }

  generateCoins() {
    if (this.isPaused) return;

    let coin;
    let positionValid = false;

    while (!positionValid) {
      coin = new PIXI.Sprite(
        this.coinTextures[Math.floor(Math.random() * this.coinTextures.length)]
      );

      const minX = this.track.x;
      const maxX = this.track.x + this.track.width - coin.width;
      coin.x = Math.random() * (maxX - minX) + minX;
      coin.y = -coin.height;
      isMobile && coin.scale.set(mobileScale);

      positionValid =
        this.checkNoOverlap(coin, this.obstacles) &&
        this.checkNoOverlap(coin, this.coins);
    }

    this.coins.push(coin);
    this.app.stage.addChild(coin);
  }

  updateObstacles(delta) {
    for (let i = 0; i < this.obstacles.length; i++) {
      const obstacle = this.obstacles[i];

      if (obstacle.type === obstacleTypes.TYPE_CAR)
        obstacle.y += (this.carNpcSpeed - Math.random()) * delta;

      if (obstacle.type === obstacleTypes.TYPE_OBSTACLE)
        obstacle.y += this.trackSpeed * delta;

      if (this.isColliding(this.playerCar, obstacle) && !this.isInvincible) {
        this.lives--;

        this.startBlinking();

        window.dispatchEvent(
          new CustomEvent('update-lives', {
            detail: {
              lives: this.lives,
            },
          })
        );

        if (this.lives <= 0) {
          this.endGame();
        }
        this.app.stage.removeChild(obstacle);
        this.obstacles.splice(i, 1);
      }

      if (obstacle.y > this.app.view.height) {
        this.app.stage.removeChild(obstacle);
        this.obstacles.splice(i, 1);
      }
    }
  }

  updateCoins(delta) {
    for (let i = 0; i < this.coins.length; i++) {
      const coin = this.coins[i];

      coin.y += this.carNpcSpeed * delta;

      if (this.isColliding(this.playerCar, coin)) {
        this.score += 10;
        this.app.stage.removeChild(coin);
        this.coins.splice(i, 1);

        this._eventPoints(this.score);
      }

      if (coin.y > this.app.view.height) {
        this.app.stage.removeChild(coin);
        this.coins.splice(i, 1);
      }
    }
  }

  checkNoOverlap(newObject, existingObjects) {
    for (const obj of existingObjects) {
      if (this.isColliding(newObject, obj)) {
        return false;
      }
    }
    return true;
  }

  isColliding(sprite1, sprite2) {
    const bounds1 = sprite1.getBounds();
    const bounds2 = sprite2.getBounds();
    return (
      bounds1.x < bounds2.x + bounds2.width &&
      bounds1.x + bounds1.width > bounds2.x &&
      bounds1.y < bounds2.y + bounds2.height &&
      bounds1.y + bounds1.height > bounds2.y
    );
  }

  startBlinking() {
    this.isInvincible = true;

    let blinkInterval = setInterval(() => {
      this.playerCar.visible = !this.playerCar.visible;
    }, 100);

    setTimeout(() => {
      clearInterval(blinkInterval);
      this.playerCar.visible = true;
      this.isInvincible = false;
    }, 1000);
  }

  endGame() {
    this.app.ticker.stop();

    clearInterval(this.generateObstaclesTicker);
    clearInterval(this.generateCoinsTicker);
    clearInterval(this.increaseDifficultyTicker);

    window.dispatchEvent(
      new CustomEvent('game-end', {
        detail: {
          score: this.score,
        },
      })
    );
  }

  destroy() {
    this.app.ticker.stop();

    clearInterval(this.generateObstaclesTicker);
    clearInterval(this.generateCoinsTicker);
    clearInterval(this.increaseDifficultyTicker);

    this.app.stage.removeChildren();

    this.app.stage.children.forEach((child) => {
      if (child instanceof PIXI.Sprite) {
        child.destroy({ texture: true, baseTexture: true });
      }
    });

    this.app.destroy(true, {
      children: true,
      texture: true,
      baseTexture: true,
    });

    this.container = undefined;
    this.app = undefined;

    this.playerCar = null;
    this.track = null;
    this.trackSideLeft = null;
    this.trackSideRight = null;

    this.isInvincible = false;

    this.isPaused = false;

    this.obstacles = [];
    this.coins = [];

    this.obstacleTextures = [];
    this.carTextures = [];
    this.coinTextures = [];

    this.generateObstaclesTicker = undefined;
    this.generateCoinsTicker = undefined;
    this.increaseDifficultyTicker = undefined;
  }

  togglePause() {
    this.isPaused = !this.isPaused;
    if (this.isPaused) {
      this.app.ticker.stop();
    } else {
      this.app.ticker.start();
    }
  }

  increaseDifficulty() {
    if (this.isPaused) return;

    this.trackSpeed += 0.2;
    this.carNpcSpeed += 0.2;
  }

  addControls() {
    window.addEventListener('keydown', (e) => this.onKeyDown(e));
    window.addEventListener('keyup', (e) => this.onKeyUp(e));
  }

  onKeyDown(e) {
    if (e.key === 'ArrowLeft') this.speedX = -this.moveSpeed;
    if (e.key === 'ArrowRight') this.speedX = this.moveSpeed;
  }

  onKeyUp(e) {
    if (e.key === 'ArrowLeft' || e.key === 'ArrowRight') this.speedX = 0;
  }

  gameLoop(delta) {
    const deltaSpeed = this.trackSpeed * delta;

    this.playerCar.x += this.speedX;

    this.track.tilePosition.y += deltaSpeed;
    this.trackSideLeft.tilePosition.y += deltaSpeed;
    this.trackSideRight.tilePosition.y += deltaSpeed;

    const minX = this.track.x;
    const maxX = this.track.x + this.track.width - this.playerCar.width;

    if (this.playerCar.x < minX) this.playerCar.x = minX;
    if (this.playerCar.x > maxX) this.playerCar.x = maxX;

    this.updateObstacles(delta);

    this.updateCoins(delta);

    this.elapsedTime += this.app.ticker.deltaMS / 1000;
  }

  _eventPoints(points) {
    window.dispatchEvent(
      new CustomEvent('update-points', {
        detail: {
          points,
        },
      })
    );
  }
}

export default Game;
