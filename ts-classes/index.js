"use strict";
// CLASSES
// class User {
//   name!: string;
//   age!: number;
// }
// const igor = new User();
// console.log(igor);
// igor.name = 'Igor';
// igor.age = 25;
// //igor.job = 'fdsfds';
// console.log(igor);
////////////////////////////////////////////////////////////////
// CONSTRUCTORS
// class NewUser {
//   name;
//   age;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// const user = new NewUser('John', 33);
// console.log(user);
////////////////////////////////////////////////////////////////
// READ ONLY
// class Car {
//   name;
//   readonly wheels = 4;
//   constructor(name: string) {
//     this.name = name;
//   }
// }
// const newCar = new Car('fusca');
// console.log(newCar);
// console.log(newCar.name);
// console.log(newCar.wheels);
// newCar.name = 'Ferrari';
// //newCar.wheels = 5;
// console.log(newCar);
////////////////////////////////////////////////////////////////
// EXTENDS E SUPER
// class Machine {
//   name;
//   age;
//   constructor(name: string, age: number) {
//     this.name = name;
//     this.age = age;
//   }
// }
// class KillerMachine extends Machine {
//   guns;
//   constructor(name: string, age: number, guns: number) {
//     super(name, age);
//     this.guns = guns;
//   }
// }
// const trator = new Machine('trator', 3);
// const killerTrator = new KillerMachine('destroyer', 4, 4);
// console.log(trator);
// console.log(killerTrator);
////////////////////////////////////////////////////////////////
// METODOS
// class Dwarf {
//   name;
//   constructor(name: string) {
//     this.name = name;
//   }
//   greetings() {
//     console.log(`Hello ${this.name}`);
//   }
// }
// const jimmy = new Dwarf('jimmy');
// jimmy.greetings();
// console.log(jimmy);
// jimmy.name = 'jose';
// jimmy.greetings();
////////////////////////////////////////////////////////////////
// THIS
// class Truck {
//   model;
//   hp;
//   constructor(model: string, hp: number) {
//     this.model = model;
//     this.hp = hp;
//   }
//   showDetails() {
//     console.log(`Truck model: ${this.model}, que has ${this.hp}`);
//   }
// }
// const volvo = new Truck('volvo', 2332);
// volvo.showDetails();
////////////////////////////////////////////////////////////////
// GETTERS
// class Person {
//   name;
//   surname;
//   constructor(name: string, surname: string) {
//     this.name = name;
//     this.surname = surname;
//   }
//   get fullName() {
//     return `${this.name} ${this.surname}`;
//   }
// }
// const john = new Person('john', 'bastis');
// console.log(john);
// console.log(john.fullName);
////////////////////////////////////////////////////////////////
// SETTERS
// class Coords {
//   x!: number;
//   y!: number;
//   set fillX(x: number) {
//     if (x === 0) {
//       return;
//     }
//     this.x = x;
//     console.log(this.x);
//   }
//   set fillY(y: number) {
//     if (y === 0) {
//       return;
//     }
//     this.y = y;
//     console.log(this.x);
//   }
//   get getRecords() {
//     return {
//       x: this.x,
//       y: this.y,
//     };
//   }
// }
// const point = new Coords();
// console.log(point);
// point.fillX = 10;
// point.fillY = 10;
// //point.filly = true;
// console.log(point.getRecords);
////////////////////////////////////////////////////////////////
// HERANCA DE INTERCASES
// interface showTitle {
//   itemTitle(): string;
//   numPages(): number;
// }
// class BlogPosts implements showTitle {
//   title;
//   numberP;
//   constructor(title: string, numberP: number) {
//     this.title = title;
//     this.numberP = numberP;
//   }
//   itemTitle() {
//     return `O titulo do post é ${this.title} and number ${this.numberP}`;
//   }
//   numPages(): number {
//     return this.numberP;
//   }
// }
// const post = new BlogPosts('teste', 5);
// console.log(post.title);
// console.log(post.itemTitle());
////////////////////////////////////////////////////////////////
//OVERRIDE DE METODOS
// class Base {
//   someMethod() {
//     console.log('someMethod');
//   }
// }
// class Nova extends Base {
//   someMethod() {
//     console.log('Testando outra coisa');
//   }
// }
// const myObject = new Nova();
// myObject.someMethod();
////////////////////////////////////////////////////////////////
// VISIBILIDADE
// Public -> visibilidade default, pode ser acessado em qualquer lugar
// Protected -> accessível apenas a subclasses da classe do método, para
// acessar uma propriedade precisamos de um método
// Private -> apenas a classe que declarou o método pode utilizar.
// class C {
//   public x = 10;
// }
// class D extends C {}
// const cInstance = new C();
// console.log(cInstance.x);
// const dInstance = new D();
// console.log(dInstance.x);
////////////////////////////////////////////////////////////////
// PROTECTED FUNCTIONS
// Só pode ser acessado por meio de métodos
// class E {
//   protected x = 10;
//   protected protectedMethod() {
//     console.log('Method protected');
//   }
// }
// class F extends E {
//   showX() {
//     console.log(this.x);
//   }
//   showProtectedMethod() {
//     this.protectedMethod();
//   }
// }
// const fInstance = new F();
// fInstance.showX();
// fInstance.showProtectedMethod();
////////////////////////////////////////////////////////////////
// PRIVATE Methods
// class PrivateClass {
//   private name = 'Private';
//   showName() {
//     return this.name;
//   }
//   private privateMethod() {
//     console.log('Private Method');
//   }
//   showPrivateMethod() {
//     return this.privateMethod();
//   }
// }
// const pObj = new PrivateClass();
// //console.log(pObj.name);
// console.log(pObj.showName());
// //console.log(pObj.privateMethod());
// console.log(pObj.showPrivateMethod());
////////////////////////////////////////////////////////////////
// STATIC MEMBERS
// class StaticMembers {
//   static prop = 'Static members';
// }
// console.log(StaticMembers.prop);
////////////////////////////////////////////////////////////////
// GENERIC CLASS
// class Item<T, U> {
//   first;
//   second;
//   constructor(first: T, second: U) {
//     this.first = first;
//     this.second = second;
//   }
//   get showFirst() {
//     return this.first;
//   }
// }
// const newItem = new Item('Caixa', 'Surpresa');
// console.log(newItem);
// console.log(typeof newItem.first);
// console.log(newItem.showFirst);
// const newItem2 = new Item(12, true);
// console.log(newItem2);
/////////////////////////////////////////////////////////////////
// PARAMETERS PROPERTIES
// class ParameterProperties {
//   constructor(public name: string, private age: number, private city: string) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//   }
//   get showAge() {
//     return this.age;
//   }
//   get showCity() {
//     return this.city;
//   }
// }
// const john = new ParameterProperties('John', 30, 'NY');
// console.log(john.name);
// console.log(john.showAge);
// console.log(john.showCity);
////////////////////////////////////////////////////////////////
// CLASS EXPRESSIONS
// const myClass = class<T> {
//   name;
//   constructor(name: T) {
//     this.name = name;
//   }
// };
// const pessoa = new myClass('John');
// console.log(pessoa);
// console.log(pessoa.name);
////////////////////////////////////////////////////////////////
// ABSTRACT CLASS
// abstract class AbstractClass {
//   abstract showName(): void;
// }
// //const newObj = new AbstractClass();
// class AbstractExample extends AbstractClass {
//   name: string;
//   constructor(name: string) {
//     super();
//     this.name = name;
//   }
//   showName() {
//     console.log(this.name);
//   }
// }
// const newObj = new AbstractExample('John');
// newObj.showName();
////////////////////////////////////////////////////////////////
// RELACOES ENTRE CLASSES
// class Dog {
//   name!: string;
// }
// class Cat {
//   name!: string;
// }
// const doguinho: Dog = new Cat();
// console.log(doguinho);
