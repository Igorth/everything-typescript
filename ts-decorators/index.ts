// DECORATORS
// import { someName } from '../ts-modules/changename';
// function myDecorator() {
//   console.log('Iniciando Decorator');

//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log('Executando Decorator');
//     console.log('Target: ' + target);
//     console.log('Property Key:' + propertyKey);
//     console.log('Descriptor:' + descriptor);
//   };
// }

// class myClass {
//   name!: string;
//   @myDecorator()
//   testing() {
//     console.log('terminando excucao do metodo');
//   }
// }

// const myObj = new myClass();
// myObj.testing();

////////////////////////////////////////////////////////////////
// MULTIPLOS DECORATORS
// function a() {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log('executou a');
//   };
// }

// function b() {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     console.log('executou b');
//   };
// }

// class MultipleDecorators {
//   @a()
//   @b()
//   testing() {
//     console.log('Terminando execucao');
//   }
// }

// const multiple = new MultipleDecorators();
// multiple.testing();

////////////////////////////////////////////////////////////////
// CLASS DECORATOR
// function classDec(constructor: Function) {
//   console.log(constructor.name);

//   if (constructor.name === 'User') {
//     console.log('Criando usuario');
//   }
// }

// @classDec
// class User {
//   name;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// const user = new User('John');
// console.log(user);

////////////////////////////////////////////////////////////////
// DECORATOR DE METODO
// function enumerable(value: boolean) {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     descriptor.enumerable = value;
//   };
// }

// class Machine {
//   name;

//   constructor(name: string) {
//     this.name = name;
//   }

//   @enumerable(true)
//   showName() {
//     console.log(this);
//     return `O nome da maquina é: ${this.name}`;
//   }
// }

// const trator = new Machine('trator');
// console.log(trator.showName());

////////////////////////////////////////////////////////////////
// ACCESSOR DECORATOR
// function enumerable(value: boolean) {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     descriptor.enumerable = value;
//   };
// }

// class Monster {
//   name?;
//   age?;

//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }

//   @enumerable(true)
//   get showName() {
//     return `Nome do monstro: ${this.name}`;
//   }

//   get showAge() {
//     return `Idade do monstro: ${this.age}`;
//   }
// }

// const charmander = new Monster('charmander', 10);
// console.log(charmander);
// console.log(charmander.showName);
// console.log(charmander.showAge);

////////////////////////////////////////////////////////////////
// PROPERTY DECORATOR
// function formatNumber() {
//   return function (target: Object, propertyKey: string) {
//     let value: string;

//     const getter = function () {
//       return value;
//     };

//     const setter = function (newVal: string) {
//       value = newVal.padStart(5, '0');
//     };

//     Object.defineProperty(target, propertyKey, {
//       get: getter,
//       set: setter,
//     });
//   };
// }

// class ID {
//   @formatNumber()
//   id;

//   constructor(id: string) {
//     this.id = id;
//   }
// }

// const newItem = new ID('1');
// console.log(newItem);
// console.log(newItem.id);

////////////////////////////////////////////////////////////////
// EXEMPLO REAL COM CLASS DECORATOR
// function createdDate(created: Function) {
//   created.prototype.createdAt = new Date();
// }

// @createdDate
// class Book {
//   id;
//   createdAt?: Date;

//   constructor(id: number) {
//     this.id = id;
//   }
// }

// class Pen {
//   id;

//   constructor(id: number) {
//     this.id = id;
//   }
// }

// const newBook = new Book(12);
// const newPen = new Pen(13);

// console.log(newBook);
// console.log(newPen);
// console.log(newBook.createdAt);

////////////////////////////////////////////////////////////////
// EXEMPLO REAL METHOD DECORATOR
// function checkIfUserPosted() {
//   return function (
//     target: Object,
//     key: string | Symbol,
//     descriptor: PropertyDescriptor
//   ) {
//     const childFunction = descriptor.value;
//     console.log('Child function', childFunction);
//     descriptor.value = function (...args: any[]) {
//       if (args[1] === true) {
//         console.log('Usuario já postou');
//         return null;
//       } else {
//         return childFunction.apply(this, args);
//       }
//     };
//     return descriptor;
//   };
// }

// class Post {
//   alreadyPosted = false;

//   @checkIfUserPosted()
//   post(content: string, alreadyPosted: boolean) {
//     this.alreadyPosted = true;
//     console.log(`Post do usuário: ${content}`);
//   }
// }

// const newPost = new Post();
// newPost.post('Primeiro post', newPost.alreadyPosted);
// newPost.post('Segundo post', newPost.alreadyPosted);
// newPost.post('Terceiro post', newPost.alreadyPosted);

////////////////////////////////////////////////////////////////
// PROPERTY DECORATOR
// function Max(limit: number) {
//   return function (target: Object, propertyKey: string) {
//     let value: string;

//     const getter = function () {
//       return value;
//     };

//     const setter = function (newVal: string) {
//       if (newVal.length > limit) {
//         console.log(`O valor deve ter no maximo ${limit} digitos`);
//         return;
//       } else {
//         value = newVal;
//       }
//     };

//     Object.defineProperty(target, propertyKey, {
//       get: getter,
//       set: setter,
//     });
//   };
// }
// class Admin {
//   @Max(10)
//   username;

//   constructor(username: string) {
//     this.username = username;
//   }
// }

// const admin = new Admin('adminadmin13123');
// console.log(admin.username);
