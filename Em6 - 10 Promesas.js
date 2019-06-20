// let promesa= new Promise((resolve,reject)=>{
//     // if(true){
//     //     resolve('La operación fue un exito');
//     // }else{
//     //     reject('Ocurrió un error');
//     // }
//     console.log('Cargando....');
//     setTimeout(()=>{
//         resolve('Promesa resuelta');
//     },2000)
//     setTimeout(()=>{
//         reject('Error!');
//     },3000)
// })

// promesa
//     .then((response)=>{
//         console.log(`Response: ${response}`)
//     }).catch((error)=>{
//         console.log('Error', error);
//     }) 
//Estados de una promesa solo puede ser uno tiene 3 en ESPERA RESUELTO FALLIDO


// let Promesa1= new Promise((resolve,reject)=>{
//     resolve('Promesa 1 resuelta');
// });
// let Promesa2= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Promesa 2 resuelta');
//     },500)    
// });
// let Promesa3= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Promesa 3 resuelta');
//     },1000)    
// });
// let Promesa4= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Promesa 4 resuelta');
//     },1500)    
// });

// Promise.all([Promesa1,Promesa2,Promesa3,Promesa4])
//     .then((values)=>{
//         console.log("La:",values);
//     }).catch((error)=>{
//         console.log(`Error en: ${error}`);
//     })

// Promise.all ejecuta/verificar promesas intuducidas en modo de arreglo y 
// su estado resuelto solo se ejecutará si todas cumplen con este estado, en caso contrario no.

// let Promesa2= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Promesa 2 resuelta');
//      },1000)    
// });
//  let Promesa3= new Promise((resolve,reject)=>{
//      setTimeout(()=>{
//          reject('Promesa 3');
//      },500)    
//     });
//     let Promesa4= new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve('Promesa 4 resuelta');
//      },1500)    
// });

//  Promise.race([Promesa2,Promesa3,Promesa4])
//      .then((values)=>{
//        console.log("La:",values);
//      }).catch((error)=>{
//          console.log(`Error en: ${error}`);
//      })

//Promise.race su estado depende del estado de la primera función que reciba.

let PrimeraPromesa= new Promise((resolve,reject)=>{
    resolve("Primera promesa");    
});
let SegundaPromesa= new Promise((resolve,reject)=>{
    resolve("Segunda promesa");
});
let UltimaPromesa= new Promise((resolve,reject)=>{
    resolve("Ultima promesa");    
});

PrimeraPromesa.then(response=>{
    console.log(response);    
    return SegundaPromesa;
}).then(response2=>{
    console.log(response2);
    return UltimaPromesa;
}).then(response3=>{
    console.log(response3);
}).catch(error=>console.log("Error en",error));