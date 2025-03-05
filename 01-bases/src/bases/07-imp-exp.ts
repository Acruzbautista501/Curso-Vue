import heroes, { type Owner} from "../data/heroes";



export const getHeroById = ( id: number) => {
   return heroes.find( hero => hero.id === id);
}

//console.log(getHeroById(100));

export const getHeroesByOwner = (owner: Owner) /* Esto es útil cuando se sabe que la información no se va expandir*/ => {
    return heroes.filter( hero => hero.owner === owner) ?? {};
}

console.log(getHeroesByOwner('Marvel'));