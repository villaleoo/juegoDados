let numeroUsuario = 0;
let rangoMinimo= 0;
let rangoMaximo = 0;
let deseaContinuar = '';

rangoMinimo= parseInt(prompt('ingrese el rango minimo'));
rangoMaximo= parseInt(prompt('ingrese el rango maximo'));
do {
    numeroUsuario= parseInt(prompt('ingrese el numero a analizar'));
    numeroUsuario >= rangoMinimo && numeroUsuario<= rangoMaximo ? 
        alert(`${numeroUsuario} se encuentra entre ${rangoMinimo} y ${rangoMaximo}`)
    
    :
    
        alert(`${numeroUsuario} NO se encuentra entre ${rangoMinimo} y ${rangoMaximo}`)
    
    deseaContinuar= prompt('desea continuar?').toLowerCase().trim();
    while ( deseaContinuar !== 'no' && deseaContinuar !== 'si') {
        deseaContinuar= prompt('por favor ingrese Si para continuar o NO para finalizar.')
    }
    deseaContinuar === 'no' && alert('gracias por usar el programa.')
} while (deseaContinuar === 'si' || deseaContinuar!== 'no');