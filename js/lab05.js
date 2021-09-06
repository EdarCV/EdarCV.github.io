function enviarTexto() {

    var texto = document.getElementById("nombre").value;
    const split = texto.split(' ');
    const token0 = split[0];

    //Separamos el nombre completo
    document.getElementById("apellidoP").value = token0;
    const token1 = split[1];
    document.getElementById("apellidoM").value = token1;
    const token2 = split[2];
    document.getElementById("nombre1").value = token2;
    const token3 = split[3];

    if (token3 != null) {
        document.getElementById("nombre1").value = token2 + " " + token3;
    } else {
        document.getElementById("nombre1").value = token2;

    }

    //Contamos las letras del apellido
    document.getElementById("longitud").value = token0.length;

    //Calculamos la edad
    let fn = document.getElementById("fecha").value;
    let factual = new Date();
    const anoActual = parseInt(factual.getFullYear());
    const mesActual = parseInt(factual.getMonth() + 1);
    const diaActual = parseInt(factual.getDate());

    const anoNac = parseInt(String(fn).substring(0, 4));
    const mesNac = parseInt(String(fn).substring(5, 7));
    const diaNac = parseInt(String(fn).substring(8, 10));

    let edad = anoActual - anoNac;

    if (mesActual < mesNac) {
        edad--;
    } else if (mesActual === mesNac) {
        if (diaActual < diaNac) {
            edad--;
        }
    }

    document.getElementById("edad").value = edad + " años";

    const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio",
        "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
    ];

    document.getElementById("mes").value = monthNames[mesNac - 1];



}

function color() {

    //var azul = document.getElementById('fondo');
    var col = ["red", "blue"];
    if (document.getElementById('fondo').style.background == 'blue') {
        document.getElementById('fondo').style.background = col[0];
        document.getElementById('fondo0').style.background = col[0];
        document.getElementById('fondo1').style.background = col[0];
        document.getElementById('fondo2').style.background = col[0];
        document.getElementById('fondo3').style.background = col[0];

        document.getElementById('rojo1').style.background = col[1];
        document.getElementById('rojo2').style.background = col[1];
        document.getElementById('rojo3').style.background = col[1];
        document.getElementById('rojo4').style.background = col[1];
    } else {
        document.getElementById('fondo').style.background = col[1];
        document.getElementById('fondo0').style.background = col[1];
        document.getElementById('fondo1').style.background = col[1];
        document.getElementById('fondo2').style.background = col[1];
        document.getElementById('fondo3').style.background = col[1];

        document.getElementById('rojo1').style.background = col[0];
        document.getElementById('rojo2').style.background = col[0];
        document.getElementById('rojo3').style.background = col[0];
        document.getElementById('rojo4').style.background = col[0];
    }

}