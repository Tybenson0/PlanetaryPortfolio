import { createSlice } from '@reduxjs/toolkit';

export const eskerSlice = createSlice({
  name: 'esker',
  initialState: {
    strings: ['Woah! how did you get there? no worries',
     'gfdjkjfkl;jdajfkldlafjdkl;ajkslf', 
     'String 3'
    ],
    selectedString: '',
    display: false,
  },
  reducers: {
    toggle: state => {
      state.display = !state.display;
    },
    selectString: (state, action) => {
      state.selectedString = state.strings[action.payload];
    },
  },
});

// Action creators are generated for each case reducer function
export const { toggle, selectString } = eskerSlice.actions;

export default eskerSlice.reducer;