import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { PokemonCard } from '../../components/PokemonCard';
import { RootState } from '../../store/store';
import { setSelectedPokemon } from '../../store/selectedPokemonReducer';
import { getPokemonIdFromUrl } from '../../utils/helpers';
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
          {displayedPokemons.map((pokemon) => {
            const pokemonId = getPokemonIdFromUrl(pokemon.url);
            return (
              <div
                className="PokemonsList--PokemonCard-container"
                key={pokemon.name}
              >
                <PokemonCard
                  name={pokemon.name}
                  url={pokemon.url}
                  onClick={() => dispatch(setSelectedPokemon(pokemon))}
                />
                <Link
                  className="PokemonsList--stats-button"
                  to={`/${pokemonId}`}
                >
                  Stats
                </Link>
              </div>
            );
          })}
        </section>
      ) : (
        <h2>Loading Pok&eacute;mons...</h2>
      )}
    </section>
  );
};
