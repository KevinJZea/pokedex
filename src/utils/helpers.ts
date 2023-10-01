export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const getPokemonIdFromUrl = (url: string): string => {
  // url has the next pattern: https://domain.example/a/b/c/pokemonId/

  const urlDividedBySlashes = url.split('/');
  const pokemonId = urlDividedBySlashes.splice(-2)[0];

  return pokemonId;
};

export const customizePokemonTypes = (types: PokemonTypes[]): string => {
  return types.reduce((accum, pokemonType, index) => {
    if (index === 0) return capitalize(pokemonType.type.name);
    return `${accum}/${capitalize(pokemonType.type.name)}`;
  }, '');
};
