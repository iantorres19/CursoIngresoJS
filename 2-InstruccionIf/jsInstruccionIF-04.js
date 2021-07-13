/*Enunciado:
Al ingresar una edad debemos informar si la persona es adolescente, edad entre 13 y 17 años (inclusive) .autor:ian torres
*/
function mostrar() {
	//tomo la edad  
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	if (edad >= 13 && edad <= 17) {
		alert("persona adolecente");
	}
}//FIN DE LA FUNCIÓN