/*Enunciado:
al seleccionar un mes informar. 
si tiene 28 días. 
si tiene 30 días. 
si tiene 31 días.*/ 



function Mostrar()
{
//tomo la edad  
var mesDelAño = document.getElementById('mes').value;

//alert (mesDelAño);
	
	switch(mesDelAño)
    {
        case "Febreo":alert("Tiene 28 dias");
        break;
        case "Abril":
        case "Junio":
        case "Septiembre":
        case "Noviembre":  alert("tienen 30 dias");
        break;
        default:alert("tiene 31 dias");
    }
      


}//FIN DE LA FUNCIÓN