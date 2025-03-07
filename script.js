const iniciarSesionBtn = document.getElementById('iniciarSesionBtn');
const registrarseBtn = document.getElementById('registrarseBtn');

iniciarSesionBtn.onclick = function() {
    // alert("Iniciando sesión...");
    window.location.href = "./LOGIN/index.html";
};

registrarseBtn.onclick = function() {
    // alert("Redirigiendo a la página de registro...");
    window.location.href = "./sign-up/index.html";
};

