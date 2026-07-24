export class SceneManager{

    constructor(game){

        this.game=game;

        this.scenes={};

        this.current=null;

    }

    add(name,scene){

        this.scenes[name]=scene;

    }

    change(name){

        if(this.current){

            this.current.exit();

        }

        this.current=this.scenes[name];

        this.current.enter();

    }

    update(dt){

        if(this.current){

            this.current.update(dt);

        }

    }

    render(ctx){

        if(this.current){

            this.current.render(ctx);

        }

    }

}
