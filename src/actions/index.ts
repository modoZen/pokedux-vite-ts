import { getPokemonDetails, PokemonDetailType, PokemonType } from "../api";
import { SET_POKEMONS } from "./types";


export const setPokemons = (payload: PokemonDetailType[])=>({
    type: SET_POKEMONS,
    payload
})

export const getPokemonsWithDetails = 
(pokemons:PokemonType[]=[]) => 
async (dispatch: any) =>{
    const pkmnsDetailed = await Promise.all((pokemons as PokemonType[]).map(pkmn=>getPokemonDetails(pkmn)))
    dispatch(setPokemons(pkmnsDetailed))
}