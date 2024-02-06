import importGreet from './greet';
import { x } from './variable';
import { myFunction, a, b } from './multiple';
import { someName as name } from './changename';
import * as myNumbers from './numbers';
import { Human } from './mytype';

// IMPORTANDO ARQUIVOS
importGreet();

console.log(x);
console.log(a);
console.log(b);
myFunction();
console.log(name);

myNumbers.showNumber();
const nX = myNumbers.n1;
console.log(nX);

class User implements Human {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const john = new User('John', 32);
console.log(john);
