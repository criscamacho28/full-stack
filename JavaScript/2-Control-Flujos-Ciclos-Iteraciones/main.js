/*
    Control de flujos & Ciclos e iteraciones

    Condicionales: 
    Es una estructura sintactica que sirve para tomar una desicion a partir de una condicion.
    
    La idea del Control de Flujos es marcar puntos en nuestra aplicacion donde, a partir de alguna
    evaluacion nuestro programa pueda tomar varios caminos posibles de accion.

    Valores Booleanos: Son valores que pueden tomar dos valores posibles, true o false.
    Si es verdadero toma un camino y si es falso toma otro.

    Comparacion: Cuando se utilza operadores matematicos entre dos valores numericos, estos resuelven
    un nuevo tipo de Valor Numerico como resultado. Pero cuando se realiza esto en un operador de 
    comparacion, esta operacion siempre resuelve como true o false.

    Estructura if:
        if(condicion){
            //Si es verdadero se ejecuta todo lo que esta entre las {} UNA VEZ!!!!
        }else{
            //Si no se cumple se ejecuta lo que esta entre {} UNA VEZ!!!
        }

    Operadores Logicos:
        =  Asignacion;   
        == Es igual;            === Es Estrictamente igual;
        != Es distine de;       !== Es Estrictamente distinto;
        
        < Menor; <= Menor o Igual; > Mayor; >= Mayor o igual;

        && Operador AND(y);     || Operados OR(o);      ! Operador NOT(no)

    --------------------------------------------------------------------------------------

    Ciclos e iteraciones:

    Los ciclos o tambien conocidos como bucles o iteraciones son un medio rapido y sencillo para 
    hacer algo repentidamente.
    Los bucles en JavaScript son: for; while; do...while;

    Tipos de bucles:
        - Ciclos por conteo: Repite un bloque de codigo un Numero de veces especificos. (for).
        - Ciclo Condicionales: Repite un bloque de codigo mientras la condicion evaluada es true (while, do..while).
    
    Estructura for:
        for(desde; hasta; actualizacion){
            //Se ejecutara todo lo que este en las {} mientras dure el bucle

            continue;   //Para saltar ese ciclo y seguir con el siguiente.
            break;      //Para salir del bucle.
        }
    
    Estructura while:
        do{
            //El bloque de codigo se ejecutara al menos una vez, por que la condicion se evalua al final.
        }
        while(repetir){
            //Mientras se cumpla la condicion indicada, repetir todo lo que esta entre {}.
        }

    Estructura Switch:
        Es como usar varios if.
        switch(variable){
            case valor1:
                //Se ejecuta cuando variable==valor1;
                break;
            case valor7:
                //Se ejecuta cuando variable==valor7
                break;
            default:
                //Cuando no se cumple ningun case
                break;
        }
        Si no pongo break salta ese case y ejecuta el siguiente hasta que se encuentre un break;
*/