let numeroUsuario = 0;
let rangoMinimo= 0;
let rangoMaximo = 0;

numeroUsuario= parseInt(prompt('ingrese un numero'));
rangoMinimo= parseInt(prompt('ingrese el rango minimo'));
rangoMaximo= parseInt(prompt('ingrese el rango maximo'));

if (numeroUsuario >= rangoMinimo && numeroUsuario<= rangoMaximo) {
    alert(`${numeroUsuario} se encuentra entre ${rangoMinimo} y ${rangoMaximo}`);
}else{
    alert(`${numeroUsuario} NO se encuentra entre ${rangoMinimo} y ${rangoMaximo}`)
}