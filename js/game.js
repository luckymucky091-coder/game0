export class Game{

    constructor(){

        this.canvas=document.getElementById("gameCanvas");

        this.ctx=this.canvas.getContext("2d");

        this.resize();

        window.addEventListener("resize",()=>this.resize());

    }

    resize(){

        this.canvas.width=1280;
        this.canvas.height=720;

    }

    start(){

        requestAnimationFrame(()=>this.loop());

    }

    loop(){

        this.update();

        this.render();

        requestAnimationFrame(()=>this.loop());

    }

    update(){

    }

    render(){

        this.ctx.fillStyle="#6EC6FF";
        this.ctx.fillRect(0,0,this.canvas.width,this.canvas.height);

        this.ctx.fillStyle="white";
        this.ctx.font="40px Arial";

        this.ctx.fillText("Quiz Land P6",40,60);

    }

}
import { SceneManager } from "./scene.js";
import { Camera } from "./camera.js";

import { BootScene } from "./scenes/BootScene.js";
import { MenuScene } from "./scenes/MenuScene.js";
import { PlayScene } from "./scenes/PlayScene.js";

export class Game {

    constructor() {

        this.canvas = document.getElementById("gameCanvas");
        this.ctx = this.canvas.getContext("2d");

        this.canvas.width = 1280;
        this.canvas.height = 720;

        this.lastTime = 0;
        this.deltaTime = 0;

        this.fps = 0;
        this.frames = 0;
        this.timer = 0;

        this.camera = new Camera();

        this.sceneManager = new SceneManager(this);

        this.sceneManager.add("boot", new BootScene(this));
        this.sceneManager.add("menu", new MenuScene(this));
        this.sceneManager.add("play", new PlayScene(this));

    }

    start() {

        this.sceneManager.change("boot");

        requestAnimationFrame((t)=>this.loop(t));

    }

    loop(time){

        this.deltaTime=(time-this.lastTime)/1000;

        this.lastTime=time;

        this.timer+=this.deltaTime;

        this.frames++;

        if(this.timer>=1){

            this.fps=this.frames;

            this.frames=0;

            this.timer=0;

        }

        this.sceneManager.update(this.deltaTime);

        this.sceneManager.render(this.ctx);

        requestAnimationFrame((t)=>this.loop(t));

    }

}
