export class MenuScene {

    constructor(game) {

        this.game = game;

    }

    enter() {

    }

    exit() {

    }

    update() {

        // กด Space, W, ลูกศรขึ้น หรือ Enter เพื่อเริ่มเกม
        if (this.game.input.jump() || this.game.input.enter()) {

            this.game.sceneManager.change("play");

        }

    }

    render(ctx) {

        ctx.fillStyle = "#4AA8FF";
        ctx.fillRect(0, 0, 1280, 720);

        ctx.fillStyle = "white";
        ctx.font = "70px Arial";
        ctx.fillText("Quiz Land P6", 330, 180);

        ctx.font = "30px Arial";
        ctx.fillText("Press SPACE or ENTER", 420, 320);

        ctx.font = "24px Arial";
        ctx.fillText("Computer Quiz Adventure", 440, 380);

    }

}
