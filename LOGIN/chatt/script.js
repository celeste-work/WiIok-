document.addEventListener("DOMContentLoaded", () => {
    const sendBtn = document.getElementById("send-btn");
    const userInput = document.getElementById("user-input");
    const chatBody = document.querySelector(".chat-body");
    const addUserBtn = document.getElementById("add-user-btn");
    const closeChatBtn = document.getElementById("close-chat-btn");
    const pantallaInicial = document.getElementById("pantalla-inicial");
    const chatFooter = document.querySelector(".chat-footer");
    const chatHeader = document.querySelector(".chat-header");
    const sidebar = document.querySelector(".sidebar");
    
    const botResponses = {
        "hola": "¡Hola! ¿En qué puedo ayudarte?",
        "como estas": "¡Estoy genial! ¿Y tú?",
        "adios": "¡Adiós! Que tengas un gran día.",
        "default": "Lo siento, no entendí eso. ¿Podrías repetirlo?"
    };

    function addMessage(content, sender) {
        const messageDiv = document.createElement("div");
        messageDiv.classList.add("message", sender, "mb-3", "text-" + (sender === "bot" ? "start" : "end"));
        messageDiv.innerHTML = `
            <div class="message-content p-2 rounded bg-${sender === "bot" ? "warning" : "secondary"} text-white">${content}</div>
            <div class="message-time small text-muted">${new Date().toLocaleTimeString()}</div>
        `;
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight;
    }

    sendBtn.addEventListener("click", () => {
        const userMessage = userInput.value.trim();
        if (userMessage) {
            addMessage(userMessage, "user");
            const botMessage = botResponses[userMessage.toLowerCase()] || botResponses["default"];
            setTimeout(() => addMessage(botMessage, "bot"), 500);
            userInput.value = "";
        }
    });

    userInput.addEventListener("keypress", (e) => {
        if (e.key === "Enter") {
            sendBtn.click();
        }
    });

    addUserBtn.addEventListener("click", () => {
        alert("Función de agregar usuario no implementada.");
    });

    closeChatBtn.addEventListener("click", () => {
        window.location.href = '../../index.html'; 
    });

    const contactos = document.querySelectorAll(".contact-item");

    function mostrarChat(contacto) {
        const nombreContacto = contacto.querySelector("strong").textContent;
        const imagenContacto = contacto.querySelector("img").src;
    
        chatHeader.innerHTML = `
            <div class="d-flex align-items-center w-100 position-relative">
                <a href="#" id="back-link" class="btn btn-secondary">
                    <i class="fa fa-arrow-left"></i>
                </a>
                <img src="${imagenContacto}" alt="${nombreContacto}" class="rounded-circle me-3" style="width: 50px; height: 50px;">
                <strong>${nombreContacto}</strong>
            </div>`;
    
        chatBody.innerHTML = `
            <div class="message bot mb-3">
                <div class="message-content p-2 rounded bg-warning text-white">
                    Hola, soy ${nombreContacto} ¿Cómo estás?.
                </div>
                <div class="message-time text-start small text-muted">${new Date().toLocaleTimeString()}</div>
            </div>`;
    
        const backLink = document.getElementById("back-link");
        backLink.addEventListener("click", (e) => {
            e.preventDefault();
            mostrarPantallaInicial();
        });
    
        pantallaInicial.classList.add("d-none");
        chatBody.classList.remove("d-none");
        chatFooter.classList.remove("d-none");
        sidebar.classList.add("hidden");
    }
    
    function mostrarPantallaInicial() {
        pantallaInicial.classList.remove("d-none");
        chatBody.classList.add("d-none");
        chatFooter.classList.add("d-none");
        sidebar.classList.remove("hidden");
    }
    
    contactos.forEach(contacto => {
        contacto.addEventListener("click", () => {
            contactos.forEach(c => c.classList.remove("selected"));
            contacto.classList.add("selected");
            mostrarChat(contacto);
        });
    });
    
    mostrarPantallaInicial();

    window.addEventListener("resize", () => {
        if (window.innerWidth > 800) {
            mostrarPantallaInicial();
        }
    });

    document.addEventListener("DOMContentLoaded", () => {
        const estados = ["online", "offline"];
        contactos.forEach((contacto, index) => {
            const estadoDeConexion = contacto.querySelector(".estado-de-conexion");
            const estado = estados[index % estados.length];
            estadoDeConexion.classList.add(estado);
        });
    });
});
