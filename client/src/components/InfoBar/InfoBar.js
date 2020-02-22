import React from 'react';
import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';
import './InfoBar.css';

const InfoBar = ({ room }) => {
   return  <div className='info-bar'>
        <div className='l-in-container'>
            <img className='online-icon' src={onlineIcon} alt='online' />
            <h3>{room}</h3>
        </div>
        <div className='r-in-container'>
            <a href='/'>
                <img src={closeIcon} alt='close' />
            </a>
        </div>
    </div>
}

export default InfoBar;