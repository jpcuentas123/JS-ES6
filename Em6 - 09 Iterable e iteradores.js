/*let iterable={
    [Symbol.iterator]: iteradorObject
}
let iteradorObject={
    next = {
        value:"sting",
        done
    }
}*/

let colores = ['Amarillo',"Azul","Rojo"];

function iterador(array){
    let count=0;
    return {
        next : function(){
            if(count < array.length)
            return {value:array[count++], done: false}
            else
            return {value:"undefaind",done:true}
        }
    }
}

let refIterador=iterador(colores);

console.log(refIterador.next());
console.log(refIterador.next());
console.log(refIterador.next());
console.log(refIterador.next());
console.log(refIterador.next());
