let primerDado= 0;
let segundoDado= 0;
let partida = document.getElementById('contenedorEnfrentamiento');
let jugadoresTotales=[];
let resultadosCantidad=[];
let carasDelDado= [
    'https://w7.pngwing.com/pngs/425/86/png-transparent-dice-game-kismet-four-sided-die-dice-1-angle-face-rectangle-thumbnail.png',
    'https://w7.pngwing.com/pngs/379/372/png-transparent-dice-bunco-four-sided-die-dominoes-number-two-game-white-text-thumbnail.png',
    'https://w7.pngwing.com/pngs/364/245/png-transparent-dice-set-game-3-game-white-text-thumbnail.png',
    'https://w7.pngwing.com/pngs/553/231/png-transparent-dice-dominoes-bunco-dice-face-game-white-face-thumbnail.png',
    'https://w7.pngwing.com/pngs/207/634/png-transparent-circle-dice-rectangle-talk-rectangle-dice-circle-thumbnail.png',
    'https://www.lawebdelprogramador.com/usr/147000/147685/527560a9ddd30-dado6.png'
]
// let nuevoParrafo = document.createElement('p');
// let textoParrafo = document.createTextNode(``);

function numeroRandom(min , max){
    primerDado= parseInt(Math.random() * (max - min) + min);
    segundoDado = parseInt(Math.random() * (max - min) + min);
    return primerDado + segundoDado;
    
}

function guardarNombres (){
    partida.innerHTML='';
    let jugador1=document.getElementById('jugador1').value;
    let jugador2=document.getElementById('jugador2').value;
    jugadoresTotales.push(jugador1);
    jugadoresTotales.push(jugador2);
    let indexJugador1= jugadoresTotales.indexOf(jugador1);
    let indexJugador2=jugadoresTotales.indexOf(jugador2);
   
    if(jugadoresTotales.length !== 0){
        partida.innerHTML += `<p class='text-center'>${jugadoresTotales[indexJugador1]} VS. ${jugadoresTotales[indexJugador2]}</p>
                                <button id='inicioJuego' onClick=comenzarJuego(${indexJugador1})>Comenzar</button>`;
       
    };
    
}

function comenzarJuego (indexJugadores){
    let turno= document.getElementById('contenedorTurno');
    let juego = document.getElementById('contenedorJuego');
    let resultados = document.getElementById('contenedorResultados');
    let inicio = document.getElementById('inicioJuego');
    let cantidadDeResultados= resultadosCantidad.length;
    inicio.style.display= 'none';

    turno.innerHTML='';
    turno.innerHTML += `<p>turno de ${jugadoresTotales[indexJugadores]}</p>`
    
    juego.innerHTML='';
    juego.innerHTML += `<img src='https://www.gifsanimados.org/data/media/710/dado-imagen-animada-0104.gif'/>`
    
    resultadosCantidad.push(numeroRandom(1,7));
        
    setTimeout(() => {
        juego.innerHTML='';
        if (primerDado) {
            juego.innerHTML+= `<img src=${carasDelDado[primerDado - 1]} />`
        }
        if(segundoDado){
            juego.innerHTML+=  `<img src=${carasDelDado[segundoDado - 1]} />`
        }

        if (resultadosCantidad.length < 2) {
            juego.innerHTML +=`<button onClick=comenzarJuego(${cantidadDeResultados + 1})>siguiente jugador</button>`
        }
        resultados.innerHTML += `<p class='w-100 px-5'>${jugadoresTotales[indexJugadores]} obtuvo un ${primerDado} y un ${segundoDado} , total ${resultadosCantidad[indexJugadores]}</p>`; 
        if (resultadosCantidad.length === 2) {
            if (resultadosCantidad[0]>resultadosCantidad[1]) {
                resultados.innerHTML += `<h2>${jugadoresTotales[0]} GANO EL JUEGO 😝</h2>`
            }else if (resultadosCantidad[1]> resultadosCantidad[0]){
                resultados.innerHTML += `<h2>${jugadoresTotales[1]} GANO EL JUEGO 😝</h2>`
            }else{
                resultados.innerHTML += `<h2>EMPATE 🤣</h2>`
            }
        }    
    }, 2000);
    
       
}

