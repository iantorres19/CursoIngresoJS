/*
Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function mostrarAumento()
{
	var sueldo;
	var resultado;
	var descuento;

	sueldo=document.getElementById("txtIdImporte").value;
	resultado=document.getElementById("txtIdResultado");

	sueldo=parseInt(sueldo);
	descuento=sueldo-(sueldo * 0.25);

	resultado.setAttribute('value', descuento);
}
