 /* 1) Programa una función que cuente el número de caracteres de una cadena de texto, pe. miFunción("Hola Mundo") devolverá 10 */

 const numeroDeCaracteres = (cadena = undefined) =>{

    if(cadena === undefined) return console.warn('no ha intruducidos los caracteres')
 
    if(typeof cadena !== "string") return console.error(`el tipo de dato es incorrecto "${cadena}"`)
 
    return console.log(`la cadena que escribite es: ${cadena} y numero de caracteres es "${cadena.length}"`)
 }
 
 //  numeroDeCaracteres()
 //  numeroDeCaracteres({})
 //  numeroDeCaracteres('hola mundo')


    /* 2) Programa una función que te devuelva el texto recortado según el número de caracteres indicados, pe. miFunción("Hola Mundo", 4) devolverá "Hola" */

    const textoRecortado = (texto = undefined, recora = undefined) =>{
 
        if(texto === undefined) return console.warn('no ha intruducidos los caracteres')
     
        if(typeof texto !== "string") return console.error(`el tipo de dato es incorrecto "${texto}"`)
     
        if(recora === undefined) return ('no ha intruducidos el valor a cortar')
     
        if(typeof recora !== "number") return console.error(`el tipo de dato es incorrecto "${recora}"`)
     
        if(Math.sign(recora) === -1) return console.error(` el numero es negativo es un error `)
     
        return console.log(`el texto que escribio es ${texto} y texto recortado es ${texto.slice(0,recora)}`)
     }
    
    
     // textoRecortado()
     // textoRecortado(45)
     // textoRecortado('hola mundo','45')
     // textoRecortado('hola mundo', -1)
     // textoRecortado('hola mundo', 4)

    /* 3) Programa una función que dada una String te devuelva un Array de textos separados por cierto caracter, pe.
     miFuncion('hola que tal', ' ') devolverá ['hola', 'que', 'tal'] */

     
    const textoSeparado = (texto = undefined, separados = undefined) => {
 
    if(texto === undefined) return console.warn('no ha intruducidos los caracteres')
    
    if(typeof texto !== "string") return console.error(`el tipo de dato es incorrecto "${texto}"`)
 
    if(separados === undefined) return console.warn('no ha intruducidos el separador')
 
    return console.log(texto.split(separados))
    }
 
 //  textoSeparado()
 //  textoSeparado(45)
 //  textoSeparado('hola mundo como esta')
 //  textoSeparado('hola mundo como esta', ' ')

    /* 4) Programa una función que repita un texto X veces, pe. miFuncion('Hola Mundo', 3) devolverá Hola Mundo Hola Mundo Hola Mundo */

    const numeroDeTexto = (texto = undefined, veces = undefined) =>{
 
        if(texto === undefined) return console.warn('no ha intruducidos los caracteres')
        
        if(typeof texto !== "string") return console.error(`el tipo de dato es incorrecto "${texto}"`)
     
        if(veces === undefined) return console.warn('no ha intruducidos el numero de veces')
     
        if(typeof veces !== "number") return console.error(`el tipo de dato es incorrecto "${veces}"`)
     
        if(Math.sign(veces) === -1) return console.error(` el numero es negativo es un error `)
     
        for(let i = 1; i <= veces; i++){
            console.log(`${texto} ${i}`)
        }
        
     }
     
     // numeroDeTexto()
     // numeroDeTexto(52)
     // numeroDeTexto('hola mundo')
     // numeroDeTexto('hola mundo',{})
     // numeroDeTexto('hola mundo',-2)
     // numeroDeTexto('hola mundo',3)



    /* 5) Programa una función que invierta las palabras de una cadena de texto, pe. miFuncion("Hola Mundo") devolverá "odnuM aloH" */
    
    const invertirPalabra = (palabra = undefined) => {

        if(palabra === undefined){
            return console.warn(`no ha intruducidos el texto`)
        }

        if(typeof palabra !== "string"){
            return console.error(`el tipo de dato que intrudujo es invalidos ${typeof palabra}`)
        }

        console.log(`el texto que escribio es ${palabra} y invertidad seria asi ${palabra.split('').reverse().join('')}`)
    }

    // invertirPalabra()
    // invertirPalabra(90)
    // invertirPalabra('hola mundo')



    /* 6) Programa una función para contar el número de veces que se repite una palabra en un texto largo, pe. miFuncion("hola mundo adios mundo", "mundo") devolverá 2 */

    const numeroDeVecePalabra = (palabra = undefined, veces = undefined) => {

        if(palabra === undefined){
            return console.warn(`no ha intruducidos el texto`)
        }

        if(typeof palabra !== "string"){
            return console.error(`el tipo de dato que intrudujo es invalidos ${typeof palabra}`)
        }

        if(veces === undefined) return console.warn('no ha intruducidos el numero de veces')
     
    
        let i = 0;
        let cuenta = 0;

        while(i !== -1){
            i = palabra.indexOf(veces, i);

            if(i !== -1){
                i++;
                cuenta ++;
            }
        }

        return console.log(`el texto que escribio es ${palabra} y numero de vese ${veces} que se repite esta palabra es ${cuenta} `)
    }

    // numeroDeVecePalabra('hola mundo adios mundo','mundo')



    /* 7) Programa una función que valide si una palabra o frase dada, es un palíndromo (que se lee igual en un sentido que en otro), pe. mifuncion("Salas") devolverá true */

    const palabraPolindromo = (palabra = undefined) => {

        if(palabra === undefined){
            return console.warn(`no ha intruducidos el texto`)
        }

        if(typeof palabra !== "string"){
            return console.error(`el tipo de dato que intrudujo es invalidos ${typeof palabra}`)
        }

        palabra = palabra.toLocaleLowerCase();

        let alReves = palabra.split('').reverse().join('');

        if(palabra === alReves){
            console.log(`la palabra que escribite ${palabra} si es polibroma y alreve seria asi ${alReves}`)
        }else{
            console.log(`la palabra que escribite  ${palabra} no es polibroma y alreve seria asi ${alReves}`)
        }
    }

    // palabraPolindromo()
    // palabraPolindromo(89)
    // palabraPolindromo('hola')
    // palabraPolindromo('Salas')



    /* 8) Programa una función que elimine cierto patrón de caracteres de un texto dado, pe. miFuncion("xyz1, xyz2, xyz3, xyz4 y xyz5", "xyz") devolverá  "1, 2, 3, 4 y 5 */

    const eliminarCaracteres = (texto = undefined, patron = undefined) =>{

        if(texto === undefined) return console.warn('no ha intruducidos los caracteres')
        
        if(typeof texto !== "string") return console.error(`el tipo de dato es incorrecto "${texto}"`)

        if(patron === undefined) return console.warn('no ha intruducidos los caracteres')
        
        if(typeof patron !== "string") return console.error(`el tipo de dato es incorrecto "${patron}"`)

        return console.log(`el texto que escribio${texto} y el patron ${patron} a eliminar es ${texto.replace(new RegExp(patron, "ig"), "")} `)
    }

    eliminarCaracteres("xyz1, xyz2, xyz3, xyz4 y xyz5","xyz")



    /* 9) Programa una función que obtenga un numero aleatorio entre 501 y 600 */



    /* 10) Programa una función que reciba un número y evalúe si es capicúa o no (que se lee igual en un sentido que en otro), pe. miFuncion(2002) devolverá true  */



    /* 11) Programa una función que calcule el factorial de un número (El factorial de un entero positivo n, se define como el producto de todos los números enteros positivos desde 1 hasta n), pe. miFuncion(5) devolverá 120 */



    /* 12) Programa una función que determine si un número es primo (aquel que solo es divisible por sí mismo y 1) o no, pe. miFuncion(7) devolverá true */



    /* 13) Programa una función que determine si un número es par o impar, pe. miFuncion(29) devolverá Impar */



    /* 14) Programa una función para convertir grados Celsius a Fahrenheit y viceversa, pe. miFuncion(0,"C") devolverá 32°F */



    /* 15) Programa una función para convertir números de base binaria a decimal y viceversa, pe. miFuncion(100,2) devolverá 4 base 10 */



    /* 16) Programa una función que devuelva el monto final después de aplicar un descuento a una cantidad dada, pe. miFuncion(1000, 20) devolverá 800 */



    /* 17) Programa una función que dada una fecha válida determine cuantos años han pasado hasta el día de hoy, pe. miFuncion(new Date(1984,4,23)) devolverá 35 años (en 2020) */



    /* 18) Programa una función que dada una cadena de texto cuente el número de vocales y consonantes, pe. miFuncion("Hola Mundo") devuelva Vocales: 4, Consonantes: 5 */



    /* 19) Programa una función que valide que un texto sea un nombre válido, pe. miFuncion("Jonathan MirCha") devolverá verdadero */



    /* 20) Programa una función que valide que un texto sea un email válido, pe. miFuncion("jonmircha@gmail.com") devolverá verdadero */



    /* 21) Programa una función que dado un array numérico devuelve otro array con los números elevados al cuadrado, pe. mi_funcion([1, 4, 5]) devolverá [1, 16, 25] */



    /* 22) Programa una función que dado un array devuelva el número mas alto y el más bajo de dicho array, pe. miFuncion([1, 4, 5, 99, -60]) devolverá [99, -60] */



    /* 23) Programa una función que dado un array de números devuelva un objeto con 2 arreglos en el primero almacena los números pares y en el segundo los impares, pe. miFuncion([1,2,3,4,5,6,7,8,9,0]) devolverá {pares: [2,4,6,8,0], impares: [1,3,5,7,9]} */



    /* 24) Programa una función que dado un arreglo de números devuelva un objeto con dos arreglos, el primero tendrá los numeros ordenados en forma ascendente y el segundo de forma descendiente, pe. miFuncion([7, 5,7,8,6]) devolverá { asc: [5,6,7,7,8], desc: [8,7,7,6,5] }*/



    /* 25) Programa una función que dado un arreglo de elementos, elimine los duplicados, pe. miFuncion(["x", 10, "x", 2, "10", 10, true, true]) devolverá ["x", 10, 2, "10", true]  */



    /* 26) Programa una función que dado un arreglo de números obtenga el promedio, pe. promedio([9,8,7,6,5,4,3,2,1,0]) devolverá 4.5 */



    /* 27) Programa una clase llamada Pelicula.
        La clase recibirá un objeto al momento de instanciarse con los siguentes datos: id de la película en IMDB, titulo, director, año de estreno, país o países de origen, géneros y calificación en IMBD.
          - Todos los datos del objeto son obligatorios.
          - Valida que el id IMDB tenga 9 caracteres, los primeros 2 sean letras y los 7 restantes números.
          - Valida que el título no rebase los 100 caracteres.
          - Valida que el director no rebase los 50 caracteres.
          - Valida que el año de estreno sea un número entero de 4 dígitos.
          - Valida que el país o paises sea introducidos en forma de arreglo.
          - Valida que los géneros sean introducidos en forma de arreglo.
          - Valida que los géneros introducidos esten dentro de los géneros aceptados*.
          - Crea un método estático que devuelva los géneros aceptados*.
          - Valida que la calificación sea un número entre 0 y 10 pudiendo ser decimal de una posición.
          - Crea un método que devuelva toda la ficha técnica de la película.
          - Apartir de un arreglo con la información de 3 películas genera 3 instancias de la clase de forma automatizada e imprime la ficha técnica de cada película.
        * Géneros Aceptados: Action, Adult, Adventure, Animation, Biography, Comedy, Crime, Documentary ,Drama, Family, Fantasy, Film Noir, Game-Show, History, Horror, Musical, Music, Mystery, News, Reality-TV, Romance, Sci-Fi, Short, Sport, Talk-Show, Thriller, War, Western.
        */