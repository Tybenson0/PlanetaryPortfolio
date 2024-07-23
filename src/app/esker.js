import { createSlice } from '@reduxjs/toolkit';

export const eskerSlice = createSlice({
  name: 'esker',
  initialState: {
    // Existing state properties
    strings: ['Welcome to the projects page! click or tap the title to hear more information about the project, or the image to be taken to a live demo, or the github icon to be taken to the repository NOTE: some pages are hosted on render.com\'s free tier and therefore could take 1-2 minutes to load.',
    'ASTEROIDA is a asteroid prediction application using the NASA Near Earth Objects Web Service along with machine learning techniques to predict potential asteroid risk ',
    'VOLKSWAGONEER is a Volkswagen Parts website built with Java and Springboot which also earned the WGU Exellence Award',
    'The Pi Ponics Project is a self sustaining plant growing system controlled by a Raspberry Pi Pico running micropython with the purpose of automating aspects of plant growth such as light and nutrient delivery',
    'The Aimee Oki Foundation is a CRUD webpage made for a real bi-polar awareness foundation using HTML CSS ans JavaScript. ',
    'Python Package Delivery us a package delivery app made in Python that dynamically loads and delivers packages according to requirements',
    'C++ Class Roster is a  fully functional class roster written in C++, allowing for the creation, reading, updating, and deleting of class rosters. ',
    'Svelte is the latest framework technology I have been working with and it will be featured in future projects due to its simplicity.',
    'HTML, the bread and butter of web development, oh, I am very familiar with her if I do say so myself.',
    'I enjoy working with CSS and enjoy the cool and interesting libraries and ways you can use this tech to make your webpage look awesome.',
    'I use Sass very often on larger projects that require nested code and or mixins for readability and organization.',
    'JavaScript has been a is the ultimate challenge in web development, and I work every day to further my understanding of this fundamental language.',
    'Angular is a framework I have been dabbling into recently, and you can hope to see this framework featured in future projects.',
    'I have worked with many clients who use web builders like Wix, so needless to say I am very familiar with these specialty technologies.',
    'Ahh Redux, a very powerful state management tool, brain-buster! This App\'s state is managed by Redux! How cool is that!',
    'Node Package Manager is the main packager I use and am most familiar with.',
    'React is the framework you think of when you think web-dev, and sure enough, it was my first framework (also this app is made in React).',
    'I am very familiar and have used the design tool Figma many times, fantastic for making mockups.',
    'Photoshop is another technology I am familiar with, though I do believe other free options are just as good.',
    'Vue.js is a framework I have light experience in but is next on my learning journey.',
    'I know/use TypeScript in larger projects that require more accurate variable consolidation.',
    'SEO optimization, and any optimization in general, is very, very important to me as I want as many people to be able to access/use my work easily.',
    'Git and GitHub, I mean, what\'s there to say? Every dev has to know these guys.',
    '"There will be no humans elsewhere. Only here. Only on this small planet. We are as rare as well as an endangered species. Every one of us, in the cosmic perspective, precious. If a human disagrees with you, let him live. In a hundred billion galaxies, you will not find another." - Carl Sagan',
    '"When we look out into space, we are looking into our own origins, because we are truly children of the stars." - Brian Cox',
    'Achievement! "SPACE RAT"',
    "Quit touchin' my ship!",
    'Can you believe rent for this cabin is 1700 credits a lunar month? This dang space inflation.',
  'C++ Class Roster is a  fully functional class roster written in C++, allowing for the creation, reading, updating, and deleting of class rosters. '],
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