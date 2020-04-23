import React, {useState} from 'react';
import styled from 'styled-components';

import pokemonTYPE from '../models/pokemon';

type Props = {
  pokemon: pokemonTYPE
}

const PokeCard = styled.div<{isActive: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 330px;
  width: 250px;
  margin-top: 15px;
  box-shadow: 4px 3px 6px 0px rgba(0,0,0,0.1);
  border: 4px solid ${props => props.isActive ? 'palevioletred' : '#f5f5f5'};
`;


const PokemonCard: React.FC<Props> = ({pokemon}) => {
  const {created, id, name, picture} = pokemon;
  const [isActive, setIsActive] = useState<boolean>(false);

  return(
    <>
      <PokeCard 
        key={id} 
        isActive={isActive} 
        onMouseEnter={() => setIsActive(true)} 
        onMouseLeave={() => setIsActive(false)}
      >
        <h3>{name}</h3>
        <img src={picture} alt={name}/>
        <p><small>{created.toDateString()}</small></p>
      </PokeCard>
    </>
  );
};

export default PokemonCard;