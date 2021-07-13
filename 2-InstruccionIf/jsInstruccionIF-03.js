/*Enunciado:
Al ingresar una edad debemos informar si la persona es mayor de edad, sino informar que es un menor de edad.autor: ian torres.
*/
function mostrar()
{
	//tomo la edad  
	var edad;
	edad = document.getElementById("txtIdEdad").value;
	if (edad > 17) {
		alert("mayor de edad");
	}
	else (edad < 18);
	{
		alert("menor de edad");
	}
	

}//FIN DE LA FUNCIÓN