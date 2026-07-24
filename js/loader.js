export class Loader{

    constructor(){

        this.images={};

    }

    loadImage(name,src){

        return new Promise(resolve=>{

            const img=new Image();

            img.src=src;

            img.onload=()=>{

                this.images[name]=img;

                resolve();

            }

        });

    }

}
