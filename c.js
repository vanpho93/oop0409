const arrNum = [1, 3, 7, 8, 2];

const arrPerson = [
    { name: 'Teo', age: 10 },
    { name: 'Ti', age: 12 },
    { name: 'Tun', age: 14 }
];

// every - some - find - findIndex - 

const isOldEnough = arrPerson.some(e => {
    console.log(e.age);
    return e.age > 10;
});
console.log(isOldEnough);
