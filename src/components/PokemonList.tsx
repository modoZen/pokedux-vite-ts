import { FC } from "react";
import { PokemonDetailType } from "../api";
import { PokemonCard } from "./PokemonCard";
import './PokemonList.css'

interface Props {
    pokemons: PokemonDetailType[]
}

const PokemonList:FC<Props> = ({ pokemons }) =>{
    return (
        <div className="PokemonList">
            {pokemons.map((pokemon,index)=>(
                <PokemonCard 
                    name={pokemon.name} 
                    types={pokemon.types} 
                    image={pokemon.sprites.other.home.front_default}  
                    key={pokemon.name} 
                />
            ))}
        </div>
    )
}

PokemonList.defaultProps = {
    pokemons: Array(10).fill('')
}

export {
    PokemonList
}