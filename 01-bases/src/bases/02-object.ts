export const person = {
    lastName: 'Stark',
    age: 45,
    adress:{
        city: 'New York',
        zip: '51323',
        lat: '14.23232',
        lng : '34.5667'
    }
} //as const //Restricción para hacer constante a un objeto

person.age = 55;

//const person2 = {...person}; se utiliza para objetos que no esten anidados

const person2 = structuredClone(person) //Sirve para hacer clones de objetos sin tener que importar nada

person2.lastName = 'Parker'
person2.adress.city = 'Los Angeles'

console.log({person})
console.log({person2})