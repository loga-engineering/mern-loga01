
const k = 'age';

const person = {
    name: 'Toto',
    address: 'Bamako',
    [k]: 10,
}

person['age'] = 10;

const key = 'address';

console.log(person[key]);
console.log(person[k]);
