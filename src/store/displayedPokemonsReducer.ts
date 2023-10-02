import { createSlice } from '@reduxjs/toolkit';

const initialState: Pokemon[] = [];

const displayedPokemonsSlice = createSlice({
  name: 'displayedPokemons',
  initialState,
  reducers: {
    setDisplayedPokemons: (_, action) => [...action.payload],
    cleanDisplayedPokemons: () => [],
  },
});

export const { setDisplayedPokemons, cleanDisplayedPokemons } =
  displayedPokemonsSlice.actions;
export default displayedPokemonsSlice.reducer;
