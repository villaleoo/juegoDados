let numeroUsuario=0;
let arrayDeNumerosPares = []
let arrayDeNumeros= []

numeroUsuario= parseInt(prompt('ingrese un numero'));


for (let index = numeroUsuario;index > (-1); index--) {
    arrayDeNumeros.push(index)
}

function cantidadDeNumerosPares (array){
    array.forEach(element => {
        if (element%2 === 0) {
            arrayDeNumerosPares.push(element);
        }
    });
console.log(arrayDeNumerosPares.length);
}
cantidadDeNumerosPares(arrayDeNumeros)