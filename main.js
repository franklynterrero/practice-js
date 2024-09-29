// triangulo
document.getElementById("btn").addEventListener("click", function() {
    let base = parseFloat(document.getElementById("base").value);
    let altura = parseFloat(document.getElementById("altura").value);
    if ( isNaN(base) || isNaN(altura)) {
        alert("Inserte un valor");
    }
    let area = (base * altura) / 2;
    document.getElementById("area").innerText = `El area de un triangulo es: ${area}`;
});
// informacion usuario
document.getElementById("btn1").addEventListener("click", function() {
    let nombre = document.getElementById("nombre").value;
    let apellido = document.getElementById("apellido").value;
    let fecha = parseFloat(document.getElementById("edad").value);

    if (isNaN(fecha)) {
        alert("inserta un valor rptm");
    }
    edad = 2024 - fecha;

    document.getElementById("nombre_id").innerText = `Su nombre es: ${nombre}`;
    document.getElementById("apellido_id").innerText = `Su nombre es: ${apellido}`;
    document.getElementById("edad_id").innerText = `Su nombre es: ${edad}`;
});
// meses del año
document.getElementById("btn2").addEventListener("click", function() {
    let meses = parseInt(document.getElementById("meses").value);
    switch (meses) {
        case 1:
            document.getElementById("meses_id").innerText = "Enero";
            break;
        case 2:
            document.getElementById("meses_id").innerText = "Febrero";
            break;
        case 3:
            document.getElementById("meses_id").innerText = "Marzo";
            break;
        case 4:
            document.getElementById("meses_id").innerText = "Abril";
            break;
        case 5:
            document.getElementById("meses_id").innerText = "Mayo";
            break;
        case 6:
            document.getElementById("meses_id").innerText = "Junio";
            break;
        case 7:
            document.getElementById("meses_id").innerText = "Julio";
            break;
        case 8:
            document.getElementById("meses_id").innerText = "Agosto";
            break;
        case 9:
            document.getElementById("meses_id").innerText = "Septiembre";
            break;
        case 10:
            document.getElementById("meses_id").innerText = "Octubre";
            break;
        case 11:
            document.getElementById("meses_id").innerText = "Noviembre";
            break;
        case 12:
            document.getElementById("meses_id").innerText = "Diciembre";
            break;
        default:
            document.getElementById("meses_id").innerText = "Número inválido. Ingrese un número entre 1 y 12.";
    }
});
// tabla de multplicar 
document.getElementById("btn3").addEventListener("click", function() {
    const multipicacion = parseInt(document.getElementById("multiplicar").value);
    for (let i = 0; i <= 13; i++) {
        let tabla =0;
        tabla = multipicacion * i;
        console.log(tabla);
        document.getElementById("multiplicar_id").innerText += ` ${tabla}\n`;
    }
});