import {heroes} from '../data/arrayHeroes';

export const getHeroesByPublisher = (publisher) => {

    const validPublisher = ['DC Comics', 'Marvel Comics'];

    if (!validPublisher.includes(publisher)) {
        throw new Error(`Error ${publisher} no es válido`);

    }else {
        const listHeroes = heroes.filter((heroe) => heroe.publisher === publisher);
        return listHeroes;
    }

}

export const getHeroeById = (id) => {
    const [heroe] = heroes.filter((heroe) => heroe.id === id);
    return heroe;
}