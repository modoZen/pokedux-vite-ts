import { useEffect } from 'react'
import { Search } from './components/Search'
import { PokemonList } from './components/PokemonList'
import { Col, Spin } from 'antd'
import { useAppDispatch, useAppSelector } from './slices'
import { fetchPokemonsWithDetails } from './slices/dataSlice'
import logo from './statics/logo.svg'
import './App.css'

function App() {
  const pokemons = useAppSelector((state)=>state.data.pokemons)
  const searched = useAppSelector(state=>state.data.searched)
  const pokemonsSearched = pokemons.filter(pokemon=>pokemon.name.toLowerCase().includes(searched.toLowerCase()))
  const loading = useAppSelector((state)=>state.ui.loading)
  const dispatch = useAppDispatch();
  useEffect(()=>{
    dispatch(fetchPokemonsWithDetails())
  },[])
  return (
    <div className="App">
      <Col span={4} offset={10}>
        <img src={logo} alt="Pokedux" />
      </Col>
      <Col span={8} offset={8}>
        <Search />
      </Col>
      {loading?
      <Col offset={12} >
        <Spin spinning size='large' />
      </Col>
      :
      <PokemonList pokemons={pokemonsSearched} />
      }
    </div>
  )
}

export default App;
