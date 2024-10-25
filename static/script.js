let usuarioCorrecto = "admin";
let contraseñaCorrecta = "admin2024";

function login(){
    //Capturar datos del DOM
    let usuario = document.getElementById("usuario").value;
    let contraseña = document.getElementById("contraseña").value;
    let resultado = document.getElementById("resultado");

    if (usuario == usuarioCorrecto && contraseña == contraseñaCorrecta) {
        resultado.style.color = "green";
        resultado.innerHTML = "Acceso correcto";
    }else{
        resultado.style.color = "red";
        resultado.innerHTML = "Acceso incorrecto"
    }

}