// function sum(a: number | string, b: number | string) {
//   if (typeof a === 'string' && typeof b === 'string') {
//     console.log(parseFloat(a) + parseFloat(b));
//   } else if (typeof a === 'number' && typeof b === 'number') {
//     console.log(a + b);
//   } else {
//     console.log('Impossible');
//   }
// }
// sum('3', '4');
// sum(3, 4);
// sum(3, '4');

////////////////////////////////////////////////////////////////
// function operations(arr: number[], operation?: string | undefined) {
//   if (operation) {
//     if (operation === 'sum') {
//       const sum = arr.reduce((i, total) => i + total);
//       console.log(sum);
//     } else if (operation === 'multiply') {
//       const multiply = arr.reduce((i, total) => i * total);
//       console.log(multiply);
//     }
//   } else {
//     console.log('Impossible');
//   }
// }

// operations([1, 2, 3, 4, 5]);
// operations([1, 2, 3, 4, 5], 'sum');
// operations([1, 2, 3, 4, 5], 'multiply');

////////////////////////////////////////////////////////////////
// INSTANCE OF
// class User {
//   name;

//   constructor(name: string) {
//     this.name = name;
//   }
// }

// class SuperUser extends User {
//   constructor(name: string) {
//     super(name);
//   }
// }

// const jhon = new User('John');
// const paul = new SuperUser('Paul');

// console.log(jhon);
// console.log(paul);

// function userGreeting(user: object) {
//   if (user instanceof SuperUser) {
//     console.log(`Hello SuperUser ${user.name}`);
//   } else if (user instanceof User) {
//     console.log(`Hello User ${user.name}`);
//   }
// }

// userGreeting(jhon);
// userGreeting(paul);

////////////////////////////////////////////////////////////////
// OPERADOR IN
class Dog {
  name;
  breed;

  constructor(name: string, breed?: string) {
    this.name = name;
    if (breed) [(this.breed = breed)];
  }
}

const turca = new Dog('Turca');
const soda = new Dog('Soda', 'Labrador');

function showDogDetails(dog: Dog) {
  if ('breed' in dog) {
    console.log(`Dog ${dog.name} has ${dog.breed}`);
  } else {
    console.log(`Dog has no breed`);
  }
}

showDogDetails(turca);
showDogDetails(soda);
