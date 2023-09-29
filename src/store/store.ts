import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './pokemonsReducer';
import selectedPokemonReducer from './selectedPokemonReducer';
import storedPokemonsReducer from './storedPokemonsReducer';
import currentPageReducer from './currentPageReducer';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    selectedPokemon: selectedPokemonReducer,
    storedPokemons: storedPokemonsReducer,
    currentPage: currentPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
