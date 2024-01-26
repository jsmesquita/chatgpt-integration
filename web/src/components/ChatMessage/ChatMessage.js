import React from "react";
import './ChatMessage.css'

export const ChatMessage = ({ message }) => {
    return (
        <div className={`chat-message ${message.user === 'gtp' && 'chat-gtp'}`}>
            <div dangerouslySetInnerHTML={{ __html: message.message }}></div>
        </div>
    )
}