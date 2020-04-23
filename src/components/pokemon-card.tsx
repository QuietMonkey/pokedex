import React from 'react';
import styled from 'styled-components';

import pokemonTYPE from '../models/pokemon';

type Props = {
  pokemon: pokemonTYPE
}

const PokeCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 330px;
  width: 250px;
  margin-top: 15px;
  box-shadow: 4px 3px 8px 0px rgba(0,0,0,0.1);
`;


const PokemonCard: React.FC<Props> = ({pokemon}) => {
  const {created, id, name, picture} = pokemon;

  return(
    <>
      <PokeCard key={id}>
        <h3>{name}</h3>
        <img src={picture} alt={name}/>
        <p><small>{created.toDateString()}</small></p>
      </PokeCard>
    </>
  );
};

export default PokemonCard;