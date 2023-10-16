/* 
    Solicita al usuario que ingrese dos números utilizando prompt, guárdalos en 
    variables y muestra la suma de estos números en un alert.

    Terminadoo!!
*/
alert("Ingrese dos numeros para ser sumados");
let num1 = Number(prompt("Ingrese el primer numero:"));
let num2 = Number(prompt("Ingrese el segundo numero:"));
let suma = 0;
suma = num1 + num2;
alert("La suma de los numeros ingresados " + "(" + num1 + " + " + num2 + ")" + " = " + suma);