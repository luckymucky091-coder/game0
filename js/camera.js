export class Camera{

    constructor(){

        this.x=0;

        this.y=0;

        this.zoom=1;

    }

    follow(target){

        this.x=target.x-640;

        this.y=target.y-360;

    }

}
