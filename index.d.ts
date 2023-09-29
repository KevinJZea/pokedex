interface Pokemon {
  name: string;
  url: string;
}

interface PokemonCardProps {
  name: string;
  url: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}
