import { BASE_URL, LIMIT_PER_PAGE, MAX_LIMIT } from './constants';

export const getPokemons = async (currentPage: number) => {
  const offset = (currentPage - 1) * LIMIT_PER_PAGE;
  const isOffsetAndLimitOverMaxLimit = offset + LIMIT_PER_PAGE > MAX_LIMIT;
  const limit = isOffsetAndLimitOverMaxLimit
    ? MAX_LIMIT - offset
    : LIMIT_PER_PAGE;

  const response = await fetch(
    `${BASE_URL}/?offset=${offset}}&limit=${limit}]`
  );
  const data = await response.json();

  return data.results;
};
