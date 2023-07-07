import React from 'react';
import {useDispatch} from 'react-redux';
import { selectString,} from './app/esker';
import {Link} from 'react-router-dom';
const Nav = () => {
    const dispatch = useDispatch();
    return (
        <div className='nav-container-0'>
            <ul className='nav-ul'>
                <li className='nav-li'>
                    <Link to="projects" className='nav-link' onClick={() => dispatch(selectString(0))}>Projects</Link>
                </li>
                <li className='nav-li'>
                    <Link to="skills" className='nav-link' onClick={() => dispatch(selectString(1))}>Skills</Link>
                </li>
                <li className='nav-li'>
                    <Link to="biography" className='nav-link' onClick={() => dispatch(selectString(2))} >Biography</Link>
                </li>
                <li className='nav-li'>
                    <Link to="contact" className='nav-link' onClick={() => dispatch(selectString(3))}>Contact</Link>
                </li>
                <li className='nav-li'>
                    <Link to="/" className='nav-link' 
                    onClick={() => {setTimeout(() => {dispatch(selectString(4)); });}}>Home</Link>
                </li>
            </ul>
        </div>
    );
};

export default Nav;