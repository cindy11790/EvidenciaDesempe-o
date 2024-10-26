function iniciarSesion() {
    const usuario = prompt("Ingrese su nombre de usuario:");
    const contrasena = prompt("Ingrese su contraseña:");

    
    if (usuario === "admin" && contrasena === "1234") {
        alert("Inicio de sesión exitoso.");
        return true;
    } else {
        alert("Usuario o contraseña incorrectos.");
        return false;
    }
}
