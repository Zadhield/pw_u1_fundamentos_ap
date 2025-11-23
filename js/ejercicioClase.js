function guardar() {
	validarCampos();
}


function validarCampos() {
	let nombre = document.getElementById("id_nombre").value;
	let tarjeta = document.getElementById("id_card").value;
	let fecha = document.getElementById("id_fecha").value;
	let cvv = document.getElementById("id_cvv").value;


	if (nombre === "") {
		limpiarMensaje();
		mostrarMensaje('Nombre necesario');
		mostrarAsterisco('id_error_nombre');
		return;
	}

	if (tarjeta === "") {
		limpiarMensaje();
		mostrarMensaje('Número de Tarjeta Necesario');
		mostrarAsterisco('id_error_card');
		return;
	}

	if (cvv === "") {
		limpiarMensaje();
		mostrarMensaje('CVV Necesario');
		mostrarAsterisco('id_error_cvv');
		return;
	}


}

function mostrarAsterisco(idElemento) {
	document.getElementById(idElemento).innerText = '*';

}

function mostrarMensaje(msg) {
	let mensaje = document.getElementById('id_msg_error');
	mensaje.innerText = msg;
	mensaje.style.display = "block";
}

function limpiarMensaje() {
	let mensaje = document.getElementById('id_msg_error');
	mensaje.innerText = "";
	mensaje.style.display = "none";

	const erroresAstericos = document.querySelectorAll('.error_asterisco');
	erroresAstericos.forEach(e => e.innerText = '');
}