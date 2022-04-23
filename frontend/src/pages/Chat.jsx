import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import Contacts from '../components/Contact'
import ChatContainer from '../components/ChatContainer'
import './chat.css'
import Welcome from '../components/Welcome'

function Chat() {

  const navigate = useNavigate()
  const [contacts, setContacts] = useState([])
  const [currentUser, setCurrentUser] = useState(undefined)
  const [currentChat, setCurrentChat] = useState(undefined);

  useEffect(() => {
    if (localStorage.getItem("react-chat-app")) {
      setCurrentUser(
        JSON.parse(localStorage.getItem("react-chat-app"))
      )
    } else {
      navigate("/login")
    }
  }, [])

  useEffect(async () => {
    if (currentUser) {
      const data = await axios.get('/contact/', { params: { id: currentUser._id } })
      setContacts(data.data)
    }
  }, [currentUser])

  const handleChatChange = (chat) => {
    setCurrentChat(chat);
  };

  return (
    <>
      <div className="container">
        <Contacts contacts={contacts} changeChat={handleChatChange} />
        {currentChat === undefined ? (
          <Welcome />
          ) : (
            <ChatContainer currentChat={currentChat} />
          )}
      </div>
    </>
  )
}

export default Chat