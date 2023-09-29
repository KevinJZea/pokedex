import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { addInitialPokemons } from '../../store/pokemonsReducer';

import { BASE_URL, IMAGE_URL } from '../../utils/constant';
import { capitalize, getPokemonIdFromUrl } from '../../utils/helpers';

import './Home.css';

export const Home = () => {
  const dispatch = useDispatch();
  const pokemons = useSelector((state: RootState) => state.pokemons);

  const selectedPokemon = useSelector(
    (state: RootState) => state.selectedPokemon
  );
  const selectedPokemonId = getPokemonIdFromUrl(selectedPokemon.url);

  const isFirstRender = useRef(true);

  useEffect(() => {
    const callApi = async () => {
      const response = await fetch(BASE_URL);
      const data = await response.json();
      dispatch(addInitialPokemons(data.results));
    };

    if (isFirstRender.current && pokemons.length === 0) {
      isFirstRender.current = false;
      callApi();
    }
  }, [dispatch, isFirstRender, pokemons]);

  return (
    <div className="Home--main-container">
      <section className="Home--left-container">
        <h1>Pok&eacute;mon</h1>

        <img
          src={IMAGE_URL(selectedPokemonId)}
          alt={capitalize(selectedPokemon.name)}
          width={250}
        />
        <h2>{capitalize(selectedPokemon.name)}</h2>
      </section>
      <section className="Home--right-container">
        <Outlet />
      </section>
    </div>
  );
};
