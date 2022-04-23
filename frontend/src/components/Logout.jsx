import React from 'react'
import { useNavigate } from 'react-router-dom'
import './logout.css'

export default function Logout() {
    const naviagtion = useNavigate()
    const handleClick = ()=> {
        localStorage.clear()
        naviagtion('/login')

    }
  return <div className="logout">
      <button className='btn' onClick={handleClick}>Logout</button>
  </div>
}
