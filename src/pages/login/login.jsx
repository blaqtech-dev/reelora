import React, { useState } from 'react'
import './login.css'
import logo from '../../assets/reelora1.png'
import { login,signUp } from '../../firebase'
import netflix_spinner from '../../assets/netflix_spinner.gif'

const Login = () => {

const [signState,setSignState]=useState('Sign In')
const [name,setName]=useState('')
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const [loading,setLoading]=useState(false)


const user_state = async (e) => {
  e.preventDefault();
setLoading(true)
  if (signState === 'Sign In') {
    await login(email, password);
  } else {
    await signUp(name, email, password);
  }
  setLoading(false)
};

  return (
    loading?<div className="spinner">
<img src={netflix_spinner} alt='spinner'/>
    </div>:
    <div className='login'>
      <img src={logo} alt='login_logo' className='login-logo'/>
      <div className='login-form'>
        <h1>{signState}</h1>
       <form className="login-form" onSubmit={user_state}>
          {
            signState ==='Sign Up'?
            <input type='text' placeholder='your name'
            value={name} onChange={(e)=>{setName(e.target.value)}}
            />:<></>
          }

<input type='email' placeholder='email'
value={email} onChange={(e)=>{setEmail(e.target.value)}}
/>
<input type='password' placeholder='password'
value={password} onChange={(e)=>{setPassword(e.target.value)}}
/>
<button type="submit">
  {signState}
</button>
<div className='form-help'>
  <div className='remember'>
    <input type='checkbox'/>
    <label htmlFor=''>Remember Me</label>
  </div>
  <p>Need Help?</p>
</div>

        </form>
<div className='form-switch'>
  {
    signState ==='Sign Up'?  <p>already have account?<span onClick={()=>setSignState('Sign In')}> sign in now</span></p>
    :<p>New to Reelora? <span onClick={()=>setSignState('Sign Up')}>sign up now</span></p>
  }
  

</div>


      </div>
    </div>
  )
}

export default Login
