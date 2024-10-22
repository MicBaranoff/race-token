import * as PIXI from 'pixi.js';

class Game {
  constructor({ container }) {
    this.container = container;
    this.app = undefined;

    this.playerCar = null;
    this.track = null;

    this.trackSideLeft = null;
    this.trackSideRight = null;
    this.speedX = 0;
    this.trackSpeed = 5;
    this.moveSpeed = 5;
  }

  init() {
    this.loadResources();

    const { width, height } = this.container.getBoundingClientRect();

    this.app = new PIXI.Application({
      width,
      height,
      backgroundColor: 0x1099bb,
    });

    console.log(this.app);
    this.container.appendChild(this.app.view);
  }

  loadResources() {
    PIXI.Loader.shared
      .add('car', './images/game/CAR_1.png')
      .add('track', './images/game/ROAD.png')
      .add('side-left', './images/game/LEFT_SIDE.png')
      .add('side-right', './images/game/RIGHT_SIDE.png')
      .load(() => this.setup());
  }

  // Настройка сцены и игровых объектов
  setup() {
    this.createTrack();
    this.createPlayerCar();
    this.addControls();

    // Запуск игрового цикла
    this.app.ticker.add(() => this.gameLoop());
  }

  // Создание фона-трассы
  createTrack() {
    this.track = new PIXI.TilingSprite(
      PIXI.Loader.shared.resources['track'].texture,
      450,
      this.app.view.height
    );
    this.track.x = this.app.view.width / 2 - this.track.width / 2;
    this.track.y = 0;
    this.app.stage.addChild(this.track);

    // Левый край трассы
    this.trackSideLeft = new PIXI.TilingSprite(
      PIXI.Loader.shared.resources['side-left'].texture,
      238,
      this.app.view.height,
      1
    );
    this.trackSideLeft.x = 0;
    this.trackSideLeft.y = 0;
    this.app.stage.addChild(this.trackSideLeft);

    // Правый край трассы
    this.trackSideRight = new PIXI.TilingSprite(
      PIXI.Loader.shared.resources['side-right'].texture,
      238,
      this.app.view.height
    );
    this.trackSideRight.x = this.app.view.width - this.trackSideRight.width;
    this.trackSideRight.y = 0;
    this.app.stage.addChild(this.trackSideRight);
  }

  // Создание машины игрока
  createPlayerCar() {
    this.playerCar = new PIXI.Sprite(
      PIXI.Loader.shared.resources['car'].texture
    );
    this.playerCar.x = this.app.view.width / 2 - this.playerCar.width / 2;
    this.playerCar.y = this.app.view.height - this.playerCar.height - 20;
    this.app.stage.addChild(this.playerCar);
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

  gameLoop() {
    this.playerCar.x += this.speedX;

    this.track.tilePosition.y += this.trackSpeed;
    this.trackSideLeft.tilePosition.y += this.trackSpeed;
    this.trackSideRight.tilePosition.y += this.trackSpeed;

    const minX = this.track.x;
    const maxX = this.track.x + this.track.width - this.playerCar.width;

    // Ограничение выхода за границы экрана
    if (this.playerCar.x < minX) this.playerCar.x = minX;
    if (this.playerCar.x > maxX) this.playerCar.x = maxX;
  }
}

export default Game;
