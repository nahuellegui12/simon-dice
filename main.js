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
        setTimeout(()=>{
            resaltarCuadro(cuadro, i);
        }, 500)
    })
    

    console.log(secuenciaMaquina);
};

function resaltarCuadro(cuadro, i){ 
    cuadro.style.opacity = 1;

    setTimeout(()=>{
        cuadro.style.opacity = 0.5;
    },500);
};

function desbloquearInputUsuario() {
    document.querySelectorAll('.cuadro').forEach(function($cuadro) {
      $cuadro.onclick = manejarSecuenciaUsuario;
    });
}

function manejarSecuenciaUsuario(e) {
    const $cuadro = e.target;
    resaltarCuadro($cuadro);
    secuenciaUsuario.push($cuadro);
}

  desbloquearInputUsuario();