//
// Object destructuring
//
//

// const person = {
//     name: 'Juancho',
//     age: 25,
//     location: {
//         city: 'Grecia',
//         temp: 28
//     }
// };

// const {name: firstName = 'Default name', age} = person;

// console.log(`${firstName} is ${age}.`);

// const { city, temp: temperature } = person.location;

// if(city && temperature)  {
//     console.log(`It's ${temperature} in ${city}`);
// }

// const book = {
//     title: 'Ego is the enemy',
//     author: 'Ryan Holiday',
//     publisher: {
//         name: 'Penguin'
//     }
// }

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

//
// Array destructuring
//
//

const address = ['Rincon de Salas', 'Grecia', 'Alajuela', '20300'];
const [, city, street='New York'] = address;

console.log(`You are in ${street} ${city}.`);

const item = ['Coffe (hot)', '$2.00', '$2.50', '$2.75']
const [itemName, ,mediumCoffe] = item;

console.log(`A medium ${itemName} costs ${mediumCoffe}`);
