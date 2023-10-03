import { useDispatch, useSelector } from 'react-redux';
import { PokemonsList } from '../../components/PokemonsList';
import { nextPage, previousPage } from '../../store/currentPageReducer';
import { RootState } from '../../store/store';

import './PokemonsListPage.css';
import { cleanDisplayedPokemons } from '../../store/displayedPokemonsReducer';

export const PokemonsListPage = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state: RootState) => state.currentPage);

  const handlePreviousPage = () => {
    dispatch(previousPage());
    dispatch(cleanDisplayedPokemons());
  };

  const handleNextPage = () => {
    dispatch(nextPage());
    dispatch(cleanDisplayedPokemons());
  };

  return (
    <section className="PokemonsListPage--main-container">
      <PokemonsList />
      <div className="PokemonsListPage--outer-buttons-container">
        <div className="PokemonsListPage--buttons-container">
          <button
            disabled={currentPage === 1}
            type="button"
            onClick={handlePreviousPage}
          >
            Previous Page
          </button>

          <h4>Page {currentPage} out of 8</h4>
          <button
            disabled={currentPage === 8}
            type="button"
            onClick={handleNextPage}
          >
            Next Page
          </button>
        </div>
      </div>
    </section>
  );
};
