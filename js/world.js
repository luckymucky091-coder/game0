export class World {

    constructor() {

        this.width = 5000;

        this.groundY = 600;

    }

    draw(ctx, camera) {

        // ท้องฟ้า

        ctx.fillStyle = "#7fd3ff";

        ctx.fillRect(0,0,1280,720);

        // พื้น

        ctx.fillStyle = "#4CAF50";

        ctx.fillRect(

            -camera.x,

            this.groundY-camera.y,

            this.width,

            200

        );

    }

}
