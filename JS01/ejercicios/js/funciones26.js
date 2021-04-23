
function muestra() {
    document.getElementById("adicional").className = "visilble";
    document.getElementsById("enlace").className = "oculto";
    document.getElementsById("enlaceR").className = "visible";
}

function reducir() {
    document.getElementById("adicional").className = "oculto";
    document.getElementsById("enlace").className = "visible";
    document.getElementById("enlaceR").className = "oculto";
}
