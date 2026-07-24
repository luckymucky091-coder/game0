import { Player } from "../player.js";
import { World } from "../world.js";

export class PlayScene {

    constructor(game) {

        this.game = game;

    }

    enter() {

        this.world = new World();

        this.player = new Player(this.game);

    }

    exit(){}

    update(dt) {

        this.player.update(dt);

        this.game.camera.update(this.player);

    }

    render(ctx) {

        this.world.draw(ctx,this.game.camera);

        this.player.draw(ctx,this.game.camera);

        ctx.fillStyle="white";

        ctx.font="22px Arial";

        ctx.fillText("FPS : "+this.game.fps,20,35);

    }

}
