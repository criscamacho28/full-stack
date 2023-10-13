/* 
    Introduccion a JavaScript y Conceptos Generales: Sintaxis y Variables.

    Introduccion a JavaScript:
    JavaScirpt es un lenguaje de programacion que se utilza para aportar dinamismo a sitios web y app web.
    Funciona en complemento con los lenguajes web que son HTML y CSS, permitiendo crear nuevas funciones e 
    iteraciones avanzadas con los usuarios, asi como interactuar con otras aplicaciones o servicios backend.
    
    JavaScript es un Lenguaje Interpretado ya que se ejecuta por medio de un programa interprete, en este 
    lenguaje son los navegadores son los encargados de interpretar y ejecutar el codigo js.
        Lenguaje Interpretado: Se ejecuta el codigo linea por linea mediante un interprete.
        Lenguaje Compilado: El codigo se convierte a un lenguaje de maquina (binario) antes de ejecutarlo.
    JavaScript se utilza tanto para construir aplicaciones de Frontend como de Backend.

    Elementos Basicos:
        Datos: Numericos, Cadenas, Booleanos, Punteros.
        Variables: Globales, Locales.
        Objetos: Array, Boolean, Date, Math, String.
        Arrays: Indice, Longitud.
        Funciones: Argumentos.
    
    Algoritmos: En programacion un algoritmo es un conjunto de procedimientos o funciones ordenados
    que se necesitan para realizar cierta operacion o accion. Por ejemplo en una suma el algortimo implica
    tomar un dato, sumarlo a otro y obtener un resultado.

    ------------------------------------------------------------------------------------------------

    Conceptos Generales: Sintaxis y Variables.

    El codigo JavaScript se asocia al archivo HTML que se encuentra en el navegador. Hay dos maneras de 
    escribir codigo Js en nuestra aplicacion.
        1) Mediante la etiqueta HTML <script> //Aca se escribe el codigo JS  </script>
        2) En un archivo individual con extension ".js" y se vincula con la etiqueta <script> y el atributo src=
            <scrit src="main.js"> ideal que este en el head del HTML
    
    Variables y Valores:
    Variables: Una variable es un espacio reservado en la memoria que puede cambiar de contenido a lo largo de 
    la ejecucion de un programa. Se almacenan diversos tipos de datos que se utiliza en la aplicacion.
        Sintaxis:
                let nombre = "cristian";
                const curso = "JavaScript";

    Valores: Para empezar los tipos de datos mas comunes son cadenas de texto y numeros.
        Number: Un valor numerico, puede ser entero o decimal.
        String: Es un cadena de texto o string, compuesta por uno o mas caracteres, definido por '' o ""
    Se asigna distintos tipos de valores mediante el operador de asignacion que es el simbolo =

    LET y CONST: Este tipo de declaracion de variables impiden que se puedan crear dos variables con el mismo nombre.
    let = puede recibir multiples asignaciones en el transcurso de la aplicacion, (puede cambiar de valor varias veces).
    const = es una variable constante que recibe una unica asignacion al momento de su declaracion, (no cambia su valor).

    Con valores Numericos se pueden realizar operaciones matematicas.
    Con valores String se pueden concatenar los valores. es decir combinarlas.

    prompt();       Permite que el usuario ingrese un dato.
    consola.log();  Muestra el msj que pasamos como parametro en la consola Js del Navegador Web.
    alert();        Muestra una ventana sobre la pagina web indicando el msj que ingresamos como parametro.
*/