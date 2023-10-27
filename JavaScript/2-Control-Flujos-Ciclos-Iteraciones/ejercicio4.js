/* 
    Crea un programa que determine si un número ingresado por el usuario es par o impar. 

    Nota mia: Si quiero saber si un numero es impar o par debo de usar el resto de una division,
    si el resto es = 0 es par, si no es = es impar.

    Terminado
*/
let numero = Number(prompt("Ingrese un numero y te dire si es par o inpar:")); 
if((numero % 2) === 0){
    alert("Es par");
}else{
    alert("Es impar")
}