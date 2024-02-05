// OBJECT TYPES
// interface Product {
//   name: string;
//   price: number;
//   isAvailable: boolean;
// }

// function showProductDetails(product: Product) {
//   console.log(product.name);
//   console.log(product.price);

//   if (product.isAvailable) {
//     console.log('Produto disponível');
//   }
// }
// const butter: Product = {
//   name: 'Butter',
//   price: 10,
//   isAvailable: true,
// };

// showProductDetails(butter);

////////////////////////////////////////////////////////////////
// PROPRIEDADE OPCIONAL EM INTERFACES
// interface User {
//   email: string;
//   role?: string;
// }

// function showUserDetails(user: User) {
//   console.log(user.email);

//   if (user.role) {
//     console.log(user.role);
//   } else {
//     console.log('Usuário sem perfil');
//   }
// }

// const joh: User = {
//   email: 'teste@teste.com',
// };

// const lar: User = {
//   email: 'teste@teste.com',
//   role: 'Admin',
// };

// showUserDetails(joh);
// showUserDetails(lar);

////////////////////////////////////////////////////////////////
// READ ONLY
// interface Car {
//   name: string;
//   readonly wheels: number;
// }
// const fusca: Car = {
//   name: 'Fusca',
//   wheels: 4,
// };
// console.log(fusca);
// fusca.wheels = 6;

////////////////////////////////////////////////////////////////
// INDEX SIGNATURE
// interface CoordObject {
//   [index: string]: number;
// }
// const coord: CoordObject = {
//   x: 10,
//   y: 5,
//   z: 10,
// };
// console.log(coord);

////////////////////////////////////////////////////////////////
// EXTENDING TYPES
// interface Human {
//   name: string;
//   age: number;
// }

// interface SuperHuman extends Human {
//   superPower: string[];
// }

// const igor: Human = {
//   name: 'Igor',
//   age: 25,
// };

// const john: SuperHuman = {
//   name: 'John',
//   age: 25,
//   superPower: ['super strength', 'super speed'],
// };

// console.log(igor);
// console.log(john);

////////////////////////////////////////////////////////////////
// INTERSECTION TYPES
// interface Character {
//   name: string;
// }

// interface Gun {
//   type: string;
//   caliber: number;
// }

// type HumanWithGun = Character & Gun;

// const john: HumanWithGun = {
//   name: 'John',
//   type: 'Pistol',
//   caliber: 4,
// };

// const jane: Character = {
//   name: 'Jane',
// };

// const doze: Gun = {
//   type: 'Shotgun',
//   caliber: 8,
// };
// console.log(jane);
// console.log(doze);
// console.log(john);

////////////////////////////////////////////////////////////////
// READ ONLY ARRAY
// let myArray: ReadonlyArray<string> = ['Apples', 'Oranges', 'Pears'];

// //myArray[0] = 'Bananas';

// console.log(myArray);

// myArray.forEach(item => {
//   console.log(item);
// });

// myArray = myArray.map(item => {
//   return `Fruta: ${item}`;
// });

// console.log(myArray);

////////////////////////////////////////////////////////////////
// TUPLAS
// type fiveNumbers = [number, number, number, number, number];

// const fiveNums: fiveNumbers = [1, 2, 3, 4, 5];

// console.log(fiveNums);

// //const mixedArray: fiveNumbers = [1, 2, '3', 4, 5];

// type namedAndAge = [name: string, age: number];
// const igor = ['Igor', 25];
// console.log(igor);
// console.log(igor[0]);
// console.log(igor[1]);

// igor[1] = 26;
// console.log(igor);

////////////////////////////////////////////////////////////////
// TUPLAS COM READ ONLY
// function showNumbers(numbers: readonly [number, number]) {
//   numbers[0] = 100;
//   console.log(numbers[0]);
//   console.log(numbers[1]);
// }

// showNumbers([1, 2]);
// showNumbers([1, 2, 3]);
