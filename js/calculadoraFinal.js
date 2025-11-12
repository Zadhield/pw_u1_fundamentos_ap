let expresion = ""; 

function mostrarDisplay(valor) {
    const display = document.getElementById('display');
    expresion += valor;               // concatenamos lo que el usuario escribe
    display.innerText = expresion;    // actualizamos la pantalla
}

function borrarUltimo() {
    expresion = expresion.slice(0, -1);       // quitamos el último carácter
    document.getElementById('display').innerText = expresion;
}

function eliminarElemento(id) {
    expresion = "";                           // limpiamos todo
    document.getElementById(id).innerText = "";
}

function calcularResultado() {
    const display = document.getElementById('display');
    try {
        const operacion = expresion.match(/(\d+(\.\d+)?|[+\-*/])/g);

        if (!operacion) {
            display.innerText = "Error";
            return;
        }

        let resultado = parseFloat(operacion[0]);

        for (let i = 1; i < operacion.length; i += 2) {
            const operador = operacion[i];
            const numero = parseFloat(operacion[i + 1]);

            switch (operador) {
                case '+': resultado += numero; break;
                case '-': resultado -= numero; break;
                case '*': resultado *= numero; break;
                case '/': resultado /= numero; break;
            }
        }

        display.innerText = resultado;
        expresion = resultado.toString(); // para continuar operando con el resultado
    } catch (e) {
        display.innerText = "Error";
    }
}
