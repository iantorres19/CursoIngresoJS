/*Enunciado:
Al ingresar una edad debemos informar solo si la persona es mayor de edad. autor:ian torres
*/
function mostrar() {
	//tomo la edad  
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	if (edad > 17) {
		alert("mayor de edad");
	}
}//FIN DE LA FUNCIÓN