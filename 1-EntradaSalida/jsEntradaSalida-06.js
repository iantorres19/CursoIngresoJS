/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt) y Sumarlos.
mostrar el resulto por medio de "ALERT"*/
function sumar()
{
	var numeroIngresado;
	var numeroIngresadoDos;
	var result;
	numeroIngresado= document.getElementById("txtIdNumeroUno").value;
	numeroIngresadoDos= document.getElementById("txtIdNumeroDos")
	resultado=  parseInt(numeroIngresado);
	resultado=  parseInt(numeroIngresadoDos);


	alert(numeroIngresado + numeroIngresadoDos);
}