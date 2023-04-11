/*e --> enter
o --> ober
i --> imes 
a --> ai
u --> ufat*/

function encriptar() {
    var texto = document.getElementById("input_text").value.toLowerCase();
    // i es para que afecte tanto mayusculas como minusculas -- e E
    // g es para toda la lines u oracion
    // n es para que afece multiples lineas o parrafos
    var txtCifrado = texto.replace(/e/igm,"enter");
    var txtCifrado = txtCifrado.replace(/o/igm,"over");
    var txtCifrado = txtCifrado.replace(/i/igm,"imes");
    var txtCifrado = txtCifrado.replace(/a/igm,"ai");
    var txtCifrado = txtCifrado.replace(/u/igm,"ufat");

    document.getElementById("img_left").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function desencriptar() {
    var texto = document.getElementById("input_text").value.toLowerCase();
    // i es para que afecte tanto mayusculas como minusculas -- e E
    // g es para toda la lines u oracion
    // n es para que afece multiples lineas o parrafos
    var txtCifrado = texto.replace(/enter/igm,"e");
    var txtCifrado = txtCifrado.replace(/over/igm,"o");
    var txtCifrado = txtCifrado.replace(/imes/igm,"i");
    var txtCifrado = txtCifrado.replace(/ai/igm,"a");
    var txtCifrado = txtCifrado.replace(/ufat/igm,"u");

    document.getElementById("img_left").style.display = "none";
    document.getElementById("texto").style.display = "none";
    document.getElementById("texto2").innerHTML = txtCifrado;
    document.getElementById("copiar").style.display = "show";
    document.getElementById("copiar").style.display = "inherit";
}

function copiar() {
    var contenido = document.querySelector("#texto2");
    contenido.select();
    document.designMode("cut");
    alert("¡Se copió!");
}
