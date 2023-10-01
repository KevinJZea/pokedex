import { configureStore } from '@reduxjs/toolkit';
import displayedPokemonsReducer from './displayedPokemonsReducer';
import selectedPokemonReducer from './selectedPokemonReducer';
import storedPokemonsReducer from './storedPokemonsReducer';
import currentPageReducer from './currentPageReducer';

export const store = configureStore({
  reducer: {
    displayedPokemons: displayedPokemonsReducer,
    selectedPokemon: selectedPokemonReducer,
    storedPokemons: storedPokemonsReducer,
    currentPage: currentPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
