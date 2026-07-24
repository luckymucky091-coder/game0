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
setupTouch(){

const left=document.getElementById("leftButton");

const right=document.getElementById("rightButton");

const jump=document.getElementById("jumpButton");

left.addEventListener("touchstart",()=>{

this.keys["KeyA"]=true;

});

left.addEventListener("touchend",()=>{

this.keys["KeyA"]=false;

});

right.addEventListener("touchstart",()=>{

this.keys["KeyD"]=true;

});

right.addEventListener("touchend",()=>{

this.keys["KeyD"]=false;

});

jump.addEventListener("touchstart",()=>{

this.keys["Space"]=true;

});

jump.addEventListener("touchend",()=>{

this.keys["Space"]=false;

});

}
