/**Enunciado:
Al ingresar una edad menor a 18 años y un estado civil distinto a "Soltero", 
mostrar el siguiente mensaje: 'Es muy pequeño para NO ser soltero.' */

var edad;
var estadoCivil;
edad=document.getElementById("edad").value;
estadoCivil=document.getElementById("Soltero").value;
function Mostrar()
{
//tomo la edad  
edad=document.getElementById("edad").value;
if(edad<18 && estadoCivil!= "Soltero")
{
      alert ("Es muy pequeño para no ser soltero")
}


}//FIN DE LA FUNCIÓN