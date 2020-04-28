import React, {useState} from 'react';
import styled from 'styled-components';

import pokemonTYPE from '../models/pokemon';

import typeColor from '../utils/typeTheme';

type Props = {
  pokemon: pokemonTYPE
}

const PokeCard = styled.div<{isActive: boolean}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 358px;
  width: 250px;
  margin-top: 15px;
  box-shadow: 4px 3px 6px 0px rgba(0,0,0,0.1);
  border: 4px solid ${props => props.isActive ? 'palevioletred' : 'white'};
`;

const TypeSpan = styled.span<{type: string}>`
  background-color: ${props => typeColor(props.type)};
  width: 66px;
  height: 34px;
  padding: 8px;
  text-align: center;
  border-radius: 12px;
`;


const PokemonCard: React.FC<Props> = ({pokemon}) => {
  const {created, id, name, picture, types} = pokemon;
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
        {types.map((type) => <TypeSpan key={type} type={type}>{type}</TypeSpan>)}
        <p><small>{created.toDateString()}</small></p>
      </PokeCard>
    </>
  );
};

export default PokemonCard;