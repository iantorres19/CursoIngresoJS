/*Enunciado:
Al presionar el Botón, mostrar un número Random del 1 al 10 inclusive.autor: ian torres
*/
function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	var numero;
	var numeroMaximo = 10;
	var numeroMinimo = 1;
	numero = Math.round(Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo);
	alert(numero);

}//FIN DE LA FUNCIÓN