import { Route, Routes } from 'react-router-dom';
import { selectString, } from './app/esker';
import CampSite from './campsite.js'
import AudioPlayer from './audioplayer.js'
import song from "./hearth.mp3";
import './App.css';
import Home from './home';
import Projects from './projects';
import Skills from './skills';
import Biography from './biography';
import Contact from './contact';
import Nav from './nav.js';
import './normalizequantum.css';
import './App.css';
function App() {
  
 
  return (
    <>
    <Url />
    <section className='level-0-container'>
      <div className='space'  ></div>
      
    <Nav />
    <Planets />
    <Routes>
      <Route path='/' element={<Home />}></Route>
      <Route path='projects' element={<Projects />}></Route>
      <Route path='skills' element={<Skills />}></Route>
      <Route path='biography' element={<Biography />}></Route>
      <Route path='contact' element={<Contact />}></Route>
    </Routes>
    <AudioPlayer audioSrc={song}/>
      <CampSite />
    </section>
    </>
  );
}

export default App;





const Planets = () => {
  return (
    <div className='planet-container-0'>
      
      <img src='/planets/planet-3.svg' alt='hearth' className='planet-1' ></img>
      <img src='/planets/planet-1.svg' alt='hearth' className='planet-2' ></img>
      <img src='/planets/planet-2.svg' alt='hearth' className='planet-3' ></img>
      <img src='/planets/planet-4.svg' alt='hearth' className='planet-4' ></img>
    </div>
  );
};

const Url = () => {
  return (
    <div className='url'>
      
    </div>
  );
};
