import { Suspense, useEffect, useMemo, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { setDisplayedPokemons } from '../../store/displayedPokemonsReducer';

import { IMAGE_URL } from '../../utils/constants';
import {
  capitalize,
  customizePokemonName,
  getPokemonIdFromUrl,
} from '../../utils/helpers';
import { getPokemons } from '../../utils/services';

import './Home.css';

export const Home = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.currentPage);
  const displayedPokemons = useSelector(
    (state: RootState) => state.displayedPokemons
  );

  const selectedPokemon = useSelector(
    (state: RootState) => state.selectedPokemon
  );
  const selectedPokemonId = getPokemonIdFromUrl(selectedPokemon.url);

  const isFirstRender = useRef(true);
  const firstRenderValidation = useMemo(
    () => isFirstRender.current && displayedPokemons.length === 0,
    [displayedPokemons.length]
  );
  const goOnRendersValidation = useMemo(
    () => !isFirstRender.current && displayedPokemons.length > 0,
    [displayedPokemons.length]
  );

  useEffect(() => {
    const callApi = async () => {
      const pokemons = await getPokemons(currentPage);
      dispatch(setDisplayedPokemons(pokemons));
    };
    if (firstRenderValidation) {
      isFirstRender.current = false;
      callApi();
    }

    if (goOnRendersValidation) callApi();
  }, [dispatch, currentPage, firstRenderValidation, goOnRendersValidation]);

  return (
    <div className="Home--main-container">
      <section className="Home--left-container">
        <h1>Pok&eacute;mon</h1>

        <img
          src={IMAGE_URL(selectedPokemonId)}
          alt={capitalize(selectedPokemon.name)}
          width={250}
        />
        <h2>{customizePokemonName(selectedPokemon.name)}</h2>
      </section>
      <section className="Home--right-container">
        <Suspense fallback={<h3>Loading...</h3>}>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
};
