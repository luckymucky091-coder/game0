export class PlayScene{

    constructor(game){

        this.game=game;

    }

    enter(){}

    exit(){}

    update(){}

    render(ctx){

        ctx.fillStyle="#6BCB77";

        ctx.fillRect(0,0,1280,720);

        ctx.fillStyle="black";

        ctx.font="30px Arial";

        ctx.fillText("Gameplay Scene",30,50);

        ctx.fillText("FPS : "+this.game.fps,30,90);

    }

}
