export class Player {

    constructor(game) {

        this.game = game;

        this.x = 200;
        this.y = 300;

        this.width = 48;
        this.height = 64;

        this.speed = 300;

        this.vx = 0;
        this.vy = 0;

        this.gravity = 1800;
        this.jumpForce = -700;

        this.onGround = false;

    }

    update(dt) {

        this.vx = 0;

        if (this.game.input.left()) {

    this.vx = -this.speed;
    this.direction = -1;

}

if (this.game.input.right()) {

    this.vx = this.speed;
    this.direction = 1;

}

        if (this.game.input.jump() && this.onGround) {

            this.vy = this.jumpForce;

            this.onGround = false;

        }

        this.vy += this.gravity * dt;

        this.x += this.vx * dt;

        this.y += this.vy * dt;

        const ground = 600;

        if (this.y + this.height >= ground) {

            this.y = ground - this.height;

            this.vy = 0;

            this.onGround = true;

        }

    }

   draw(ctx, camera) {

    ctx.save();

    ctx.translate(
        this.x - camera.x + this.width / 2,
        this.y - camera.y
    );

    ctx.scale(this.direction, 1);

    ctx.fillStyle = "#ff69b4";

    ctx.fillRect(
        -this.width / 2,
        0,
        this.width,
        this.height
    );

    ctx.restore();

}

}
