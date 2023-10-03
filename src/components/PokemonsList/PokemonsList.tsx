import { useDispatch, useSelector } from 'react-redux';
import { PokemonCard } from '../../components/PokemonCard';
import { RootState } from '../../store/store';
import { setSelectedPokemon } from '../../store/selectedPokemonReducer';
import './PokemonsList.css';

export const PokemonsList = () => {
  const dispatch = useDispatch();

  const displayedPokemons = useSelector(
    (state: RootState) => state.displayedPokemons
  );

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
