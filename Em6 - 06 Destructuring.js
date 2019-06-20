"use strict";
let telefono={
    marca:'Huawei',
    color:'Negro',
   // Pantalla: 5.5
}
/*
let {marca,color,Pantalla}=telefono;
let [a,b]=[1,2];
console.log(marca,color,Pantalla);
console.log(a,b);*/

function checkPhone({marca,color,Pantalla=5.0}){
    console.log(`
    ${marca}
    ${color}
    ${Pantalla}
    `)
}
checkPhone(telefono);