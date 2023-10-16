/* 
    Realiza operaciones matemáticas con números ingresados por el usuario. 
    Pide al usuario que introduzca dos números mediante prompt, conviértelos a 
    números y muestra los resultados de suma, resta, multiplicación y división 
    en la consola utilizando console.log.

    Terminado
*/
alert("Ingrese dos numeros para realizar operaciones matematicas y mostrar los resultados por consola ");
let num1 = Number(prompt("Ingrese el 1° Numero: "));
let num2 = Number(prompt("Ingrese el 2° Numero: "));
console.log("Los resultados son: " + "("+ num1 + " + " + num2 + " ) = " + (num1 + num2)) //Para la Suma
console.log("Los resultados son: " + "("+ num1 + " - " + num2 + " ) = " + (num1 - num2)) //Resta
console.log("Los resultados son: " + "("+ num1 + " * " + num2 + " ) = " + (num1 * num2)) //Multiplicacion
console.log("Los resultados son: " + "("+ num1 + " / " + num2 + " ) = " + (num1 / num2)) //Division
