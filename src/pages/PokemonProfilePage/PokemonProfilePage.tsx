import { NavLink } from 'react-router-dom';
import { PokemonProfile } from '../../components/PokemonProfile';
import './PokemonProfilePage.css';

export const PokemonProfilePage = () => {
  return (
    <section className="PokemonProfilePage--main-container">
      <NavLink
        className="PokemonProfilePage--go-back"
        to="/pokemons"
      >
        &lt;- Go Back
      </NavLink>
      <PokemonProfile />
    </section>
  );
};
