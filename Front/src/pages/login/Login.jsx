import React from "react"

import "./login.css"
import back from "../../assets/images/my-account.jpg"
import { useNavigate } from "react-router"

export const Login = () => {
const navigate=useNavigate()

function handleClick() {
  navigate('/')}
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Login</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form>
            <span>Username or email address *</span>
            <input type='text' required />
            <span>Password *</span>
            <input type='password' required />
            <button  className='button'button onClick={handleClick} >Log in</button>
          </form>
        </div>
      </section>
    </>
  )
}