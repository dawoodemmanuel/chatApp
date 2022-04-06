import { useForm } from 'react-hook-form'
import { useNavigate, Link } from 'react-router-dom'
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import './form.css'

function Register() {

    const { register, handleSubmit, formState: { errors } } = useForm()
    //const navigate = useNavigate()
    const toastCSS = {
        position: "bottom-right",
        autoClose: 8000,
        pauseOnHover: true,
        draggable: true,
        //theme: "dark",
    }
    const onSubmit = async (data) => {
        const { Username, Email, Password } = data
        const check = axios.post('/register', {
            username: Username,
            email: Email,
            password: Password
        }).then(res => {

            if (res.data === true) {
                toast.success("Registration is successful", toastCSS)
                localStorage.setItem("react-chat-app",
                    JSON.stringify(check.user))
            } 
            if(res.data === false) {
                toast.error("This Email is already Exist", toastCSS)
            }
        })
    }

    return (
        <div className='formContainer'>
            <h2>Register for ChatApp</h2>
            <form onSubmit={handleSubmit(onSubmit)} method="post">
                <input className='formfield'
                    placeholder='Enter your Username'
                    {...register("Username",
                        {
                            required: true,
                            maxLength: 20,
                        })} />
                {errors.Username?.type === "required" &&
                    toast.error("User Name is required", toastCSS)}

                <input type="email"
                    className='formfield'
                    placeholder='Enter your Email'
                    {...register("Email", {
                        required: true,
                    })} />
                {errors.Email?.type === "required" &&
                    <div>Email is required</div>}

                <input type="password"
                    className='formfield'
                    placeholder='Enter your Password'
                    {...register("Password", {
                        required: true,
                        minLength: 8,
                        maxLength: 20,
                    })} />
                {errors.Password?.type === "required" &&
                    <div>Password is required</div>}
                {errors.Password?.type === "minLength" &&
                    <div>Password should be of atleast of 8 characters</div>}
                {errors.Password?.type === "maxLength" &&
                    <div>Password should not be more than 20 characters</div>}

                <button className='formfield'>Register</button>
                <span>Already have an account
                    <Link to="/login"> Login</Link></span>
            </form>
            <ToastContainer />
        </div>
    )
}


export default Register
