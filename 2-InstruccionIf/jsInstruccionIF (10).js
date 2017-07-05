
/**Enunciado:
Al presionar el Botón, asignar una nota RANDOM al examen y mostar:
 "EXCELENTE" para notas igual a 9 o 10, "APROBÓ" para notas mayores a 4,
 "Vamos, la proxima se puede" para notas menores a 4 */
function Mostrar()
{
var num;
num=Math.floor(Math.random()*10)

if(num>=9)
{
    alert("NOTA: "+num+" EXCELENTE");
}
else                
{

                   if(num>4)// ya se comprende que la nota mayor a nueve ya esta tomada
				   {
                          alert("NOTA: "+num +" APROBO" )
				   }
                   else
				   {
                           alert("NOTA: "+num+ " Vamos, la Proxima se puede")
				   }
                       

}
                 



	//Genero el número RANDOM entre 1 y 10 
	

}//FIN DE LA FUNCIÓN