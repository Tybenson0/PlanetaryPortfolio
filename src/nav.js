import React, { useEffect } from 'react';import {useDispatch} from 'react-redux';
import { selectString,} from './app/esker';
import {Link} from 'react-router-dom';
const Nav = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const handlePageLoad = () => {
            setTimeout(() => {
              dispatch(selectString(0)); // Dispatch the selectString action after a delay
            }, 3000); // Delay for 2 seconds (adjust as needed)
          };
    
        window.onload = handlePageLoad;
    
        return () => {
          window.onload = null; // Clean up the event handler when the component unmounts
        };
      }, [dispatch]);
    
      const handleLinkClick = (index) => {
        dispatch(selectString(index));
      };
    return (
        <div className='nav-container-0'>
            <ul className='nav-ul'>
                <li className='nav-li'>
                    <Link to="projects" className='nav-link' onClick={() => handleLinkClick(0)}>Projects</Link>
                </li>
                <li className='nav-li'>
                    <Link to="skills" className='nav-link' onClick={() => handleLinkClick(1)}>Skills</Link>
                </li>
                <li className='nav-li'>
                    <Link to="biography" className='nav-link' onClick={() => handleLinkClick(2)} >Biography</Link>
                </li>
                <li className='nav-li'>
                    <Link to="contact" className='nav-link' onClick={() => handleLinkClick(3)}>Contact</Link>
                </li>
                <li className='nav-li'>
                    <Link to="/" className='nav-link' 
                    onClick={() => handleLinkClick(4)}>Home</Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;