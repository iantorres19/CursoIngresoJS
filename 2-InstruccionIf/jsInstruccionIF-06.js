function mostrar()
{
	//tomo la edad
	var edad;
	edad=document.getElementById("txtIdEdad").value;  
	if(edad>=18 ||edad>=13 && edad<=17 || edad>13 )
{
	alert("mayor de edad");
	alert("adolecente");
	alert("niño");
}	



}//FIN DE LA FUNCIÓN