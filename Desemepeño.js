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
function main() {
    if (!iniciarSesion()) {
        return;
    }
}
let continuar = true;

while (continuar) {
    let horaEntrada = parseFloat(prompt("Ingrese la hora de entrada (en formato 24h):"));
    let horaSalida = parseFloat(prompt("Ingrese la hora de salida (en formato 24h):"));

    if (isNaN(horaEntrada) || isNaN(horaSalida) || horaEntrada < 0 || horaEntrada >= 24 || horaSalida <= horaEntrada || horaSalida > 24) {
        alert("Hora de entrada debe estar entre 0 y 24, y la hora de salida debe ser mayor que la hora de entrada.");
        continue; 
    }
    const costo = calcularCosto(horaEntrada, horaSalida);
    alert(`El costo total por el estacionamiento es: $${costo}`);

    const respuesta = prompt("¿Desea calcular el costo para otro vehículo? (s/n):");
    continuar = respuesta.toLowerCase() === 's';
}



main();
