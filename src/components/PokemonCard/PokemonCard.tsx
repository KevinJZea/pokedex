import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { capitalize, getPokemonIdFromUrl } from '../../utils/helpers';

import PokeBall from '../../assets/images/pokeball.png';
import './PokemonCard.css';

export const PokemonCard = ({ name, url, onClick }: PokemonCardProps) => {
  const navigate = useNavigate();

  const selectedPokemon = useSelector(
    (state: RootState) => state.selectedPokemon
  );

  const handleOnDoubleClick = () => {
    const pokemonId = getPokemonIdFromUrl(url);
    navigate(`/pokemons/${pokemonId}`);
  };

  return (
    <button
      className={`PokemonCard ${selectedPokemon.name === name ? 'active' : ''}`}
      onClick={onClick}
      onDoubleClick={handleOnDoubleClick}
    >
      <span>{capitalize(name)}</span>
      <img
        className="PokemonCard--pokeball"
        src={PokeBall}
        alt=""
      />
    </button>
  );
};
