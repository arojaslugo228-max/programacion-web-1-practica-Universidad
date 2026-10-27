const botonModo = document.getElementById("BTNmodoOscuro");

botonModo.addEventListener("click", function() {
    document.body.classList.toggle("modo-oscuro");

    if (document.body.classList.contains("modo-oscuro")) {
        botonModo.textContent = "Cambiar a modo claro";
    } else {
        botonModo.textContent = "Cambiar a modo oscuro";
    }
});