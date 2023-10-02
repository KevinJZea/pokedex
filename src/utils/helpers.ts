export const capitalize = (str: string) =>
  str.charAt(0).toUpperCase() + str.slice(1);

export const getPokemonIdFromUrl = (url: string): string => {
  // url has the next pattern: https://domain.example/a/b/c/pokemonId/

  const urlDividedBySlashes = url.split('/');
  const pokemonId = urlDividedBySlashes.splice(-2)[0];

  return pokemonId;
};

export const customizePokemonTypes = (types: PokemonType[]): string => {
  return types.reduce((accum, pokemonType, index) => {
    if (index === 0) return capitalize(pokemonType.type.name);
    return `${accum}/${capitalize(pokemonType.type.name)}`;
  }, '');
};

const removeHyphenAndCapitalize = (text: string) => {
  return text
    .split('-')
    .map((word) => capitalize(word))
    .join(' ');
};

export const customizePokemonName = (name: string) => {
  return name.includes('-')
    ? removeHyphenAndCapitalize(name)
    : capitalize(name);
};
