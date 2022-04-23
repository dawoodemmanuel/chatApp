import React, { useState } from 'react'
import { IoMdSend } from 'react-icons/io'
import { BsEmojiSmileFill } from 'react-icons/bs'
import Picker from 'emoji-picker-react'
//import './chatInput.css'
import styled from 'styled-components'

export default function ChatInput({ handleSendMsg }) {

    const [showEmojiPicker, setShowEmojiPicker] = useState(false)
    const [msg, setMsg] = useState("")

    const handleShowEmojiPicker = () => {
        setShowEmojiPicker(!showEmojiPicker)
    }

    const handleEmojiClick = (event, emoji) => {
        let message = msg
        message += emoji.emoji
        setMsg(message)
    }

    const sendChat = (event) => {
      event.preventDefault()
      if(msg.length > 0)
        handleSendMsg(msg)
        setMsg("")
    }

    return (
        <Container>
            <div className="btn-container">
                <div className="emoji">
                    <BsEmojiSmileFill onClick={handleShowEmojiPicker} />
                    {
                        showEmojiPicker && <Picker onEmojiClick={handleEmojiClick} />
                    }
                </div>
            </div>
            <form className='input-container' onSubmit={(e)=> sendChat(e)}>
                <input type="text" placeholder='Type your message here ...'
                    value={msg}
                    onChange={(e) => setMsg(e.target.value)} />
                <button type="submit">
                    <IoMdSend />
                </button>
            </form>
        </Container>
    )
}

const Container = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 5% 95%;
  padding: 0 2rem;
  @media screen and (min-width: 720px) and (max-width: 1080px) {
    padding: 0 1rem;
    gap: 1rem;
  }
  .btn-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    .emoji {
      position: relative;
      svg {
        font-size: 1.5rem;
        cursor: pointer;
      }
      .emoji-picker-react {
        position: absolute;
        top: -350px;
      }
    }
  }
  .input-container {
    width: 100%;
    border-radius: 2rem;
    display: flex;
    align-items: center;
    gap: 2rem;
    input {
      width: 90%;
      height: 60%;
      text-align: left;
      font-size: 1.2rem;
      }
    }
    button {
        margin-right: 2rem;
      border-radius: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      border: none;
      @media screen and (min-width: 720px) and (max-width: 1080px) {
        padding: 0.3rem 1rem;
        svg {
          font-size: 1rem;
        }
      }
      svg {
        font-size: 2rem;
        background-color: transparent;
      }
    }
  }
`;