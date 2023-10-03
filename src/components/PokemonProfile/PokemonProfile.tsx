import { useCallback, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { PokemonStat } from '../PokemonStat';

import { RootState } from '../../store/store';
import {
  cleanSelectedPokemonData,
  setSelectedPokemonData,
} from '../../store/selectedPokemonReducer';

import {
  customizePokemonName,
  customizePokemonTypes,
  getPokemonIdFromUrl,
  removeHyphenAndCapitalize,
} from '../../utils/helpers';
import { getPokemonData } from '../../utils/services';

import './PokemonProfile.css';

export const PokemonProfile = () => {
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);

  const { name, url, data } = useSelector(
    (state: RootState) => state.selectedPokemon
  );

  const callPokemonData = useCallback(async () => {
    const pokemonUrl = getPokemonIdFromUrl(url);
    const pokemonData = await getPokemonData(pokemonUrl);
    dispatch(setSelectedPokemonData(pokemonData));
  }, [dispatch, url]);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      callPokemonData();
    }

    return () => {
      dispatch(cleanSelectedPokemonData());
    };
  }, [callPokemonData, dispatch]);

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
              <span>Name:</span> {customizePokemonName(data.name)}
            </p>
            <p>
              <span>Height:</span> {data.height}
            </p>
            <p>
              <span>Weight:</span> {data.weight}
            </p>
          </div>

          <section className="PokemonProfile--stats-abilities-container">
            <div className="PokemonProfile--stats-container">
              <h4 className="PokemonProfile--stats-title">Stats</h4>
              <div className="PokemonProfile--stats">
                {data.stats.map((stat) => (
                  <PokemonStat
                    key={stat.stat.name}
                    {...stat}
                  />
                ))}
              </div>
            </div>
            <div className="PokemonProfile--abilities-container">
              <h4 className="PokemonProfile--abilities-title">Abilities</h4>
              {data.abilities.map((ability) => (
                <p key={ability.ability.name}>
                  {removeHyphenAndCapitalize(ability.ability.name)}
                </p>
              ))}
            </div>
          </section>
        </section>
      ) : (
        <h2>Loading {customizePokemonName(name)}'s Data...</h2>
      )}
    </>
  );
};
