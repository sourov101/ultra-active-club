import React from 'react';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHand } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <div>
            <div className='header'>
                <FontAwesomeIcon icon={faHand}></FontAwesomeIcon>
                <h1>Fight Club</h1>

            </div>
            <div className='para'>
                <h3>“The first rule about fight club is you don't talk about fight club.”</h3>
            </div>
        </div>
    );
};

export default Header;