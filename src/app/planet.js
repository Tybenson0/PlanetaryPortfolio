import { createSlice } from '@reduxjs/toolkit';

export const planetSlice = createSlice({
  name: 'Planet',
  initialState: {
    planets: ['bramble.webp', 'twins.webp', 'hollow.webp'],
    selectedPlanet: 'hearth.webp',
    isPlanetRotating: false,
  },
  reducers: {
    // Existing reducers
    selectPlanet: (state, action) => {
      state.selectedPlanet = state.planets[action.payload];
    },
    rotatePlanet: (state, action) => {
      state.isPlanetRotating = !state.isPlanetRotating;
    },
  },
});


// Action creators
export const { selectPlanet, rotatePlanet} = planetSlice.actions;

export default planetSlice.reducer;