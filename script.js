const iniciarSesionBtn = document.getElementById('iniciarSesionBtn');
const registrarseBtn = document.getElementById('registrarseBtn');

iniciarSesionBtn.onclick = function() {
    window.location.href = "./LOGIN/index.html";
};

registrarseBtn.onclick = function() {
    window.location.href = "./sign-up/index.html";
};

