import { createSlice } from '@reduxjs/toolkit';
import { BASE_URL } from '../utils/constants';

const initialState: Pokemon = {
  name: 'Pikachu',
  url: `${BASE_URL}/25/`,
};

const selectedPokemonSlice = createSlice({
  name: 'selectedPokemon',
  initialState,
  reducers: {
    setSelectedPokemon: (state, action) => ({ ...state, ...action.payload }),
    setSelectedPokemonData: (state, action) => ({
      ...state,
      data: { ...action.payload },
    }),
    cleanSelectedPokemonData: (state) => ({
      ...state,
      data: undefined,
    }),
  },
});

export const {
  setSelectedPokemon,
  setSelectedPokemonData,
  cleanSelectedPokemonData,
} = selectedPokemonSlice.actions;
export default selectedPokemonSlice.reducer;
