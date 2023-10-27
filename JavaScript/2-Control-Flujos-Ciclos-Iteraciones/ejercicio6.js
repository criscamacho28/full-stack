/* 
    Escribe un programa que pida el nombre de un mes y devuelva la cantidad de días que tiene. 

    Nota:
    Enero = 31 días
    Febrero = 28 días (29 días en años bisiestos)
    Marzo = 31 días
    Abril = 30 días
    Mayo = 31 días
    Junio = 30 días
    Julio = 31 días
    Agosto = 31 días
    Septiembre = 30 días
    Octubre = 31 días
    Noviembre = 30 días
    Diciembre = 31 días

    Terminado
*/
let mes = String(prompt("Ingrese un mes y se devolvera los dias que tiene:"));
switch(mes){
    case "enero":
        alert("Este mes tiene 31 dias")
        break;
    case "febrero":
        alert("Este mes tiene 28 dias (29 dias en años bisiestos)")
        break;
    case "marzo":
        alert("Este mes tiene 31 dias")
        break;
    case "abril":
        alert("Este mes tiene 30 dias")
        break;
    case "mayo":
        alert("Este mes tiene 31 dias")
        break;
    case "junio":
        alert("Este mes tiene 30 dias")
        break;
    case "julio":
        alert("Este mes tiene 31 dias")
        break;
    case "agosto":
        alert("Este mes tiene 31 dias")
        break;
    case "septiembre":
        alert("Este mes tiene 30 dias")
        break;
    case "octubre":
        alert("Este mes tiene 31 dias")
        break;
    case "noviembre":
        alert("Este mes tiene 30 dias")
        break;
    case "diciembre":
        alert("Este mes tiene 31 dias")
        break;
    default:
        alert("Ingreso un mes incorrecto");
        break;
}