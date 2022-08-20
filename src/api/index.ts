import axios from "axios";

export type PokemonType = {
    name: string;
    url : string
}

type GetPokemonsResponse = {
    results: PokemonType[]
}

export const getPokemons = async ()=>{
    try {
        const { data } = await axios.get<GetPokemonsResponse>('https://pokeapi.co/api/v2/pokemon?limit=151');
        return data.results;
    } catch (err) {
        console.error(err);
    }
}