import { createSlice } from '@reduxjs/toolkit';

export const eskerSlice = createSlice({
  name: 'esker',
  initialState: {
    // Existing state properties
    strings: ['This is the projects port, click on any of the titles to hear more information, or click the icons to be taken to the website or github docs.',
     'This webpage is made out of React and TailwindCss and is made for a real porcelain installation named SoCaltubSpecialist. This project demonstrates my ability to work with higher level programming languages, frameworks, and libraries.',
     'This webpage is made out of HTML, CSS, and JavaScript and is for the bi-polar awareness foundation named The Aimee Oki Foundation. this page demonstrates my ability to work with real clientele and satisy real clientele.',
     'Tythecodeguy is my old portfolio webpage made entirely out of HTML, SCSS, Jquery, and Parcel bundler. This project demonstrates my proficiency in the fundamentals of web development.',
     'Moshified is a project that shows my ability to follow through with a full website creation from boilerplate html to deployment.',
     'RememberThat is the first project that really proved to myself that I really do like this field and I want to continue getting better and better...',
      'I think it is time to tell you about how this portfolio came to be...',
      'we made it to the end of the system, thank you for joining me on this jounrney and I hope to see you again Traveler!',
      'home sweet home'
    ],
    selectedString: 'Hello Space Traveler! ',
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