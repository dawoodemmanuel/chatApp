import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import './form.css'

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const navigate = useNavigate()
  const toastCSS = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
  }
  useEffect(() => {
    if (localStorage.getItem("react-chat-app")) {
      navigate('/');
    }
  })
  const onSubmit = (data, e) => {
    e.preventDefault();
    const { Email, Password } = data
    axios.post('/login', {
      email: Email,
      password: Password
    }).then((res) => {
      if (res.data === false) {
        toast.error("Incorrect Email or Password", toastCSS)
      } else {
        localStorage.setItem("react-chat-app", JSON.stringify(res.data.User))
        console.log(JSON.stringify(res.data.User))
        navigate('/')
      }
    })
  }
  return (
    <div className='formContainer'>
      <h2>Login for ChatApp</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input type="email"
          className='formfield'
          placeholder='Enter your Email'
          {...register("Email", {
            required: true
          })} />
        {errors.Email?.type === "required" &&
          <div>Email is required</div>}

        <input type="password"
          className='formfield'
          placeholder='Enter your Password'
          {...register("Password", {
            required: true,
            minLength: 8,
            maxLength: 20
          })} />
        {errors.Password?.type === "required" &&
          <div>Password is required</div>}
        {errors.Password?.type === "minLength" &&
          <div>Password must be of atleast of 8 characters</div>}
        {errors.Password?.type === "maxLength" &&
          <div>Password must not be more than 20 characters</div>}

        <button className='formfield'>Login</button>
        <span>Are you new ?
          <Link to="/register"> Register</Link></span>
      </form>
      <ToastContainer />
    </div>
  )
}

export default Login
