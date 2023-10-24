$(document).ready(function () {
	// Mostrar formulario de registro y ocultar formulario de inicio de sesión
	$("#showRegisterForm").click(function () {
		$("#loginForm").hide();
		$("#registerForm").show();
	});

	// Mostrar formulario de inicio de sesión y ocultar formulario de registro
	$("#showLoginForm").click(function () {
		$("#loginForm").show();
		$("#registerForm").hide();
	});

	// Validación del formulario de inicio de sesión
	$("#loginForm").submit(function (event) {
		var email = $("#email").val();
		var password = $("#password").val();
		// Puedes realizar aquí la validación del formulario, por ejemplo, verificar si el correo y la contraseña son válidos
		// Por ahora, simplemente mostramos un mensaje de alerta
		alert("Inicio de sesión exitoso:\nCorreo Electrónico: " + email + "\nContraseña: " + password);
		event.preventDefault();
	});

	// Validación del formulario de registro
	$("#registerForm").submit(function (event) {
		var registerEmail = $("#registerEmail").val();
		var registerPassword = $("#registerPassword").val();
		var confirmPassword = $("#confirmPassword").val();

		if (registerPassword !== confirmPassword) {
			alert("Las contraseñas no coinciden. Por favor, inténtalo de nuevo.");
		} else {
			// Puedes enviar los datos de registro al servidor o realizar otras acciones aquí
			alert("Registro exitoso:\nCorreo Electrónico: " + registerEmail + "\nContraseña: " + registerPassword);
			// También puedes redirigir al usuario a otra página después del registro
		}

		event.preventDefault();
	});
});