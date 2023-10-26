/* 
    Haz un programa que solicite un día de la semana (por ejemplo, "lunes") y que muestre si es laborable o no. 

    Terminado
*/
let dia = String(prompt("Ingrese un dia de la semana y te dire si es laborable o no"));
switch(dia){
    case "lunes":
        alert("Es laborable");
        break;
    case "martes":
        alert("Es laborable");
        break;
    case "miercoles":
        alert("Es laborable");
        break;
    case "jueves":
        alert("Es laborable");
        break;
    case "viernes":
        alert("Es laborable");
        break;
    case "sabado":
        alert("No es laborable");
        break;
    case "domingo":
        alert("No es laborable");
        break;
    default:
        alert("No eligio correctamente");
        break
}
