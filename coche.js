var Coche = (function () {
    function Coche(modelo) {
        if (modelo === void 0) { modelo = ""; }
        this.color = "Blanco";
        this.velocidad = 0;
        if (modelo == "")
            this.modelo = "BMW";
        else
            this.modelo = modelo;
    }
    Coche.prototype.getColor = function () {
        return this.color;
    };
    Coche.prototype.setColor = function (color) {
        this.color = color;
        return this;
    };
    Coche.prototype.getModelo = function () {
        return this.modelo;
    };
    Coche.prototype.setModelo = function (modelo) {
        this.modelo = modelo;
        return this;
    };
    Coche.prototype.getVelocidad = function () {
        return this.velocidad;
    };
    Coche.prototype.setVelocidad = function (velocidad) {
        this.velocidad = velocidad;
        return this;
    };
    Coche.prototype.acelerar = function () {
        this.velocidad++;
        return this;
    };
    Coche.prototype.frenar = function () {
        this.velocidad--;
        return this;
    };
    return Coche;
}());
var coche1 = new Coche();
var coche2 = new Coche();
var coche3 = new Coche();
coche1.setColor('rojo').setModelo('Ferrari').setVelocidad(120.3);
coche2.setColor('azul').setModelo('Poscher').setVelocidad(45);
coche3.setColor('verde').setModelo('Mercedes').setVelocidad(67);
console.log("Color del coche 1 es:" + coche1.getColor() + " del modelo " + coche1.getModelo() + " y va a una velocidad " + coche1.getVelocidad() + " aceleramos " + coche1.acelerar().getVelocidad());
console.log("Color del coche 2 es:" + coche2.getColor() + " del modelo " + coche2.getModelo() + " y va a una velocidad " + coche2.getVelocidad() + " frenamos " + coche2.frenar().getVelocidad());
console.log("Color del coche 3 es:" + coche3.getColor() + " del modelo " + coche3.getModelo() + " y va a una velocidad " + coche3.getVelocidad() + " ambas " + coche3.frenar().acelerar().getVelocidad());
