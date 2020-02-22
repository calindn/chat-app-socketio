import React from 'react';
import ReactEmoji from 'react-emoji';

import './Message.css';

const Message = ({ message: { user, text }, name }) => {
    let isSentByCurrentUser = false;

    const trimmedName=  name.trim().toLowerCase();

    if(user === trimmedName) {
        isSentByCurrentUser = true;
    }
    return (
        isSentByCurrentUser ? (
            <div className='msg-container justify-end'>
                <p className='sent-txt pr-10'>{trimmedName}</p>
                <div className='msg-box bg-green'>
                    <p className='msg-txt color-white'>{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        ) : (
            <div className='msg-container justify-start'>
                <div className='msg-box bg-light'>
                    <p className='msg-txt color-dark'>{ReactEmoji.emojify(text)}</p>
                </div>
                <p className='sent-txt pl-10'>{user}</p>
            </div>
        )
    )

};

export default Message;