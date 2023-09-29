import { useEffect, useRef } from 'react';
import { Outlet } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { RootState } from '../../store/store';
import { addInitialPokemons } from '../../store/pokemonsReducer';

import { BASE_URL, IMAGE_URL } from '../../utils/constant';
import { capitalize, getPokemonIdFromUrl } from '../../utils/helpers';

import './Home.css';
import { nextPage, previousPage } from '../../store/currentPageReducer';

export const Home = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.currentPage);
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
        <div className="Home--buttons-container">
          <button
            disabled={currentPage === 1}
            type="button"
            onClick={() => dispatch(previousPage())}
          >
            Previous Page
          </button>

          <h4>Page {currentPage} out of 8</h4>
          <button
            disabled={currentPage === 8}
            type="button"
            onClick={() => dispatch(nextPage())}
          >
            Next Page
          </button>
        </div>
      </section>
    </div>
  );
};
