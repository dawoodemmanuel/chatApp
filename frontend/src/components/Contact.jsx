import React, { useState, useEffect } from 'react'
//import { useNavigate } from 'react-router-dom'
//import axios from 'axios'
import './contact.css'

export default function Contact({ contacts, changeChat }) {

  const [currentUserName, setCurrentUserName] = useState(undefined);
  const [currentSelected, setCurrentSeleted] = useState(undefined);

  useEffect(() => {
    const data = JSON.parse(
      localStorage.getItem("react-chat-app")
    );
    setCurrentUserName(data.username);
  }, []);

  const changeCurrentChat = (index, contact) => {
    setCurrentSeleted(index)
    changeChat(contact)
  }
  return (
    <>
      <div className="contacts">
        <h2>Available User</h2>
        {contacts.map((contact, index) => {
          return (
            <div key={contact._id} className={`username ${index === currentSelected ? "selected" : ""
              }`}
              onClick={() => changeCurrentChat(index, contact)}
            >
              <h3>{contact.username}</h3>
            </div>
          );
        })}
        <h2>Current User</h2>
        <div className="current-username">
          <h3>{currentUserName}</h3>
        </div>
      </div>
    </>
  )
}
