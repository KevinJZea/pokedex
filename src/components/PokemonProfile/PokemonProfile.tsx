import { NavLink } from 'react-router-dom';
import './PokemonProfile.css';

export const PokemonProfile = () => {
  return (
    <>
      <div>Pokemon</div>
      <NavLink
        className="Pokemon--go-back"
        to="/pokemons"
      >
        Go Back
      </NavLink>
    </>
  );
};
