export class BootScene{

    constructor(game){

        this.game=game;

    }

    enter(){

        setTimeout(()=>{

            this.game.sceneManager.change("menu");

        },1000);

    }

    exit(){}

    update(){}

    render(ctx){

        ctx.fillStyle="#222";

        ctx.fillRect(0,0,1280,720);

        ctx.fillStyle="white";

        ctx.font="50px Arial";

        ctx.fillText("Loading...",480,360);

    }

}
