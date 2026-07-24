export class World {

    constructor() {

        this.width = 5000;
        this.groundY = 600;

        this.clouds = [
            {x:150,y:80},
            {x:500,y:120},
            {x:900,y:70},
            {x:1400,y:100},
            {x:2200,y:60},
            {x:3200,y:110},
            {x:4100,y:90}
        ];

        this.trees = [
            350,700,1100,1650,2100,
            2600,3150,3700,4300
        ];

        this.rocks = [
            550,1450,2450,3450,4450
        ];

    }

    draw(ctx,camera){

        // ท้องฟ้า
        ctx.fillStyle="#79d5ff";
        ctx.fillRect(0,0,1280,720);

        // เมฆ
        ctx.fillStyle="white";

        this.clouds.forEach(c=>{

            ctx.beginPath();

            ctx.arc(c.x-camera.x*0.3,c.y,25,0,Math.PI*2);
            ctx.arc(c.x+25-camera.x*0.3,c.y-10,25,0,Math.PI*2);
            ctx.arc(c.x+55-camera.x*0.3,c.y,25,0,Math.PI*2);

            ctx.fill();

        });

        // พื้นดิน
        ctx.fillStyle="#6B4423";
        ctx.fillRect(-camera.x,this.groundY-camera.y,this.width,200);

        // หญ้า
        ctx.fillStyle="#39b54a";
        ctx.fillRect(-camera.x,this.groundY-12-camera.y,this.width,12);

        // ต้นไม้
        this.trees.forEach(x=>{

            ctx.fillStyle="#7b4a20";
            ctx.fillRect(x-camera.x,this.groundY-90,20,80);

            ctx.fillStyle="#2fa84f";

            ctx.beginPath();
            ctx.arc(x+10-camera.x,this.groundY-110,40,0,Math.PI*2);
            ctx.fill();

        });

        // ก้อนหิน
        ctx.fillStyle="#888";

        this.rocks.forEach(x=>{

            ctx.fillRect(x-camera.x,this.groundY-25,35,25);

        });

        // โรงเรียน
        const sx=this.width-350-camera.x;

        ctx.fillStyle="#ffd75e";
        ctx.fillRect(sx,this.groundY-170,220,170);

        ctx.fillStyle="#c0392b";
        ctx.beginPath();
        ctx.moveTo(sx-20,this.groundY-170);
        ctx.lineTo(sx+110,this.groundY-250);
        ctx.lineTo(sx+240,this.groundY-170);
        ctx.fill();

        ctx.fillStyle="#654321";
        ctx.fillRect(sx+90,this.groundY-70,40,70);

    }

}
