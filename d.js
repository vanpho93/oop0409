const arrNum = [1, 3, 7, 8, 2, 10];

const arrPerson = [
    { name: 'Ti', age: 12 },
    { name: 'Teo', age: 10 },
    { name: 'Tun', age: 14 }
];

// arrPerson.forEach((e, i) => console.log(`${i + 1}: ${e.name}`));

console.log(arrNum.sort((a, b) => a - b));

console.log(arrPerson.sort((a, b) => {
    if (a.name > b.name) return 1
    if (a.name < b.name) return -1
    return 0
}));
