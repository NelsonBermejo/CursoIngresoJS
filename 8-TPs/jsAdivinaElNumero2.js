/*En esta oportunidad el juego evaluará tus
 aptitudes a partir de la cantidad de intentos, 
 por lo cual se informará lo siguiente:
1° intento: “usted es un Psíquico”.
2° intento: “excelente percepción”.
3° intento: “Esto es suerte”.
4° intento: “Excelente técnica”.
5° intento: “usted está en la media”.
Desde  6 Intentos hasta 10:”falta técnica”
Más de 10 intentos: “afortunado en el amor!!”.*/

var numeroSecreto; 
var contador;

function comenzar()/*if()*/
                           
{
	//Genero el número RANDOM entre 1 y 100
	 numeroSecreto=Math.floor(Math.random()*100)+1;

     console.log(numeroSecreto);
	

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
                  alert("usted es un Psíquico")
                  contador=contador+1
               }

              else
              {
                 alert("Excelente Percepcion")
				 contador=contador+1
              }


}
	

}