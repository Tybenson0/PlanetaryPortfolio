import './normalizequantum.css'
import './App.css';

function App() {
  return (
    <>
    <Url />
    <section className='level-0-container'>
      
      <CampSite />
    </section>
    </>
  );
}

export default App;


const CampSite = () => {
  return (
    <div className='campsite-container-0'> 
      <div className="tree-container"><img src='tree-2.svg' alt='pine tree' className='tree'></img></div>
      <ul className='smoke-container'>
        <li className='smoke'></li>
        <li className='smoke'></li>
        <li className='smoke'></li>
        <li className='smoke'></li>
        <li className='smoke'></li>
        <li className='smoke'></li>
        <li className='smoke'></li>
        <li className='smoke'></li>
      </ul>
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
      <div className='fire-shadow'></div>
      <div className='esker-container'><img src='esker.webp' alt='esker' className='esker'></img></div>
      <div className="moon-container"><img src="/moon.svg" alt="moon" className='moon'></img>
      </div>
    </div>
  );
};


const Url = () => {
  return (
    <div className='url'>
      
    </div>
  );
};
