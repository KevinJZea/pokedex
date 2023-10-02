import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { customizePokemonName, getPokemonIdFromUrl } from '../../utils/helpers';

import PokeBall from '../../assets/images/pokeball.png';
import './PokemonCard.css';

export const PokemonCard = ({ name, url, onClick }: PokemonCardProps) => {
  const clickCount = useRef(0);
  const navigate = useNavigate();

  const selectedPokemon = useSelector(
    (state: RootState) => state.selectedPokemon
  );

  const handleOnDoubleClick = () => {
    const pokemonId = getPokemonIdFromUrl(url);
    navigate(`/pokemons/${pokemonId}`);
  };

  const handleOnClick = () => {
    clickCount.current++;

    if (clickCount.current === 1) onClick();
    else if (clickCount.current === 2) handleOnDoubleClick();

    setTimeout(() => {
      clickCount.current = 0;
    }, 300);
  };

  return (
    <button
      className={`PokemonCard ${selectedPokemon.name === name ? 'active' : ''}`}
      onClick={handleOnClick}
      onDoubleClick={handleOnDoubleClick}
    >
      <span>{customizePokemonName(name)}</span>
      <img
        className="PokemonCard--pokeball"
        src={PokeBall}
        alt=""
      />
    </button>
  );
};
