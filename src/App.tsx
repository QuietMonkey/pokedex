import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import pokemonTYPE from './models/pokemon';
import mockPokemons from './models/mock-pokemon';

const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const PokeList = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  padding: 20px 40px;
`;

const PokeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 330px;
  width: 250px;
  margin-top: 15px;
  box-shadow: 4px 3px 8px 0px rgba(0,0,0,0.1);
`;

const App: React.FC = () => {
  const [pokemons, setPokemons] = useState<pokemonTYPE[]>([]);
  useEffect(() => {
    setPokemons(mockPokemons)
  }, [])

  return (
    <>
      <Title>
        <h1>Pokédex</h1>
        <p>Il y a {pokemons.length} pokémons dans le pokédex.</p>
      </Title>
      <PokeList>
        {pokemons.map(({created, id, name, picture}) => (
          <PokeCard key={id}>
            <h3>{name}</h3>
            <img src={picture} alt={name}/>
            <p><small>{created.toDateString()}</small></p>
          </PokeCard>
        ))}
      </PokeList>
    </>
  )
}

export default App;