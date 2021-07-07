/*
Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{  
	var numeroUno;
	var numeroDos;
	var resultado;
	var numeroDeIngreso;
	
	numeroUno= document.getElementById("txtIdNumeroDividendo").value;
	numeroDos= document.getElementById("txtIdNumeroDivisor").value;

    
	resultado= parseInt(numeroDos);
	resultado= (numeroUno % numeroDos);
	numeroDeIngreso="el resultado es " + resultado;


	alert( numeroDeIngreso );
}
