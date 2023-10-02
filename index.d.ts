interface Pokemon {
  name: string;
  url: string;
  data?: PokemonData;
}

interface PokemonData {
  abilities: PokemonAbility[];
  height: number;
  id: number;
  name: string;
  stats: PokemonStat[];
  types: PokemonType[];
  weight: number;
}

interface PokemonCardProps {
  name: string;
  url: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

type PokemonType = {
  slot: number;
  type: { name: string; url: string };
};

type PokemonStat = {
  base_stat: number;
  effort: number;
  stat: { name: string; url: string };
};

type PokemonAbility = {
  ability: {
    name: string;
    url: string;
  };
};
