export const LIMIT = 20;
export const OFFSET = 0;

export const BASE_URL = `https://pokeapi.co/api/v2/pokemon`;
export const IMAGE_URL = (pokemonId: string) =>
  `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`;
