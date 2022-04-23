import React from 'react'
import Logout from './Logout'
import './chatContainer.css'
import ChatInput from './ChatInput'
import Messages from './Messages'

export default function ChatContainer({ currentChat }) {

    const handleSendMsg = async (msg)=> {

    }

    return (
        <div className='chatContainer'>
            <div className="chat-header">
                <div className="user-details">
                    <div className="user-name">
                        <h3>{currentChat.username}</h3>
                    </div>
                </div>
                <Logout />
            </div>
            <Messages />
            <ChatInput handleSendMsg={handleSendMsg} />
        </div>
    )
}
