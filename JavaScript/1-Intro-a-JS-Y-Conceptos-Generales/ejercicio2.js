/* 
    Crea una variable num1 y otra num2, y asígnales números. Realiza operaciones matemáticas 
    (suma, resta, multiplicación y división) con estas variables y muestra los resultados en la 
    consola. 

    Terminado
*/
alert("Ingresara 2 numeros y se mostrara los resultados de las operaciones matematicas");
let num1 = Number(prompt("Ingrese el Primer Numero: "));
let num2 = Number(prompt("Ingrese el Segundo Numero: "));
let suma, resta, multiplicación, division = 0;
suma = num1 + num2;
resta = num1 - num2;
multiplicación = num1 * num2;
division = num1 / num2;
alert("Los Numeros que ingreso son: " + num1 + " y " + num2 + " Los resultados son, Suma: " + suma + "; Resta: " + resta + "; Multiplicacion: " + multiplicación + "; Division: " + division);