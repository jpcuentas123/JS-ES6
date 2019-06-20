// function* Generador(){
//     yield 1;
//     yield 2;
//     yield 3;
//     yield 4;
//     yield 5;
// }

// let refGenerador=Generador();

// console.log(refGenerador.next());
// console.log(refGenerador.next());
// console.log(refGenerador.next());
// console.log(refGenerador.next());
// console.log(refGenerador.next());
function* subGenerador(){
    yield "Subgenerador";
    yield "Adios";
}

function* Generador(i){
    yield i;   
    yield i + 5;
    yield* subGenerador();    // Hacer inception
    yield i + 10; 
    yield i + 15; 
    yield i + 20; 
}

const refGenerador=Generador(5);

console.log(refGenerador.next());
console.log(refGenerador.next());
console.log(refGenerador.next());
console.log(refGenerador.next());
console.log(refGenerador.next());