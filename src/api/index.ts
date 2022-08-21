import axios from "axios";

export type PokemonType = {
    name: string;
    url: string
}

export type PokemonDetailType = {
    name: string;
    image : string;
    types: any[];
    sprites: any;
    abilities: any;
}

type GetPokemonsResponse = {
    results: PokemonType[]
}

type GetPokemonsDetailResponse = PokemonDetailType

export const getPokemons = async ()=>{
    try {
        const { data } = await axios.get<GetPokemonsResponse>('https://pokeapi.co/api/v2/pokemon?limit=151');
        return data.results;
    } catch (err) {
        console.error(err);
    }
}

export const getPokemonDetails = async (pokemon:PokemonType) => {
    const { data } = await axios.get<GetPokemonsDetailResponse>(pokemon.url);
    return data;
}