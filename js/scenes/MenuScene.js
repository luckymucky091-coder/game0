export class MenuScene{

    constructor(game){

        this.game=game;

    }

    enter(){}

    exit(){}

    update(){}

    render(ctx){

        ctx.fillStyle="#4AA8FF";

        ctx.fillRect(0,0,1280,720);

        ctx.fillStyle="white";

        ctx.font="70px Arial";

        ctx.fillText("Quiz Land P6",360,150);

        ctx.font="32px Arial";

        ctx.fillText("Press SPACE",500,500);

    }

}
