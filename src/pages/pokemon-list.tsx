import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import pokemonTYPE from '../models/pokemon';
import mockPokemons from '../models/mock-pokemon';

import PokemonCard from '../components/pokemon-card';

const PokeList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px 40px;
`;

const PokemonList: React.FC = () => {
  const [pokemons, setPokemons] = useState<pokemonTYPE[]>([]);
  useEffect(() => {
    setPokemons(mockPokemons)
  }, [])

  return(
    <PokeList>
      {pokemons.map((pokemon) => <PokemonCard pokemon={pokemon}/>)}
    </PokeList>
  );
};

export default PokemonList