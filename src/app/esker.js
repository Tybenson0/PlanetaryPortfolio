import { createSlice } from '@reduxjs/toolkit';

export const eskerSlice = createSlice({
  name: 'esker',
  initialState: {
    // Existing state properties
    strings: ['Woah! how did you get there? no worries', 'gfdjkjfkl;jdajfkldlafjdkl;ajkslf', 'String 3'],
    selectedString: 'Woah, how did you get here?.... no worries, my name is Esker. Welcome to the Planetary Portfolio ',
    display: false,
  },
  reducers: {
    // Existing reducers
    toggle: state => {
      state.display = !state.display;
    },
    selectString: (state, action) => {
      state.selectedString = state.strings[action.payload];
    },
  },
});


// Action creators
export const { toggle, selectString,} = eskerSlice.actions;

export default eskerSlice.reducer;