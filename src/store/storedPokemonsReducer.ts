import { createSlice } from '@reduxjs/toolkit';

export type PokemonsObject = {
  [key: string]: Pokemon[];
};

type StoredPokemonsState = {
  pokemons: PokemonsObject;
};

const initialState: StoredPokemonsState = {
  pokemons: {},
};

const storedPokemonsSlice = createSlice({
  name: 'storedPokemons',
  initialState,
  reducers: {
    addPokemons: (state, action) => ({
      ...state,
      [action.payload.page]: action.payload.pokemons,
    }),
  },
});

export const { addPokemons } = storedPokemonsSlice.actions;
export default storedPokemonsSlice.reducer;
