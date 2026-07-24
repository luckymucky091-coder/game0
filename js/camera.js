export class Camera {

    constructor() {

        this.x = 0;
        this.y = 0;

    }

    update(player) {

        this.x = player.x - 640 + player.width/2;

        if(this.x < 0){

            this.x = 0;

        }

        this.y = 0;

    }

}
