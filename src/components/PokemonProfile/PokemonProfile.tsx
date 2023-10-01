import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store/store';
import { getPokemonData } from '../../utils/services';
import { setSelectedPokemonData } from '../../store/selectedPokemonReducer';
import {
  capitalize,
  customizePokemonTypes,
  getPokemonIdFromUrl,
} from '../../utils/helpers';
import './PokemonProfile.css';

export const PokemonProfile = () => {
  const dispatch = useDispatch();

  const { name, url, data } = useSelector(
    (state: RootState) => state.selectedPokemon
  );

  useEffect(() => {
    const callPokemonData = async () => {
      const pokemonUrl = getPokemonIdFromUrl(url);
      const pokemonData = await getPokemonData(pokemonUrl);
      dispatch(setSelectedPokemonData(pokemonData));
    };
    if (data) callPokemonData();
  }, []);
  console.log({ data });

  return (
    <>
      {data ? (
        <section className="PokemonProfile--main-container">
          <h3>Type: {customizePokemonTypes(data.types)}</h3>

          <div className="PokemonProfile--general-info-container">
            <p>
              <span>Number:</span> {data.id}
            </p>
            <p>
              <span>Name:</span> {capitalize(data.name)}
            </p>
            <p>
              <span>Height:</span> {data.height}
            </p>
            <p>
              <span>Weight:</span> {data.weight}
            </p>
          </div>
        </section>
      ) : (
        <h2>Loading {capitalize(name)}'s Data...</h2>
      )}
    </>
  );
};
