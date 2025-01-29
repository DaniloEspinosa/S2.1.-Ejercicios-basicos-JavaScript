console.log("---------- Ejercicio 1.1: Arrow functions------------");
// Nivel 1
/* Ejercicio 1
Conversión de funciones: Tienes una función add que acepta dos parámetros y devuelve su suma. Conviértela en una función de flecha. Por ejemplo:function add(a, b) {return a + b;}.*/

const add = (a, b) => a + b;
console.log(add(4, 5));

/* Ejercicio 2
Función de flecha sin parámetros: Crea una función de flecha llamada randomNumber que no necesite parámetros y que devuelva un número aleatorio entre 0 y 100. */

const randomNumber = () => Math.round(Math.random() * 100);
console.log(randomNumber());

/* Ejercicio 3
Uso de 'this' en las funciones de flecha: Crea una clase person que tenga una propiedad name y una función greet que utilice una función de flecha. La función debe imprimir un saludo que incluya el nombre de la persona. Por ejemplo: console.log(Hola, ${this.name});.*/

class person {
  constructor(name) {
    this.name = name;
  }
  greet = () => console.log(`Hola, ${this.name}`);
}
const person1 = new person("Paco");
person1.greet();

// Nivel 2
/*Ejercicio 4
Función de flecha dentro de un loop: Crea una función llamada printNumbers que acepte un array de números y utilice un loop for para imprimir cada número en la consola utilizando una función de flecha.*/

const arrayNumeros = [1, 4, 6, 8, 23, 2, 12, -9, -7, -8];

const printNumbers = (array) => {
  console.log("Desde aqui el bucle foreach");
  array.forEach((element) => {
    console.log(element);
  });
};

const printNumbers2 = (array) => {
  console.log("Desde aqui el bucle for");
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
};

printNumbers(arrayNumeros);
printNumbers2(arrayNumeros);

// Nivel 3
/*Ejercicio 5
Función de flecha con 'setTimeout': Crea una función de flecha que imprima un mensaje en la consola después de esperar 3 segundos.*/

const despuesDe3Segundos = () => {
  setTimeout(() => {
    console.log("Soy el ejercicio 1.1, nivel 3 y ya han pasado los 3 segundos");
  }, 3000);
};

despuesDe3Segundos();

console.log("---------- Ejercicio 1.2: Operador ternario------------");
// Nivel 1
/*Ejercicio 1
Operador ternario básico: Escribe una función puedeConducir que acepte la edad como parámetro y utilice el operador ternario para determinar si el usuario puede conducir. Si la edad es 18 o más, debe devolver 'Puedes conducir'. Si no, debe devolver 'No puedes conducir'.*/

const puedeConducir = (edad) =>
  edad >= 18 ? "Puedes conducir" : "No puedes conducir";

console.log(puedeConducir(5));
console.log(puedeConducir(18));
console.log(puedeConducir(17));
console.log(puedeConducir(20));

/*Ejercicio 2
Uso con operadores de comparación: Escribe una expresión que utilice el operador ternario para determinar cuál de los dos números dados (num1 y num2) es mayor, devuelve 'num1 es mayor' Si no, devuelve '. num2 es mayor'.*/

const comparacionNumeros = (num1, num2) => {
  return num1 === num2
    ? "num1 y num2 son iguales"
    : num1 > num2
    ? "num1 es mayor"
    : "num2 es mayor";
};
console.log(comparacionNumeros(1, 2));
console.log(comparacionNumeros(10, 2));
console.log(comparacionNumeros(100, 100));

// Nivel 2
/* Ejercicio 3
Uso enlazado de operadores ternarios: Escribe una expresión que utilice enlaces de operadores ternarios para determinar si un número es positivo, negativo o cero.*/

const positivoNegativoOCero = (num) => {
  return num === 0
    ? "El número es cero"
    : num > 0
    ? "El número es positivo"
    : "El número es negativo";
};

console.log(positivoNegativoOCero(0));
console.log(positivoNegativoOCero(0.3));
console.log(positivoNegativoOCero(-0.3));
console.log(positivoNegativoOCero(10));
console.log(positivoNegativoOCero(-5));

/*Operador ternario con funciones:
Crea una función encontrarMaximo que acepte tres parámetros (a, b, c) y utilice el operador ternario para determinar el valor máximo.*/

const encontrarMaximo = (a, b, c) => {
  return a > b
    ? a > c
      ? `El valor maximo es ${a}`
      : `El valor maximo es ${c}`
    : b > c
    ? `El valor maximo es ${b}`
    : `El valor maximo es ${c}`;
};

console.log(encontrarMaximo(1, 2, 3));
console.log(encontrarMaximo(3, 2, 1));
console.log(encontrarMaximo(1, 3, 2));
console.log(encontrarMaximo(10, 10, 10));
console.log(encontrarMaximo(-10, -6, -4));

// Nivel 3
/* Ejercicio 4
Operador ternario dentro de un bucle: Escribe una función parOImpar que acepte un array de números y utilice un bucle para recorrer el array Dentro del bucle, utiliza el operador ternario para determinar si cada número es par o impar.*/

