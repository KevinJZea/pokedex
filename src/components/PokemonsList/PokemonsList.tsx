import { useDispatch, useSelector } from 'react-redux';
import { PokemonCard } from '../../components/PokemonCard/PokemonCard';
import { RootState } from '../../store/store';

import './PokemonsList.css';
import { setSelectedPokemon } from '../../store/selectedPokemonReducer';

export const PokemonsList = () => {
  const dispatch = useDispatch();

  const displayedPokemons = useSelector(
    (state: RootState) => state.displayedPokemons
  ) as Pokemon[];

  return (
    <section className="PokemonsList--main-container">
      {displayedPokemons.length > 0 ? (
        <section className="PokemonsList--container">
          {displayedPokemons.map((pokemon) => (
            <PokemonCard
              key={pokemon.name}
              name={pokemon.name}
              url={pokemon.url}
              onClick={() => dispatch(setSelectedPokemon(pokemon))}
            />
          ))}
        </section>
      ) : (
        <h2>Loading Pok&eacute;mons...</h2>
      )}
    </section>
  );
};
