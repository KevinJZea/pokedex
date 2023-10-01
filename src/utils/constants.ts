export const MAX_LIMIT = 150;
export const LIMIT_PER_PAGE = 20;

export const BASE_URL = `https://pokeapi.co/api/v2/pokemon`;
export const IMAGE_URL = (pokemonId: string) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
