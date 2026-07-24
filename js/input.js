export class Input {

    constructor() {

        this.keys = {};

        // Keyboard
        window.addEventListener("keydown", (e) => {
            this.keys[e.code] = true;
        });

        window.addEventListener("keyup", (e) => {
            this.keys[e.code] = false;
        });

        // เปิดใช้งาน Touch Controls
        this.setupTouch();
    }

    setupTouch() {

        const left = document.getElementById("leftButton");
        const right = document.getElementById("rightButton");
        const jump = document.getElementById("jumpButton");

        // ถ้ายังไม่มีปุ่ม ให้ไม่ทำงาน
        if (!left || !right || !jump) return;

        // ===== Left =====
        left.addEventListener("touchstart", (e) => {
            e.preventDefault();
            this.keys["KeyA"] = true;
            this.keys["ArrowLeft"] = true;
        });

        left.addEventListener("touchend", () => {
            this.keys["KeyA"] = false;
            this.keys["ArrowLeft"] = false;
        });

        // ===== Right =====
        right.addEventListener("touchstart", (e) => {
            e.preventDefault();
            this.keys["KeyD"] = true;
            this.keys["ArrowRight"] = true;
        });

        right.addEventListener("touchend", () => {
            this.keys["KeyD"] = false;
            this.keys["ArrowRight"] = false;
        });

        // ===== Jump =====
        jump.addEventListener("touchstart", (e) => {
            e.preventDefault();
            this.keys["Space"] = true;
            this.keys["ArrowUp"] = true;
            this.keys["KeyW"] = true;
        });

        jump.addEventListener("touchend", () => {
            this.keys["Space"] = false;
            this.keys["ArrowUp"] = false;
            this.keys["KeyW"] = false;
        });

    }

    left() {
        return this.keys["ArrowLeft"] || this.keys["KeyA"];
    }

    right() {
        return this.keys["ArrowRight"] || this.keys["KeyD"];
    }

    jump() {
        return this.keys["Space"] ||
               this.keys["ArrowUp"] ||
               this.keys["KeyW"];
    }

    enter() {
        return this.keys["Enter"];
    }

    esc() {
        return this.keys["Escape"];
    }

}
