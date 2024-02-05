"use strict";
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
function reviewUser(review) {
    if (!review) {
        console.log('Não enviou review');
        return;
    }
    console.log(`Review: ${review}`);
}
reviewUser(false);
reviewUser(1);
reviewUser(2);
reviewUser(3);
reviewUser(4);
reviewUser(5);
