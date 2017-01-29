interface CocheBase{
    getModelo():string;
    getVelocidad():number;
}

class Coche implements CocheBase{
    public color    : string;
    public modelo   : string;
    public velocidad: number;

    constructor(modelo:string = ""){
        this.color = "Blanco";
        this.velocidad = 0;
        if(modelo == "")
            this.modelo = "BMW";
        else this.modelo = modelo;
    }

    public getColor(){
        return this.color;
    }

    public setColor(color: string){
        this.color = color;
        return this;
    }

    public getModelo(){
        return this.modelo;
    }

    public setModelo(modelo:string){
        this.modelo = modelo;
        return this;
    }

    public getVelocidad(){
        return this.velocidad;
    }

    public setVelocidad(velocidad){
        this.velocidad = velocidad;
        return this;
    }

    public acelerar(){
        this.velocidad++;
        return this;
    }

    public frenar(){
        this.velocidad--;
        return this;
    }
}

var coche1 = new Coche();

var coche2 = new Coche();

var coche3 = new Coche();

coche1.setColor('rojo').setModelo('Ferrari').setVelocidad(120.3);
coche2.setColor('azul').setModelo('Poscher').setVelocidad(45);
coche3.setColor('verde').setModelo('Mercedes').setVelocidad(67);

console.log("Color del coche 1 es:"+coche1.getColor()+" del modelo "+coche1.getModelo()+" y va a una velocidad "+coche1.getVelocidad()+" aceleramos "+coche1.acelerar().getVelocidad());
console.log("Color del coche 2 es:"+coche2.getColor()+" del modelo "+coche2.getModelo()+" y va a una velocidad "+coche2.getVelocidad()+" frenamos "+coche2.frenar().getVelocidad());
console.log("Color del coche 3 es:"+coche3.getColor()+" del modelo "+coche3.getModelo()+" y va a una velocidad "+coche3.getVelocidad()+" ambas "+coche3.frenar().acelerar().getVelocidad());