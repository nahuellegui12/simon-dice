let secuenciaMaquina = [];
let secuenciaUsuario = [];

let botonComenzar = document.querySelector(".btn-primary");

botonComenzar.onclick = function comenzar(){
    cambiarEstadoMaquina();
};

function seleccionarCuadroAleatorio(){
    let $cuadros = document.querySelectorAll(".cuadro");
    let cuadroAleatorio = Math.floor(Math.random() * $cuadros.length);
    let cuadroSeleccionado = $cuadros[cuadroAleatorio];

    return cuadroSeleccionado;
};

function cambiarEstadoMaquina(){
    cuadroSeleccionado = seleccionarCuadroAleatorio();
    secuenciaMaquina.push(cuadroSeleccionado);

    secuenciaMaquina.forEach((cuadro, i)=>{
        resaltarCuadro(cuadro, i);
    })

    manejarInputUsuario(e)
};

function resaltarCuadro(cuadro, i){
    setTimeout(()=>{
        cuadro.style.opacity = 1;
    },500 + i * 1000 );

    setTimeout(()=>{
        cuadro.style.opacity = 0.5;
    },1000 + i * 1000);
};


document.querySelector(".cuadro").onclick = function(event){
    console.log(event.target);
}