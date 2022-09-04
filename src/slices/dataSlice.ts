import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { getPokemonDetails, getPokemons, PokemonDetailType, PokemonType } from "../api";
import { setLoading } from "./uiSlice";

type InitialState = {
    pokemons: PokemonDetailType[],
    searched : string
}

const initialState: InitialState = {
    pokemons: [],
    searched: ''
}

export const fetchPokemonsWithDetails = createAsyncThunk(
    'data/fetchPokemonsWithDetails',
    async (_,{dispatch}) =>{
        try {
            dispatch(setLoading(true))
            const pkmns = await getPokemons();
            const pkmnsDetailed = await Promise.all((pkmns as PokemonType[]).map(pkmn=>getPokemonDetails(pkmn)))
            dispatch(setPokemons(pkmnsDetailed))
            dispatch(setLoading(false))
        } catch (err) {
            console.error(err)
            dispatch(setLoading(false))
        }

    }
)

export const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers:{
        setPokemons: (state,action:PayloadAction<PokemonDetailType[]>)=>{
            state.pokemons = action.payload
        },
        setFavorite: (state, action:PayloadAction<{pokemonId:number}>)=>{
            const currentPokemonIndex = state.pokemons.findIndex(
                (pkmn:PokemonDetailType) => {
                    return pkmn.id  === action.payload.pokemonId
                }
            )
            if(currentPokemonIndex >= 0){
                const isFavorite = state.pokemons[currentPokemonIndex].favorite
                state.pokemons[currentPokemonIndex].favorite = !isFavorite
            }
        },
        setSearched: (state, action:PayloadAction<string>)=>{
            state.searched = action.payload
        }
    }
})

export const dataReducer = dataSlice.reducer;

export const { setPokemons, setFavorite, setSearched } = dataSlice.actions;