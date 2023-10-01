interface Pokemon {
  name: string;
  url: string;
  data?: PokemonData;
}

interface PokemonData {
  height: number;
  id: number;
  name: string;
  types: PokemonTypes[];
  weight: number;
}

interface PokemonCardProps {
  name: string;
  url: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

type PokemonTypes = {
  slot: number;
  type: { name: string; url: string };
};