const parOImpar = (array) => {
  array.forEach((item) => {
    console.log(item % 2 ? `${item} es impar` : `${item} es par`);
  });
};
parOImpar(arrayNumeros);

console.log("---------- Ejercicio 1.3: Callbacks------------");
// Nivel 1
/* Ejercicio 1
Callback básico: Escribe una función llamada procesar que acepte dos parámetros: un número y una función de callback. La función procesar debe invocar la función de callback, pasando el número como parámetro.*/

function procesar(num, callback) {
  callback(num);
}

function parametro(numero) {
  console.log(`El numero pasado como argumento es el ${numero}`);
}

procesar(5, parametro);

/* Ejercicio 2
Callbacks con operaciones matemáticas: Escribe una función calculadora que acepte tres parámetros: dos números y una función de callback. La función calculadora debe invocar la función de callback con los dos números como parámetros. Luego, llama calculadora con una función que realice la suma de los dos números.*/

function calculadora(num1, num2, fn) {
  fn(num1, num2);
}

function suma(a, b) {
  console.log(a + b);
}

calculadora(14, 8, suma);
calculadora(10, 5, suma);

// Nivel 2
/* Ejercicio 3
Uso de callbacks en funciones asíncronas: Escribe una función esperarISaludar que acepte dos parámetros: un nombre y una función de callback. La función debe esperar 2 segundos y entonces invocar la función de callback, pasando el nombre como parámetro.*/

const esperarISaludar = (nombre, callback) => {
  setTimeout(() => {
    callback(nombre);
  }, 2000);
};

function saludo(name) {
  console.log(
    `Soy el ejercicio 1.3, nivel 2 y ya han pasado los 2 segundos, hola ${name}`
  );
}

esperarISaludar("Raul", saludo);

/* Ejercicio 4
Callbacks con arrays: Escribe una función procesarElements que acepte dos parámetros: un array y una función de callback. La función procesarElements debe invocar la función de callback por cada elemento del array.*/

const arrayElementos = ["Hola", "como", "estas"];

const procesarElements = (array, callback) => {
  array.forEach((item) => {
    callback(item);
  });
};

const procesarFor = (array, callback) => {
  for (let i = 0; i < array.length; i++) {
    callback(array[i]);
  }
};

function elementos(elemento) {
  console.log(elemento);
}
console.log("Resuelto con forEach");
procesarElements(arrayElementos, elementos);
console.log("Resuelto con for");
procesarFor(arrayElementos, elementos);

// Nivel 3
/* Ejercicio 5
Escribe una función procesarCadena que acepte dos parámetros: una cadena de caracteres y una función de callback. La función procesarCadena debe convertir la cadena a mayúsculas y entonces invocar la función de callback con la cadena transformada.*/

function procesarCadena(cadena, callback) {
  let nuevaCadena = cadena.toUpperCase();
  callback(nuevaCadena);
}

function imprimirCadena(cadena) {
  console.log(cadena);
}

procesarCadena("Hola mundo", imprimirCadena);

console.log("---------- Ejercicio 1.4: Rest & Spread operators------------");
// Nivel 1
/* Ejercicio 1
Operador Spread en Arrays: Crea dos arrays, array1 y array2. Use el operador spread para crear una tercera array que contenga todos los elementos de array1 y array2.*/

const array1 = ["este", "es", "el", "primer", "array"];
const array2 = ["y", "este", "es", "el", "segundo"];

const arrayFusionado = [...array1, ...array2];

console.log(arrayFusionado);

/* Ejercicio 2
Operador Rest en Funciones: Crea una función 'suma' que utilice el operador rest para aceptar un número indeterminado de argumentos y devolver su suma.*/

const suma2 = (...argumentos) =>
  argumentos.reduce((acc, elem) => acc + elem, 0);

console.log(suma2(1, 2, 3, 4));
console.log(suma2(...arrayNumeros));

// Nivel 2
/* Ejercicio 3
Copiando objetos con Spread: Crea un objeto 'objeto1'. Después crea un segundo objeto, 'objeto2', que sea una copia de 'objeto1' utilizando el operador spread. ha cambiado.*/

const objeto1 = { nombre: "Lionel", apellido: "Messi", posicion: 10 };
const objeto2 = { ...objeto1 };

console.log("Este es el objeto1");
console.log(objeto1);
console.log("Este es el objeto2 creado con operador spread");
console.log(objeto2);

/* Ejercicio 4
Resto en Destructuring: Crea un array con varios elementos. Utiliza destructuring y el operador resto para asignar los primeros dos elementos a variables, y después asignar el resto de los elementos a una tercera variable.*/

const arrayVariosElementos = [
  "Crea",
  "un",
  "array",
  "con",
  "varios",
  "elementos",
];

const [valor1, valor2, ...restoElementos] = arrayVariosElementos;

console.log(valor1);
console.log(valor2);
console.log(restoElementos);

