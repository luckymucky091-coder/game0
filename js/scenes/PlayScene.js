import { Player } from "../player.js";
import { World } from "../world.js";

export class PlayScene {

    constructor(game) {

        this.game = game;

        this.player = null;
        this.world = null;

    }

    enter() {

        this.world = new World();

        this.player = new Player(this.game);

    }

    exit() {

    }

    update(dt) {

        this.player.update(dt);

        this.game.camera.update(this.player);

    }

    render(ctx) {

        // วาดฉาก
        this.world.draw(ctx, this.game.camera);

        // วาดผู้เล่น
        this.player.draw(ctx, this.game.camera);

        // HUD
        ctx.fillStyle = "white";
        ctx.font = "22px Arial";

        ctx.fillText("Quiz Land P6", 20, 35);
        ctx.fillText("FPS : " + this.game.fps, 20, 65);
        ctx.fillText("X : " + Math.floor(this.player.x), 20, 95);
        ctx.fillText("Y : " + Math.floor(this.player.y), 20, 125);

    }

}
