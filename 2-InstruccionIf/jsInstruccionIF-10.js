/*Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostrar:
"EXCELENTE" para notas igual a 9 o 10,
"APROBÓ" para notas mayores a 4,
"Vamos, la proxima se puede" para notas menores a 4
autor: ian torres
*/
function mostrar() {
	//Genero el número RANDOM entre 1 y 10 
	var numero;

	var numeroMaximo = 10;
	var numeroMinimo = 1;
	numero = Math.round(Math.random() * (numeroMaximo - numeroMinimo) + numeroMinimo);
	if (numero >= 9) {
		alert(" excelente,nota " + numero);
	}
	else {
		if (numero >= 5) {
			alert(" aprobo, nota  " + numero);
		}
		else {
			if (numero <= 4) {
				alert(" vamos, la proxima se puede, nota " + numero);
			}
		}
	}



}//FIN DE LA FUNCIÓN