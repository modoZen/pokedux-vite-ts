import { SET_LOADING, SET_POKEMONS } from "../actions/types"
import { PokemonDetailType } from "../api"

export type TypeState = {
    pokemons: PokemonDetailType[],
    loading : boolean
}

const initialState: TypeState = {
    pokemons: [],
    loading: false
}

export const pokemonReducer = (state:TypeState = initialState, action:any)=>{
    switch(action.type){
        case SET_POKEMONS:
            return {...state, pokemons: action.payload}
        case SET_LOADING:
            return {...state, loading: action.payload}
        default:
            return state
    }

}