// Nivel 3
/* Ejercicio 5
Spread en Funciones: Crea una función que acepte tres argumentos. Después, crea un array con tres elementos y llama a la función utilizando el operador spread con esa array.*/

function spreadEnFunciones(arg1, arg2, arg3) {
  console.log(`${arg1} ${arg2} ${arg3}`);
}

const array3Elementos = ["Soy", "un", "array"];

spreadEnFunciones(...array3Elementos);

/* Ejercicio 6
Fusionando Objetos con Spread: Crea dos objetos con propiedades distintas. Utiliza el operador spread para fusionar estos dos objetos en uno nuevo.*/

const objeto1Fusion = {
  marca: "Seat",
  puertas: 4,
  tipo: "familiar",
  extras: ["llantas", "gps", "seguro"],
};
const objeto2Fusion = { combustible: "gasoil", nuevo: true, precio: 20000 };
const objetoFusionado = { ...objeto1Fusion, ...objeto2Fusion };

console.log(objetoFusionado);

console.log("---------- Ejercicio 1.5: Array transformations------------");
// Nivel 1
/* Ejercicio 1
Map: Tiene un array de números [1, 2, 3, 4]. Crea un nuevo array que contenga el cuadrado de cada número.*/

const arrayNumeros2 = [1, 2, 3, 4];
const newArrayMap = arrayNumeros2.map((item) => item ** 2);
console.log(newArrayMap);

/* Ejercicio 2
Filtero: Tiene un array de números [1, 2, 3, 4]. Crea un nuevo array que sólo contenga los números pares.*/

const newArrayFilter = arrayNumeros2.filter((item) => item % 2 == 0);
console.log(newArrayFilter);

/* Ejercicio 3
Find: Tiene un array de números [1, 10 , 8, 11]. Use la función find para encontrar el primer número que es mayor a 10.*/

const primerMayor10 = [1, 10, 8, 11].find((num) => num > 10);
console.log(primerMayor10);

/* Ejercicio 4
Reducción: Tiene un array de números [13, 7, 8, 21]. Utiliza la función reduccion para calcular la suma total de los números.*/

const sumaTotal = [13, 7, 8, 21].reduce((acc, num) => acc + num, 0);
console.log(sumaTotal);

// Nivel 2
/* Ejercicio 5
Dado un array "[ 1, 3, 7, 10 ,15, 17, 11, 5, 8, 12, 9 ]", crea una función en una sola línea que haga lo siguiente:

- Filtra los números mayores o iguales a 10.
- Multiplica cada número filtrado por 2.
- Calcula la suma de los números filtrados y multiplicados por 2.
- La función debe devolver el resultado de la suma.*/

const arrayNivel2 = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];
const resultado = arrayNivel2
  .filter((num) => num >= 10)
  .map((num) => num * 2)
  .reduce((acc, num) => acc + num, 0);
console.log(resultado);

// Nivel 3
/* Ejercicio 6
Every / Some: Usa every y some para determinar si todos o algunos de los elementos del array [11, 12, 13, 14] son ​​mayores que 10, respectivamente*/

const mayor10 = (value) => value > 10;

const everySome = [11, 12, 13, 14];

console.log(everySome.some(mayor10));
console.log(everySome.every(mayor10));

console.log("---------- Ejercicio 1.6: Array loops------------");
// Nivel 1
/* Ejercicio 1
forEach: Tiene un array de nombres. Utiliza forEach para imprimir cada nombre en la consola: let nombres = ['Anna', 'Bernat', 'Clara'];*/
console.log("Ejercicio 1----------");
let nombres = ["Anna", "Bernat", "Clara"];
nombres.forEach((item) => console.log(item));

/* Ejercicio 2
for-of: Tiene un array de nombres. Utiliza un bucle for-of para imprimir cada nombre en la consola: let noms = ['Anna', 'Bernat', 'Clara'];*/
console.log("Ejercicio 2----------");
for (let item of nombres) {
  console.log(item);
}

/* Ejercicio 3
filtro: Tiene un array de números. Use filtro para crear una nueva array que sólo contenga los números pares. let numeros = [1, 2, 3, 4, 5, 6];*/
console.log("Ejercicio 3----------");
let numeros = [1, 2, 3, 4, 5, 6];

console.log(numeros.filter((item) => item % 2 === 0));
// Nivel 2
/* Ejercicio 4
for-in: Tiene un objeto con pares clave-valor: let obj = { nombre: Ola, edad: 25, ciudad: 'Barcelona' }; Utiliza un bucle for-in para imprimir en la consola cada clave y su correspondiente valor.*/

/* Ejercicio 5
for-of con break: Tiene un array de números. Utiliza un bucle for-of para imprimir en la consola los números hasta encontrar el número 5, entonces detiene el bucle: let numeros = [1, 2, 3, 4, 5, 6];*/

// Nivel 3
/*Ejercicio 6
for-of con index: Utiliza un bucle for-of para imprimir en la consola cada elemento del array y su posición (index): let noms = ['Anna', 'Bernat', 'Clara']*/
