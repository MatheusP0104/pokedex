import PokemonCard from './PokemonCard'
import { useState } from 'react'

const POKEMONS = [
 {
    id: 1,
    name: 'Bulbasaur',
    type: 'Grama / Veneno',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
  },

  {
    id: 4,
    name: 'Charmander',
    type: 'Fogo',
    imageUrl:
      'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png',
  },

  {
   id: 25,
   name: 'Pikachu',
   type: 'Elétrico',
   imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
 },
 {
  id: 7,
  name: 'Squirtle',
  type: 'Água',
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png',
},

{
  id: 39,
  name: 'Jigglypuff',
  type: 'Normal / Fada',
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png',
},

{
  id: 52,
  name: 'Meowth',
  type: 'Normal',
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png',
},

{
  id: 54,
  name: 'Psyduck',
  type: 'Água',
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png',
},

{
  id: 58,
  name: 'Growlithe',
  type: 'Fogo',
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png',
},

{
  id: 92,
  name: 'Gastly',
  type: 'Fantasma / Veneno',
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png',
},

{
  id: 133,
  name: 'Eevee',
  type: 'Normal',
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png',
},

{
  id: 143,
  name: 'Snorlax',
  type: 'Normal',
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png',
},

{
  id: 149,
  name: 'Dragonite',
  type: 'Dragão / Voador',
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png',
},

{
  id: 150,
  name: 'Mewtwo',
  type: 'Psíquico',
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png',
},

{
  id: 6,
  name: 'Charizard',
  type: 'Fogo / Voador',
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png',
},

{
  id: 94,
  name: 'Gengar',
  type: 'Fantasma / Veneno',
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png',
},

{
  id: 130,
  name: 'Gyarados',
  type: 'Água / Voador',
  imageUrl:
    'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png',
},

]

function PokemonList() {
  const [pokemons] = useState(POKEMONS)
  const [filtro, setFiltro] = useState('')

  const listaFiltrada = pokemons.filter((p) =>
  p.name.toLowerCase().includes(filtro.toLowerCase())
)


  return (
    <section className="busca-container">
    <h2>Catálogo</h2>
     <label htmlFor="busca">
    Buscar por nome:
  </label>

  <input
    id="busca"
    type="search"
    value={filtro}
    onChange={(e) => setFiltro(e.target.value)}
    placeholder="Ex.: char"
  />

  <p className="contador">
    Mostrando {listaFiltrada.length} Pokemon(s)
  </p>

  {listaFiltrada.length === 0 && (
    <p className="erro-busca">
      Nenhum Pokemon encontrado para essa busca
    </p>
  )}
      <div className="pokemon-list">

  {listaFiltrada.map((pokemon) => (
    <PokemonCard 
      key={pokemon.id}
      id={pokemon.id}
      name={pokemon.name}
      type={pokemon.type}
      imageUrl={pokemon.imageUrl}
    />
  ))}

</div>

    </section>
  )
}

export default PokemonList
