/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
	var textoIngresadoNumero;
	var numeroIngresado;
	var numeroIngresadoDos;
	var textoIngresadoDos;
	
	textoIngresadoNumero= document.getElementById("txtIdNumeroUno").value;
	textoIngresadoDos= document.getElementById("txtIdNumeroDos").value;
	numeroIngresado= parseInt(textoIngresadoNumero);
	numeroIngresadoDos= parseInt(textoIngresadoDos);

	alert(numeroIngresadoDos + numeroIngresado);	
}

function restar()
{var textoIngresadoNumero;
	var numeroIngresado;
	var numeroIngresadoDos;
	var textoIngresadoDos;
	
	textoIngresadoNumero= document.getElementById("txtIdNumeroUno").value;
	textoIngresadoDos= document.getElementById("txtIdNumeroDos").value;
	numeroIngresado= parseInt(textoIngresadoNumero);
	numeroIngresadoDos= parseInt(textoIngresadoDos);

	alert(numeroIngresadoDos - numeroIngresado);
}

function multiplicar()
	
	{ var textoIngresadoNumero;
		var numeroIngresado;
		var numeroIngresadoDos;
		var textoIngresadoDos;
		
		textoIngresadoNumero= document.getElementById("txtIdNumeroUno").value;
		textoIngresadoDos= document.getElementById("txtIdNumeroDos").value;
		numeroIngresado= parseInt(textoIngresadoNumero);
		numeroIngresadoDos= parseInt(textoIngresadoDos);
	
		alert(numeroIngresadoDos * numeroIngresado);
}

function dividir()
{
	var textoIngresadoNumero;
	var numeroIngresado;
	var numeroIngresadoDos;
	var textoIngresadoDos;
	
	textoIngresadoNumero= document.getElementById("txtIdNumeroUno").value;
	textoIngresadoDos= document.getElementById("txtIdNumeroDos").value;
	numeroIngresado= parseInt(textoIngresadoNumero);
	numeroIngresadoDos= parseInt(textoIngresadoDos);

	alert(numeroIngresadoDos / numeroIngresado);
}

