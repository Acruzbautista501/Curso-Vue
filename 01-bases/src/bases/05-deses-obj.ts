interface Hero {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

export const person: Hero = {
    name: 'Tony',
    age: 45,
    codeName: 'Ironman',
    //power: 'Money',
}

/* console.log(person.name);
console.log(person.age);
console.log(person.codeName); */

//const { age, name, power = 'No tiene poder' } = person; // puede ser un Objeto o un Arreglo 

/*console.log ({
    age,
    name,
    power
}) */

/*const createHero = (args: any) => ({
    id: 123123,
    name: args.name,
    age: args.age,
    codeName: args.codeName,
    power: args.power ?? 'No tiene poder',
})*/

interface CreateHeroArgs {
    name: string;
    age: number;
    codeName: string;
    power?: string;
}

const createHero = ({name, age, codeName, power}: CreateHeroArgs) => ({
    id: 123123,
    name: name,
    age: age,
    codeName: codeName,
    power: power ?? 'No tiene poder',
})

console.log(createHero(person))