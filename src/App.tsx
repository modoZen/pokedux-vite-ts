import { useEffect, useState } from 'react'
import { Col } from 'antd'
import { Search } from './components/Search'
import { PokemonList } from './components/PokemonList'
import { getPokemons, PokemonType } from './api'
import logo from './statics/logo.svg'
import './App.css'

function App() {
  const [pkmns,setPkmns] = useState<PokemonType[]>([]);
  useEffect(()=>{
    async function fetchPokemon(){
        const pokemons = await getPokemons();
        setPkmns(pokemons as PokemonType[])
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
      <PokemonList pokemons={pkmns} />
    </div>
  )
}

export default App
