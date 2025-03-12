const registrarseBtn = document.getElementById('registrarseBtn');

const usuarioValido = {
    nombre: "Fulanodetal@gmail.com",
    contraseña: "12345678"
  };

  function login() {
    const usuario = document.getElementById("nombre").value;
    const contraseña = document.getElementById("contraseña").value;
   
    if (usuario === usuarioValido.nombre && contraseña === usuarioValido.contraseña) {
      alert("¡Bienvenido!");
      window.location.href = "./chatt/index.html";
    } else {
      alert("Usuario o contraseña incorrectos.");
    }
  }

registrarseBtn.onclick = function() {
  window.location.href = "../sign-up/index.html";
};

  