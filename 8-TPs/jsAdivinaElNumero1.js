/*Al comenzar el juego generamos un número 
secreto del 1 al 100, en la pantalla del juego
 dispondremos de un cuadro de texto para ingresar
  un número y un botón “Verificar”, si el número 
  ingresado es el mismo que el número secreto se dará 
  por terminado el juego con un mensaje similar a este: 
“Usted es un ganador!!! y en solo X intentos”.
de no ser igual se debe informar si “falta…”  para llegar al número secreto  o si “se pasó…”  del número secreto.
*/
var numeroSecreto; 
var contador=0;//variable sumado a una constante, en este caso le vamos a usar 1
var num;



function comenzar()
{
  numeroSecreto=Math.floor(Math.random()*100)+1;

    
  
  console.log(numeroSecreto);

	//Genero el número RANDOM entre 1 y 100
	 
		//alert(numeroSecreto );
	
}

function verificar()
{
  contador=contador+1;//contador +1 =1;contador=contador+1;
  num=document.getElementById("numero").value;
if(numeroSecreto==num)
{
       alert("Usted es un ganador y en solo "+contador+ "intentos" );//guardar el contador y reflejarlo en 
                                                                     // los if y los else
       
}
else
{
               if(numeroSecreto>num)
               {
                  alert("falta..")

               }

              else
              {
                 alert("se paso..")
              }


}

	
}