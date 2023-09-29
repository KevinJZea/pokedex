import { useDispatch, useSelector } from 'react-redux';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';
import { RootState } from '../../store/store';

import './PokemonsList.css';
import { setSelectedPokemon } from '../../store/selectedPokemonReducer';

export const PokemonsList = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector(
    (state: RootState) => state.pokemons
  ) as Pokemon[];

  return (
    <>
      {pokemons.map((pokemon) => (
        <PokemonCard
          key={pokemon.name}
          name={pokemon.name}
          url={pokemon.url}
          onClick={() => dispatch(setSelectedPokemon(pokemon))}
        />
      ))}
    </>
  );
};
