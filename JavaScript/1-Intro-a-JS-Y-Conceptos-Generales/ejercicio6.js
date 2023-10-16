/*
    Pide al usuario que introduzca su edad utilizando prompt. Luego, verifica 
    si es mayor de edad y muestra un mensaje apropiado utilizando alert.

    Terminado
*/
let edad = Number(prompt("Ingrese su edad: "));
if(edad >= 18){
    alert("Sos mayor de edad amigo");
}else{
    alert("Sos menor de edad")
}