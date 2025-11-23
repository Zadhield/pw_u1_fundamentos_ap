function guardar() {
	validarCampos();
}

function validarCampos() {
	let nombre = document.getElementById("id_nombre").value;
	let apellido = document.getElementById("id_apellido").value;
	let fecha = document.getElementById("id_fecha").value;
	let email = document.getElementById("id_email").value;
	let password = document.getElementById("id_password").value;


	if (nombre === "") {
		limpiarMensaje();
		mostrarMensaje('Nombre necesario');
		mostrarAsterisco('id_error_nombre');
		return;
	}

	if (email === "") {
		limpiarMensaje();
		mostrarMensaje('Email necesario');
		mostrarAsterisco('id_error_email');
	} else {
        limpiarMensaje(); 
		validarEmail(document.getElementById('id_email').textContent);
	}

}
function mostrarMensaje(msg) {
	let mensaje = document.getElementById('id_msg_error');
	mensaje.innerText = msg;
	mensaje.style.display = "block";
}

function mostrarAsterisco(idElemento) {
	document.getElementById(idElemento).innerText = '*';

}

function limpiarMensaje() {
	let mensaje = document.getElementById('id_msg_error');
	mensaje.innerText = "";
	mensaje.style.display = "none";

	const erroresAstericos = document.querySelectorAll('.error_asterisco');
	erroresAstericos.forEach(e => e.innerText = '');
}

function validarEmail(email) {
	const patron = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return patron.test(email);
}