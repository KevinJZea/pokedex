import { configureStore } from '@reduxjs/toolkit';
import pokemonsReducer from './pokemonsReducer';
import selectedPokemonReducer from './selectedPokemonReducer';

export const store = configureStore({
  reducer: {
    pokemons: pokemonsReducer,
    selectedPokemon: selectedPokemonReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
