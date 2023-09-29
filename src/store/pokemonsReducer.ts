import { createSlice } from '@reduxjs/toolkit';

const initialState: Pokemon[] = [];

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    addInitialPokemons: (state, action) => [...state, ...action.payload],
  },
});

export const { addInitialPokemons } = pokemonsSlice.actions;
export default pokemonsSlice.reducer;
