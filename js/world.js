export class World {

    constructor() {

        this.groundY = 600;

    }

    draw(ctx, camera) {

        // ฟ้า

        ctx.fillStyle = "#78c8ff";

        ctx.fillRect(0,0,1280,720);

        // พื้น

        ctx.fillStyle = "#45b649";

        ctx.fillRect(

            -camera.x,
            this.groundY-camera.y,
            5000,
            200

        );

    }

}
