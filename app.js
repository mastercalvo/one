// Función para encriptar texto
function encriptar() {
    let texto = document.getElementById("texto").value;
    let mensajeEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("mensaje").value = mensajeEncriptado;
    actualizarMensaje(mensajeEncriptado);
}
// Función para encriptar texto
function encriptar() {
    let texto = document.getElementById("texto").value;
    let mensajeEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat");
    document.getElementById("mensaje").value = mensajeEncriptado;
    actualizarMensaje(mensajeEncriptado);
}

// Función para desencriptar texto
function desencriptar() {
    let texto = document.getElementById("texto").value;
    let mensajeDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("mensaje").value = mensajeDesencriptado;
    actualizarMensaje(mensajeDesencriptado);
}

// Función para actualizar el mensaje mostrado en pantalla
function actualizarMensaje(mensaje) {
    let tituloMensaje = document.getElementById("titulo-mensaje");
    let parrafo = document.getElementById("parrafo");
    let muneco = document.getElementById("Muñeco");
    let botonCopiarPegar = document.getElementById("btn-Copiar-Pegar");
    let mensajeTextarea = document.getElementById("mensaje");

    if (mensaje) {
        tituloMensaje.textContent = "Texto encriptado";
        parrafo.textContent = "";
        muneco.style.display = "none";
        mensajeTextarea.style.display = "block"; // Mostrar textarea
        botonCopiarPegar.style.display = "block";
    } else {
        tituloMensaje.textContent = "Ningún mensaje encontrado";
        parrafo.textContent = "Ingresa el texto que deseas encriptar";
        muneco.style.display = "block";
        mensajeTextarea.style.display = "none"; // Ocultar textarea
        botonCopiarPegar.style.display = "none";
    }
}

// Función para copiar el texto encriptado/desencriptado
function copiarTexto() {
    let mensaje = document.getElementById("mensaje");
    mensaje.select();
    document.execCommand("copy");
}
