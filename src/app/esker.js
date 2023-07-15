import { createSlice } from '@reduxjs/toolkit';

export const eskerSlice = createSlice({
  name: 'esker',
  initialState: {
    // Existing state properties
    strings: ['This is the projects section, tap or click on any project to hear information about it.',
     'Welcome to Skills & technologies, home of all the galactic web innovation',
      'I think it is time to tell you about how this portfolio came to be...',
      'we made it to the end of the system, thank you for joining me on this jounrney and I hope to see you again Traveler!',
      'home sweet home'
    ],
    selectedString: '',
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