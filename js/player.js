export class Player {

    constructor(game) {

        this.game = game;

        this.width = 48;
        this.height = 64;

        this.x = 200;
        this.y = 200;

        this.vx = 0;
        this.vy = 0;

        this.speed = 320;
        this.jumpForce = -700;
        this.gravity = 1800;

        this.onGround = false;
    }

    update(dt) {

        this.vx = 0;

        if (this.game.input.left()) {

            this.vx = -this.speed;

        }

        if (this.game.input.right()) {

            this.vx = this.speed;

        }

        if (this.game.input.jump() && this.onGround) {

            this.vy = this.jumpForce;

            this.onGround = false;

        }

        this.vy += this.gravity * dt;

        this.x += this.vx * dt;

        this.y += this.vy * dt;

        // ชนพื้น

        const ground = 600;

        if (this.y + this.height >= ground) {

            this.y = ground - this.height;

            this.vy = 0;

            this.onGround = true;

        }

    }

    draw(ctx, camera) {

        ctx.fillStyle = "#ff66aa";

        ctx.fillRect(

            this.x - camera.x,
            this.y - camera.y,
            this.width,
            this.height

        );

    }

}
