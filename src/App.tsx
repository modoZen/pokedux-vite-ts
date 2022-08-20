
import { Col } from 'antd'
import { Search } from './components/Search'
import { PokemonList } from './components/PokemonList'
import './App.css'

function App() {

  return (
    <div className="App">
      <Col span={8} offset={8}>
        <Search />
      </Col>
      <PokemonList />
    </div>
  )
}

export default App
