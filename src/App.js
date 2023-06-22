import './normalizequantum.css'
import './App.css';

function App() {
  return (
    <section className='level-0-container'>
      <CampSite />
    </section>
  );
}

export default App;


const CampSite = () => {
  return (
    <div className='campsite-container-0'> 
      <div className='campfire-container'>
      <div className="fire">
      <div className="flames">
          <div className="flame"></div>
          <div className="flame"></div>
          <div className="flame"></div>
          <div className="flame"></div>
      </div>
      <div className="logs"></div>
    </div>
      </div>
      <div className="moon-container"><img src="/moon.svg" alt="moon" className='moon'></img>
      <div className='fire-shadow'></div>
      <div className='fire-shadow'></div>
      <div className='fire-shadow'></div>
      <div className='fire-shadow'></div>
      <div className='fire-shadow'></div>
      </div>
    </div>
  );
};