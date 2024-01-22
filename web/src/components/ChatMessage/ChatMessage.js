import React from "react";
import './ChatMessage.css'
import { Avatar } from "../../assets/Avatar";

export const ChatMessage = ({ message }) => {
    return (
        <div className={`chat-message ${message.user === 'gtp' && 'chat-gtp'}`}>
            <div className="chat-message-center">
                <div className={`avatar ${message.user === 'gpt' && "chatgpt"}`}></div>

                {message.user === 'gtp' && (<Avatar></Avatar>)}

            </div>
            <div className="message">
                {message.message}
            </div>
        </div>
    )
}