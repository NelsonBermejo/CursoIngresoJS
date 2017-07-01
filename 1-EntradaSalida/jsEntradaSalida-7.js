/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
var num1;
var num2;


function sumar()
{

var resultadoSUMA;
num1=document.getElementById("numeroUno").value;
num2=document.getElementById("numeroDos").value;

        num1=parseInt(num1);
        num2=parseInt(num2);    

        resultadoSUMA=(num1+num2);

        alert(resultadoSUMA);// ESTE DA PERFECTO, FIJATE!!!
       	
}



function restar()
{

var resultadoRESTA;
num1=document.getElementById("numeroUno").value;
num2=document.getElementById("numeroDos").value;

        num1=parseInt(num1);
        num2=parseInt(num2);

        resultadoRESTA=(num1-num2);
        alert(resultadoRESTA);

}


function multiplicar()
{ 

var resultadoMUL;
num1=document.getElementById("numeroUno").value;
num2=document.getElementById("numeroDos").value;

        num1=parseInt(num1);
        num2=parseInt(num2);

        resultadoMUL=(num1*num2);

        alert(resultadoMUL);
}

function dividir()
{

var resultadoDIV;

num1=document.getElementById("numeroUno").value;
num2=document.getElementById("numeroDos").value;

        num1=parseInt(num1);
        num2=parseInt(num2);

        resultadoDIV=(num1/num2);

        alert(resultadoDIV);

}

