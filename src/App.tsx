import { useEffect, useState } from 'react'
import { connect, useDispatch, useSelector } from 'react-redux'
import { Col } from 'antd'
import { Search } from './components/Search'
import { PokemonList } from './components/PokemonList'
import { getPokemons, PokemonType } from './api'
import logo from './statics/logo.svg'
import './App.css'
import { setPokemons } from './actions'
import { TypeState } from './reducers/pokemon'

function App() {
  const pokemons = useSelector((state:TypeState)=>state.pokemons)
  const dispath = useDispatch();
  useEffect(()=>{
    async function fetchPokemon(){
        const pkmns = await getPokemons();
        dispath(setPokemons(pkmns as PokemonType[]))
    } 
    fetchPokemon();
  },[])
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Search />
      </Col>
      <PokemonList pokemons={pokemons} />
    </div>
  )
}


export default App;
