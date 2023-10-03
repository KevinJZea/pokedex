import {
  BASE_URL,
  LIMIT_PER_PAGE,
  MAX_LIMIT,
  POKEMON_DATA_URL,
} from './constants';

export const getPokemons = async (currentPage: number) => {
  const offset = (currentPage - 1) * LIMIT_PER_PAGE;
  const isOffsetAndLimitOverMaxLimit = offset + LIMIT_PER_PAGE > MAX_LIMIT;

  // i.e. if offset = 140 & LIMIT_PER_PAGE = 20, limit must be 10,
  // in order not to exceed MAX_LIMIT
  const limit = isOffsetAndLimitOverMaxLimit
    ? MAX_LIMIT - offset
    : LIMIT_PER_PAGE;

  const response = await fetch(
    `${BASE_URL}/?offset=${offset}&limit=${limit}`
  );
  const data = await response.json();

  return data.results;
};

export const getPokemonData = async (pokemonId: string) => {
  const response = await fetch(POKEMON_DATA_URL(pokemonId));
  const data = await response.json();
  return data;
};
