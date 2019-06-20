"use strict";

class Persona{
    constructor(nombre="Jorge", edad=21, tipo="Backend Developer"){
        this.nombre=nombre;
        this.edad=edad;
        this.tipo=tipo;
    }

    saludar(){        
        console.log(`Hola mi nombre es: ${this.nombre} y tengo: ${this.edad}`);
        console.log(`Y soy ${this.tipo}`);
    }
    static definicion(){
        
        console.log(`Una persona es un ser humano exepto ${nombre}`);
        
    }
}
class Desarrollador extends Persona{
    constructor(nombre="Abby",edad){
        super(nombre, edad);
    }
    saludoDesarrollador(){
        super.saludar();
        console.log(`Y soy Desarrollador web`);
    }
    /*saludar(){
        console.log("Hola desde sub-clase");
    }*/
}
/*let persona= new Persona();
let desarrollador= new Desarrollador();

persona.saludar();
desarrollador.saludoDesarrollador();
let persona=new Persona("Jorge"); persona.saludar();*/

Desarrollador.prototype.saludar.bind({
    nombre:"Jorge",
    edad:22,
    tipo:"FontEnd Developer"
})();