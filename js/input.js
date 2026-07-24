export class Input{

    constructor(){

        this.keys={};

        window.addEventListener("keydown",(e)=>{

            this.keys[e.code]=true;

        });

        window.addEventListener("keyup",(e)=>{

            this.keys[e.code]=false;

        });

    }

    left(){

        return this.keys["ArrowLeft"] ||
               this.keys["KeyA"];

    }

    right(){

        return this.keys["ArrowRight"] ||
               this.keys["KeyD"];

    }

    jump(){

        return this.keys["Space"] ||
               this.keys["ArrowUp"] ||
               this.keys["KeyW"];

    }

    enter(){

        return this.keys["Enter"];

    }

    esc(){

        return this.keys["Escape"];

    }

}
