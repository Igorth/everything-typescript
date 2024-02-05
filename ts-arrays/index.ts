// // ARRAYS
// let numbers: number[] = [1, 2, 3, 4, 5];
// numbers.push(6);
// console.log(numbers);
// console.log(numbers[0]);

// const nomes: string[] = ['Maria', 'João', 'Pedro'];
// console.log(nomes);
////////////////////////////////////////////////////////////////
// // ANY
// // EVITAR USAR
// const arr1: any = [1, 2, 'teste', true, 5];
// console.log(arr1);
////////////////////////////////////////////////////////////////
// TIPO DE PARAMETRO DE FUNCOES
// function sum(a: number, b: number) {
//   console.log(a + b);
// }
// sum(1, 2);
////////////////////////////////////////////////////////////////
// TIPO DE RETORNO DE FUNCOES
// function sum(a: number, b: number): number {
//   return `Ola`;
// }
// console.log(sum(1, 2));
////////////////////////////////////////////////////////////////
// FUNCOES ANONIMAS
// setTimeout(() => {
//   const salary: number = 1000;

//   console.log(parseFloat(salary));
// }, 2000);
////////////////////////////////////////////////////////////////
// TIPOS DE OBJETOS

// function passCoordinates(coord: { x: number; y: number }) {
//   console.log(coord.x);
//   console.log(coord.y);
// }
// const objCoord = { x: 10, y: 5 };
// passCoordinates(objCoord);
////////////////////////////////////////////////////////////////
// PROPRIEDADES OPCIONAIS

// function showNumbers(a: number, b: number, c?: number) {
//   console.log(a);
//   console.log(b);
//   console.log(c);
// }
// showNumbers(1, 2);
////////////////////////////////////////////////////////////////
// VALIDACAO DE PARAMETRO OPCIONAL

// function advancedGreetings(firstName: string, lastName?: string) {
//   if (lastName !== undefined) {
//     console.log(`Hello ${firstName} ${lastName}`);
//   } else {
//     console.log(`Hello ${firstName}`);
//   }
// }
// advancedGreetings('John', 'Doe');
// advancedGreetings('John');
////////////////////////////////////////////////////////////////
// UNION TYPE
// function showBalance(balance: number | string) {
//   console.log(`O saldo da conta é: ${balance}`);
// }
// showBalance(100);
// showBalance('100');
// showBalance(false);

// function showUserRole(role: boolean | string) {
//   if (typeof role === 'boolean') {
//     return 'Usuário não aprovado';
//   } else {
//     return `${role}`;
//   }
// }
// console.log(showUserRole('true'));
// console.log(showUserRole('Admin'));
////////////////////////////////////////////////////////////////
// TYPE ALIAS

// type ID = number | string;
// function showId(id: ID) {
//   console.log(`O ID é: ${id}`);
// }

// showId(100);
// showId('100');
//////////////////////////////////////////////////////////////////
// INTRO INTERFACES
// type Point = {
//   x: number;
//   y: number;
//   z: number;
// };

// function showCoords(obj: Point) {
//   console.log(obj.x);
//   console.log(obj.y);
//   console.log(obj.z);
// }

// const coordObj: Point = { x: 10, y: 5, z: 10 };
// showCoords(coordObj);

//////////////////////////////////////////////////////////////////
// INTERFACE VS TYPE ALIAS
// interface Person {
//   name: string;
// }

// interface Person {
//   age: number;
// }

// const person: Person = {
//   name: 'John',
//   age: 25,
// };
// console.log(person);

// type PersonType = {
//   name: string;
// };
// type PersonType = {
//   age: number;
// };

//////////////////////////////////////////////////////////////////
// LITERAL TYPES
// let test: 'teste';

// test = 'teste';
// console.log(test);

// function showDirections(direction: 'left' | 'right' | 'up' | 'down') {
//   console.log(direction);
// }
// showDirections('left');
// showDirections('top');

//////////////////////////////////////////////////////////////////
// NON-NULL ASSERTION
// const p = document.getElementById('some-p');
// console.log(p!.innerText);

//////////////////////////////////////////////////////////////////
//BIGINT
// let n: bigint;
// n = 1000n;
// console.log(n);
//////////////////////////////////////////////////////////////////

// SYMBOL
// let symbolA: symbol = Symbol('a');
// console.log(symbolA);

//////////////////////////////////////////////////////////////////
