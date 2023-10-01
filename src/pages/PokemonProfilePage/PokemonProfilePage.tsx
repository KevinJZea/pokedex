import { NavLink } from 'react-router-dom';
import { PokemonProfile } from '../../components/PokemonProfile/PokemonProfile';
import './PokemonProfilePage.css';

export const PokemonProfilePage = () => {
  return (
    <section className="PokemonProfilePage--main-container">
      <NavLink
        className="PokemonProfilePage--go-back"
        to="/pokemons"
      >
        Go Back
      </NavLink>
      <PokemonProfile />
    </section>
  );
};
