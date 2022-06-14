let primerDado= 0;
let segundoDado= 0;
let resultado1= 0;
let resultado2 =0;
let jugador1='';
let jugador2='';
let player1 = document.getElementById('jugador1')
let player2 = document.getElementById('jugador2')
let partida = document.getElementById('contenedorEnfrentamiento')


function numeroRandom(min , max){
    primerDado= parseInt(Math.random() * (max - min) + min);
    segundoDado = parseInt(Math.random() * (max - min) + min);
    console.log(primerDado);
    console.log(segundoDado);
    return primerDado + segundoDado
   
}

function ganador (totalDadosJugador1 ,totalDadosJugador2){
    if (totalDadosJugador1 > totalDadosJugador2){
        alert(`${jugador1} gano el juego! hizo ${totalDadosJugador1} puntos mientras que, ${jugador2} ${resultado2} `)
    }else if(totalDadosJugador1 < totalDadosJugador2){
        alert(`${jugador2} gano el juego! hizo ${totalDadosJugador2} puntos mientras que, ${jugador1} ${resultado1} `)
    }else {
        alert('empate :O')
    }
}




player1.addEventListener('change', (e)=>{
    jugador1= e.target.value;
    console.log(jugador1);
    if (jugador1 !== ''){
        partida.innerHTML = `${jugador1} vs. ${jugador2}`;
    }
})
player2.addEventListener('change',(e)=>{
    jugador2= e.target.value;
    console.log(jugador2);
    if (jugador2 !== ''){
        partida.innerHTML = `${jugador1} vs. ${jugador2}`;
    }
})










// jugador1= prompt('ingrese el nombre del primer jugador').toLowerCase().trim();
// jugador2= prompt('ingrese el nombre del segundo jugador').toLowerCase().trim()

// alert(`comienza el juego, primer tiro: ${jugador1}`);
// resultado1=numeroRandom(1,7);
// alert(`${jugador1} obtuvo ${primerDado} en su primer dado y ${segundoDado} en su segundo dado, total: ${resultado1}.`);
// resultado2=numeroRandom(1,7);
// alert(`${jugador2} obtuvo ${primerDado} en su primer dado y ${segundoDado} en su segundo dado, total: ${resultado2}`);
// alert(`${ganador(resultado1,resultado2)}`)

