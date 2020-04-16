import React, { useState } from 'react';
import pokemonTYPE from './models/pokemon'
import mockPokemons from './models/mock-pokemon'

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<pokemonTYPE[]>(mockPokemons);

  return (
    <>
      <h1>Pokédex</h1>
      <p>Il y a {pokemons.length} pokémons dans le pokédex.</p>
    </>
  )
}

export default App;