import { PokemonDetailType, PokemonType } from "../api";
import { SET_POKEMONS } from "./types";


export const setPokemons = (payload: PokemonDetailType[])=>({
    type: SET_POKEMONS,
    payload
})