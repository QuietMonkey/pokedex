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
  height: 358px;
  width: 250px;
  margin-top: 15px;
  box-shadow: 4px 3px 6px 0px rgba(0,0,0,0.1);
  border: 4px solid ${props => props.isActive ? 'palevioletred' : 'white'};
`;

const TypeSpan = styled.span<{type: string}>`
  background-color: ${props => {
    if (props.type === 'Combat') return 'orange'
    if (props.type === 'Eau') return 'lightblue'
    if (props.type === 'Electrik') return 'yellow'
    if (props.type === 'Fée') return 'pink'
    if (props.type === 'Feu') return '#dd3c3c'
    if (props.type === 'Insecte') return '#d16a47'
    if (props.type === 'Plante') return '#a6e963'
    if (props.type === 'Poison') return '#8c47d1'
    if (props.type === 'Psy') return '#c763e9'
    if (props.type === 'Vol') return '#5778db'
    return 'lightgrey'
  }};
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