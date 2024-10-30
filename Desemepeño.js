function iniciarSesion() {
    const usuario = prompt("Ingrese su nombre de usuario:"); //capturar datos
    const contrasena = prompt("Ingrese su contraseña:");

    
    if (usuario === "admin" && contrasena === "1234") {
        alert("Inicio de sesión exitoso.");
        return true;
    } else {
        alert("Usuario o contraseña incorrectos.");
        return false;
    }
}


function calcularCosto(horaEntrada, horaSalida) {
    const duracion = horaSalida - horaEntrada;

    if (duracion < 2) {
        return duracion * 3000;
    } else if (duracion <= 5) {
        return duracion * 2500;
    } else {
        return duracion * 2000;
    }
}