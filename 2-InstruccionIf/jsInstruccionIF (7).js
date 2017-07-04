/**Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */

var edad;
var estadoCivil;


function Mostrar()

{

estadoCivil=document.getElementById("estadoCivil").value;
edad=document.getElementById("edad").value;


if(edad<18 && estadoCivil!= "Soltero")
{
  
  
      alert ("Es muy pequeño para no ser soltero")
}


}