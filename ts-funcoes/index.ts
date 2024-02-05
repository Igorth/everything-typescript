// VOID
// function withoutReturn(): void {
//   console.log('Without return');
// }
// withoutReturn();
////////////////////////////////////////////////////////////////

// CALLBACK
// function greeting(name: string) {
//   return `Hello ${name}`;
// }

// function preGreeting(f: (name: string) => string, userName: string) {
//   console.log(`Pre greeting`);

//   const greet = f(userName);

//   console.log(greet);
// }

// preGreeting(greeting, 'John');

////////////////////////////////////////////////////////////////
// GENERIC FUNCTIONS
// function firstElement<T>(arr: T[]): T {
//   return arr[0];
// }

// console.log(firstElement([1, 2, 3, 4, 5, 6, 7]));
// console.log(firstElement(['a', 'b', 'c', 'd', 'e']));
// //console.log(firstElement('Treste'));

// function mergeObjects<U, T>(obj1: U, obj2: T) {
//   return {
//     ...obj1,
//     ...obj2,
//   };
// }

// const newObject = mergeObjects({ name: 'firstElement' }, { age: 33 });
// console.log(newObject);

////////////////////////////////////////////////////////////////
// CONSTRAINTS NAS GENERIC FUNCTIONS
// function biggestNumber<T extends number | string>(a: T, b: T): T {
//   let biggest: T;

//   if (+a > +b) {
//     biggest = a;
//   } else {
//     biggest = b;
//   }

//   return biggest;
// }

// console.log(biggestNumber(1, 2));
// console.log(biggestNumber('a', 'b'));
//console.log(biggestNumber(1, 'b'));

////////////////////////////////////////////////////////////////
// ESPECIFICAR TIPO DE ARGUMENTO
// function mergeArrays<T>(arr1: T[], arr2: T[]) {
//   return arr1.concat(arr2);
// }

// console.log(mergeArrays<number | string>([1, 2, 3], ['1231', 'sfsd']));

////////////////////////////////////////////////////////////////
// PARAMETROS OPCIONAIS
// function modernGreeting(name: string, greet?: string) {
//   if (greet) {
//     return `${greet}, ${name}`;
//   } else {
//     return `Hello ${name}`;
//   }
// }

// console.log(modernGreeting('John'));
// console.log(modernGreeting('John', 'Hi'));

////////////////////////////////////////////////////////////////
// PARAMETROS DEFAULT
// function sumDefault(a: number, b: number = 10) {
//   return a + b;
// }

// console.log(sumDefault(10));
// console.log(sumDefault(10, 20));

////////////////////////////////////////////////////////////////
// O TIPO UNKNOWN
// function doSomething(x: unknown) {
//   if (Array.isArray(x)) {
//     console.log(x[0]);
//   } else if (typeof x === 'string') {
//     console.log('X é uma string');
//   }
// }

// doSomething(1);
// doSomething('a');
// doSomething(true);
// doSomething(undefined);
// doSomething(null);
// doSomething([1, 2, 3]);

////////////////////////////////////////////////////////////////
// // O TIPO NEVER
// function showErrorMessage(msg: string): never {
//   throw new Error(msg);
// }
// showErrorMessage('Error');

////////////////////////////////////////////////////////////////
// REST PARAMETERS
// function sumAll(...numbers: number[]) {
//   return numbers.reduce((i, total) => i + total);
// }

// console.log(sumAll(1, 2, 3, 4, 5));

////////////////////////////////////////////////////////////////
// DESTRUCTURING EM PARAMETERS
function showProductDetails({ name, price }: { name: string; price: number }) {
  return `Product ${name} has a price of ${price}`;
}

const shirt = { name: 'Shirt', price: 10 };
console.log(showProductDetails(shirt));
