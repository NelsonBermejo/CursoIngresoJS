/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
var sueldo;
var aumento;
var total;
function MostrarAumento()
{
sueldo=document.getElementById("sueldo").value;

            sueldo=parseInt(sueldo);

	        aumento= sueldo * 0.1;

            total=aumento+sueldo;

            document.getElementById("resultado").value=total;
}
