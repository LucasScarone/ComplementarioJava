// 1. Convierta la siguiente función con nombre en una función de flecha :

//            función imprimirMensaje(mensaje) {

//                     consola.log(mensaje)

//            }
const imprimirMensaje = Mensaje => console.log(Mensaje)

// 2. Convierta la siguiente función con nombre en una función de flecha :

//             función crearmultiplicación (número1, número2) {

//                       dejar resultado = número1 * número2

//                       resultado de retorno

//              }
const crearmultiplicación= (num1, num2) => num1 *num2 ;

// 3. A partir de una matriz: const array = [ 1,2,3,4,5,6,7,8,9 ], 
// aplique un mapa a esa matriz y pase como argumento la función nombrada que se 
// muestra en el ejercicio anterior. . Mostrar por consola el nuevo array obtenido.

const array = [ 1,2,3,4,5,6,7,8,9 ]
// Multiplicando cada elemento por 2
const newArray = array.map(elemento => crearmultiplicación(elemento, 2)); 

// Mostrar por consola el nuevo array obtenido
// console.log(newArray)

// 4. Generar una función que reciba como parámetro un array de cervezas 
// y devuelva un nuevo array con las 10 cervezas con mayor alcohol.

function mayorGradoAlcohol(cervezas) {
    // Ordenar el array de cervezas en orden descendente según el contenido 
    // de alcohol
    const cervezasOrdenadas = cervezas.sort((a, b) => b.abv - a.abv)
    
    // Obtener las primeras 10 cervezas del array ordenado
    const top10Cervezas = cervezasOrdenadas.slice(0, 10);
    
    return top10Cervezas;
}
// console.log(mayorGradoAlcohol(beers))
    
// 5. Generar una función que reciba como parámetro un array de cervezas
//  y devuelva un nuevo array con las 10 cervezas menos amargas.

function MenorAmargor(cervezas) {
    // Ordenar el array de cervezas en orden descendente según el contenido 
    // de alcohol
    const cervezasOrdenadas = cervezas.sort((a, b) => a.ibu - b.ibu)
    
    // Obtener las primeras 10 cervezas del array ordenado
    const top10Cervezas = cervezasOrdenadas.slice(0, 10);
    
    return top10Cervezas
}

// console.log(MenorAmargor(beers));

// 7. Generar una función que reciba como parámetro un array de 
// cervezas, un valor y que devuelva el primer objeto cuya propiedad 
// ibu sea igual al valor ingresado, en caso de no haber cerveza con ese 
// ibu que muestre un 
// mensaje en la consola que dice "No hay cerveza con un ibu de (valor ingresado)".

function buscarIbu(array, valor){
    const ibuEncontrado= array.filter(array => array.ibu === valor) 
    if (ibuEncontrado.length === 0) {
        console.log(`No hay cerveza con un ibu de ${valor} `); 
    }else{
        console.log(ibuEncontrado)
    }
    
}

// buscarIbu(beers, 60)

// 8. Generar una función que reciba como parámetro el nombre de una cerveza y
//  devuelva la posición en el array de esa cerveza. Si no se encuentra la 
//  cerveza, se debe imprimir un mensaje 
// a través de la consola que diga “(Nombre de la cerveza ingresada) no existe”.

function buscarporNombre(array, valor) {
    const nombreEncontrado=array.filter(array => array.name.toLowerCase().startsWith(valor.toLowerCase()))
    if (nombreEncontrado.length === 0) {
        console.log(`${valor}, No existe`)
    }else {
        console.log(nombreEncontrado)
    }
    
}


// buscarporNombre(beers, 'buzz')






