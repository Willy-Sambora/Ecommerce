import React from 'react'
import './CSS/LoginSignUp.css'

const LoginSignUp = () => {
  return (

    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        <div className="loginsignup-fields">
          <input type="text" placeholder='Your Name' />
          <input type="email" placeholder='Email Address' />
          <input type="password" placeholder='Password' />
        </div>
        <button>Continue</button>
        <p className="loginsignup-login">Already having an account? <span>Login Here</span></p>
        <div className="loginsignup-agree">
          <input type="checkbox" name='' id=''/>
          <p>By continuing, I agree to the use of terms of use and privacy.</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp
