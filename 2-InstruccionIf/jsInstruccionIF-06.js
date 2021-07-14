/*Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad (mas de 18 años) o adolescente (entre 13 y 17 años) o niño (menor a 13 años).autor: ian torres
*/
function mostrar() {
	//tomo la edad
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	if (edad >= 18) {
		alert("mayor de edad");
	}
	else if(edad >= 13 && edad <= 17)
	{

		alert("adolecente");

	}
	if (edad < 13) {
		alert("niño");
	}
	//FIN DE LA FUNCIÓN
}