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

document.addEventListener("DOMContentLoaded", function () {
  console.log("Ancho de la pantalla al cargar:", window.innerWidth);

  function agregarFlecha() {
    let sectionLeft = document.querySelector('.section-left');

    let flechaExistente = document.querySelector('.flecha');
    if (flechaExistente) {
      flechaExistente.remove();
    }

    if (window.innerWidth <= 767) {  
      console.log("Agregando flecha porque el ancho es menor o igual a 767px");

      let flecha = document.createElement('i');
      flecha.classList.add("fa", "fa-angle-double-down", "flecha");

      if (sectionLeft) {
        sectionLeft.appendChild(flecha);
        console.log("Flecha agregada correctamente");
        
        // no funciona
        // flecha.addEventListener("click", function () {
        //   console.log("¡Flecha clickeada! Intentando desplazar...");
        //   let loginSection = document.getElementById("loginID");
        //   if (loginSection) {
        //     console.log("Sección encontrada, moviéndose...");
        //     window.scrollTo({
        //       top: loginSection.offsetTop - 100,
        //       behavior: "smooth"
        //     });
        //   } else {
        //     console.log("No se encontró la sección con id 'loginID'");
        //   }
        // });
         
      }
    }
  }

  agregarFlecha();
  window.addEventListener("resize", agregarFlecha);
});


  