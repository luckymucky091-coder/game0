import { SceneManager } from "./scene.js";
import { Camera } from "./camera.js";
import { Input } from "./input.js";

import { BootScene } from "./scenes/BootScene.js";
import { MenuScene } from "./scenes/MenuScene.js";
import { PlayScene } from "./scenes/PlayScene.js";

export class Game {

    constructor() {

        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = 1280;
        this.canvas.height = 720;

        window.addEventListener("resize", () => this.resize());
        this.resize();

        this.lastTime = 0;
        this.deltaTime = 0;

        this.fps = 0;
        this.frames = 0;
        this.timer = 0;

        this.input = new Input();

        this.camera = new Camera();

        this.sceneManager = new SceneManager(this);

        this.sceneManager.add("boot", new BootScene(this));
        this.sceneManager.add("menu", new MenuScene(this));
        this.sceneManager.add("play", new PlayScene(this));
    }

    resize() {

        this.canvas.width = 1280;
        this.canvas.height = 720;

    }

    start() {

        this.sceneManager.change("boot");

        requestAnimationFrame((time) => this.loop(time));

    }

    loop(time) {

        this.deltaTime = (time - this.lastTime) / 1000;
        this.lastTime = time;

        this.timer += this.deltaTime;
        this.frames++;

        if (this.timer >= 1) {

            this.fps = this.frames;

            this.frames = 0;

            this.timer = 0;

        }

        this.sceneManager.update(this.deltaTime);

        this.sceneManager.render(this.ctx);

        requestAnimationFrame((time) => this.loop(time));

    }

}
