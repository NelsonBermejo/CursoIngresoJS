/**Enunciado:
Al ingresar una hora, informar: 
si está entre las 7 y las 11 : "Es de mañana.". */

function Mostrar()
{
//tomo la edad  
var laHora = document.getElementById('hora').value;

//alert (laHora);
	
	switch(laHora)
    {

        case "8":
        case "9":
        case "10":  
                 alert("Es de mañana");
    }



}//FIN DE LA FUNCIÓN