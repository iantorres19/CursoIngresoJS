/*Enunciado:
Al ingresar una edad solo debemos informar si la persona NO es adolescente.autor:ian torres
*/
function mostrar() {
	//tomo la edad  
	var edad;
	edad = document.getElementById("txtIdEdad").value;

	if (edad < 13) {
		alert("no es adolescente");
	}

}//FIN DE LA FUNCIÓN