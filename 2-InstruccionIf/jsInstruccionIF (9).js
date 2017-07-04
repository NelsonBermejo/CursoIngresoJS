
/*Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostar:
 "EXCELENTE" para notas igual a 9 o 10, "APROBÓ" para notas mayores a 4,
 "Vamos, la proxima se puede" para notas menores a 4*/ 

function Mostrar()
{
	var num;
	num=Math.floor(Math.random()*10);
	//Genero el número RANDOM entre 1 y 10 
	alert(num)

}//FIN DE LA FUNCIÓN