import { useForm } from 'react-hook-form'
import { Link } from 'react-router-dom'
import './form.css'

function Login() {

  const { register, handleSubmit, formState: { errors } } = useForm()
  const onSubmit = data => console.log(data)

  return (
    <div className='formContainer'>
      <h2>Login for ChatApp</h2>
      <form onSubmit={handleSubmit(onSubmit)}>

        <input className='formfield'
          placeholder='Enter your Email'
          {...register("Email", {
            required: true
          })} />
        {errors.Email?.type === "required" &&
          <div>Email is required</div>}

        <input className='formfield'
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
    </div>
  )
}


export default Login
