import { useCallback, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import { PokemonProfile } from '../../components/PokemonProfile';

import { RootState } from '../../store/store';
import {
  cleanSelectedPokemonData,
  setSelectedPokemonData,
} from '../../store/selectedPokemonReducer';

import './PokemonProfilePage.css';
import { getPokemonIdFromUrl } from '../../utils/helpers';
import { getPokemonData } from '../../utils/services';

export const PokemonProfilePage = () => {
  const dispatch = useDispatch();
  const isFirstRender = useRef(true);

  const { url } = useSelector((state: RootState) => state.selectedPokemon);

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
    <section className="PokemonProfilePage--main-container">
      <NavLink
        className="PokemonProfilePage--go-back"
        to="/"
      >
        &lt;- Go Back
      </NavLink>
      <PokemonProfile />
    </section>
  );
};
