import { getPokemonDetails, PokemonDetailType, PokemonType } from "../api";
import { SET_FAVORITE, SET_LOADING, SET_POKEMONS } from "./types";


export const setPokemons = (payload: PokemonDetailType[])=>({
    type: SET_POKEMONS,
    payload
})

export const setLoading = (payload:boolean)=>({
    type: SET_LOADING,
    payload
})

export const setFavorite = (payload:any)=>({
    type: SET_FAVORITE,
    payload
})

export const getPokemonsWithDetails = 
(pokemons:PokemonType[]=[]) => 
async (dispatch: any) =>{
    const pkmnsDetailed = await Promise.all((pokemons as PokemonType[]).map(pkmn=>getPokemonDetails(pkmn)))
    dispatch(setPokemons(pkmnsDetailed))
}