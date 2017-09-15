const arrNum = [1, 3, 7, 8, 2];

// console.log(arrNum.reduce((a, b) => a + b))

const arrPerson = [
    { name: 'Teo', age: 10 },
    { name: 'AnhTi', age: 12 },
    { name: 'EmTun', age: 14 }
];

const arrAge = arrPerson.map(e => e.age);
console.log(arrAge.reduce((a, b) => a + b))

// every - some - find - findIndex - sort - reduce

// const isOldEnough = arrPerson.some(e => {
//     console.log(e.age);
//     return e.age > 10;
// });
// console.log(isOldEnough);

// const ti = arrPerson.find(person => person.name === 'Ti');
const index = arrPerson.findIndex(person => person.name.includes('Ti'));
console.log(index);
