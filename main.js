// ---------- Ejercicio 1.1: Arrow functions--------------------------------------------------

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

const arrayNumeros = [1, 4, 6, 8, 23, 2, 12];

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
    console.log(
      "Han pasado 3 segundos desde la ejecucion de la funcion 'despuesDe3Segundos()'"
    );
  }, 3000);
};

despuesDe3Segundos();

// ---------- Ejercicio 1.2: Operador ternario --------------------------------------------------

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
    return  num1 === num2
    ? "num1 y num2 son iguales"
    : num1 > num2
    ? "num1 es mayor"
    : "num2 es mayor";
};
console.log(comparacionNumeros(1,2))
console.log(comparacionNumeros(10,2))
console.log(comparacionNumeros(100,100))

// Nivel 2
/* Ejercicio 3
Uso enlazado de operadores ternarios: Escribe una expresión que utilice enlaces de operadores ternarios para determinar si un número es positivo, negativo o cero.

Operador ternario con funciones: Crea una función encontrarMaximo que acepte tres parámetros (a, b, c) y utilice el operador ternario para determinar el valor máximo.*/

// Nivel 3
/* Ejercicio 4
Operador ternario dentro de un bucle: Escribe una función parOImpar que acepte un array de números y utilice un bucle para recorrer el array Dentro del bucle, utiliza el operador ternario para determinar si cada número es par o impar.*/
