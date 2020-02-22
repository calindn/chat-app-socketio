import React from 'react';

import './Input.css';

const Input = ({ message, setMessage, sendMessage }) => (
    <form className='form'>
        <input 
            className='input'
            type='text'
            placeholder='Type a message...'
            value={message} 
            onChange={({ target: { value } }) => setMessage(value)} 
            onKeyPress={event => event.which === 13 ? sendMessage(event) : null }
        />
        <button className='send-btn'  onClick={(event) => sendMessage(event)}>Send</button>
    </form>
)

export default Input;