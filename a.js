const arrNum = [1, 3, 7, 8, 2];

const arrPerson = [
    { name: 'Teo', age: 10 },
    { name: 'Ti', age: 12 },
    { name: 'Tun', age: 14 }
];

function getArrName(arr) {
    let arrOutput = [];
    for(let i = 0; i < arr.length; i++) {
        arrOutput.push(arr[i].name);
    }
    return arrOutput;
}

function getArrAge(arr) {
    let arrOutput = [];
    for(let i = 0; i < arr.length; i++) {
        arrOutput.push(arr[i].age);
    }
    return arrOutput;
}

function getArrSqr(arr) {
    let arrOutput = [];
    for(let i = 0; i < arr.length; i++) {
        arrOutput.push(arr[i] * arr[i]);
    }
    return arrOutput;
}

console.log(getArrSqr(arrNum));
console.log(getArrAge(arrPerson));
console.log(getArrName(arrPerson));
