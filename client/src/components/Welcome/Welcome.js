import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css';

const Welcome = () => {
    const [name, setName] = useState('');
    const [room, setRoom] = useState('');

    return (
        <div className='welcome-out-container'>
            <div className='welcome-in-container'>
                <h1 className='hding'>Welcome</h1>
                <div><input placeholder='Name' className='welcome-input' type='text' onChange={(event) => setName(event.target.value)} /></div>
                <div><input placeholder='Room' className='welcome-input mt-20' type='text' onChange={(event) => setRoom(event.target.value)} /></div>
                <Link onClick={event => (!name|| !room) ? event.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
                    <button className='btn mt-20' type='submit'>SIGN IN</button>
                </Link>
            </div>
        </div>
    )
}

export default Welcome;