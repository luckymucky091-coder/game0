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
