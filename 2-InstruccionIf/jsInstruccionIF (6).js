/**Enunciado:
Al ingresar una edad debemos informar 
si la persona es mayor de edad (mas de 18 años)
 o adolescente (entre 13 y 17 años) 
o niño (menor a 13 años). */

var edad;


function Mostrar()
{
//tomo la edad  
edad =document.getElementById("edad").value;
if(edad>=18)
{
    alert("Mayor")
}
else
{
                    if(edad<13)// Este if se encuentra dentro del else1º
                    {
                              alert("es menor")
                    }
                    else //2º else dentro del else
                    {
                              alert("es adolecente")
                    }

}


}//FIN DE LA FUNCIÓN