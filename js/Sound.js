/* Clase para el sonido */

function Sound(src) {
    this.sound = document.createElement("audio");
    this.sound.src = src;
    this.sound.setAttribute("preload", "auto");
    this.sound.setAttribute("controls", "volume");
    this.sound.volume = 0.1;
    this.sound.style.display = "none";

    document.body.appendChild(this.sound);

    this.play = function () {
        this.sound.play();
    }
    this.stop = function () {
        this.sound.pause();
    }   
}