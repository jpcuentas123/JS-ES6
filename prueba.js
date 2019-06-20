    let array=[1,2,3];
    function obtenerParametros(a,b,c){
        console.log(`La suma es ${a+b+c}`);
    }
    obtenerParametros(...array);
    let array1=[1,2,3,"|"],array2=[0, ...array1,4,5,6,7];

    console.log(`El array es: ${array2}`);