import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  [key: string]: Pokemon[];
} = {};

const storedPokemonsSlice = createSlice({
  name: 'storedPokemons',
  initialState,
  reducers: {
    storePokemons: (state, action) => ({
      ...state,
      [action.payload.page]: action.payload.pokemons,
    }),
  },
});

export const { storePokemons } = storedPokemonsSlice.actions;
export default storedPokemonsSlice.reducer;
