// GENERICS
// function showData<T>(arg: T): string {
//   return `O dado é ${arg}`;
// }

// console.log(showData(1));
// console.log(showData('a'));
// console.log(showData(true));

////////////////////////////////////////////////////////////////
// CONSTRAINT EM GENERICS
// function showProductName<T extends { name: string }>(obj: T) {
//   return `O nome do produto é ${obj.name}`;
// }

// const shirt = { name: 'Shirt' };
// console.log(showProductName(shirt));

// const pants = { name: 'Pants', price: 10 };
// console.log(showProductName(pants));

// const pants2 = { price: 32 };
// console.log(showProductName(pants2));

////////////////////////////////////////////////////////////////
// INTERFACES COM GENERICS
// interface MyObject<T, U, Q> {
//   name: string;
//   wheels: T;
//   engine: U;
//   color: Q;
// }

// type Car = MyObject<number, number, string>;
// type Pen = MyObject<boolean, boolean, string>;

// const myCar: Car = {
//   name: 'Fusca',
//   wheels: 4,
//   engine: 2,
//   color: 'Verde',
// };

// const myPen: Pen = {
//   name: 'Pen',
//   wheels: false,
//   engine: false,
//   color: 'red',
// };

// console.log(myCar);
// console.log(myPen);

////////////////////////////////////////////////////////////////
// TYPE PARAMETERS
// function getSomeKey<T, K extends keyof T>(obj: T, key: K) {
//   return `A chave está presente no objeto e tem o valor de ${obj[key]}`;
// }

// const server = {
//   hd: 'http://localhost',
//   port: 3000,
// };

// console.log(getSomeKey(server, 'port'));

////////////////////////////////////////////////////////////////
// KEYOF TYPE OPERATOR
// type Character = {
//   name: string;
//   age: number;
//   hasDriverLicense: boolean;
// };

// type C = keyof Character;

// function showCharName(obj: Character, key: C): string {
//   return `Object ${obj[key]}`;
// }

// const john: Character = {
//   name: 'John',
//   age: 25,
//   hasDriverLicense: true,
// };

// console.log(showCharName(john, 'age'));

////////////////////////////////////////////////////////////////
// TYPEOF TYPE OPERATOR
// const userName: string = 'John';
// const userName2: typeof userName = 'Pedro';

// const userName3: typeof userName = 3;

////////////////////////////////////////////////////////////////
// INDEXED ACCESS TYPES
// type Truck = {
//   km: number;
//   kg: number;
//   description: string;
// };

// type Km = Truck['km'];

// const newTruck: Truck = {
//   km: 1000,
//   kg: 1000,
//   description: 'Truck',
// };
// console.log(newTruck);

// function showKm(km: Km) {
//   console.log(km);
// }
// showKm(newTruck.km);

// const newCar = {
//   km: 1000,
//   kg: 1000,
// };

// console.log(showKm(newCar.km));

/////////////////////////////////////////////////////////
// CONDITIONAL EXPRESSIONS TYPE
// interface A {}

// interface B extends A {}

// interface Teste {
//   showName(): string;
// }

// type Mytype = B extends A ? number : string;

// const myType: Mytype = 5;

// console.log(myType);

// type myType2 = Teste extends { showNumber(): number } ? string : boolean;

////////////////////////////////////////////////////////
// TEMPLATE LITERALS TYPE
// type testA = 'test';

// type CustomType = `some ${testA}`;

// const testing: CustomType = 'some test';

////////////////////////////////////////////////////////
