import React from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"

export const Register = () => {
  return (
    <>
      <section className='login'>
        <div className='container'>
          <div className='backImg'>
            <img src={back} alt='' />
            <div className='text'>
              <h3>Register</h3>
              <h1>My account</h1>
            </div>
          </div>

          <form>
            <span>Email address *</span>
            <input type='text' required />
            <span>UserName *</span>
            <input type='text' required />
            <span>FirstName *</span>
            <input type='text' required />
            <span>LastName *</span>
            <input type='text' required />
            <span>Password *</span>
            <input type='password' required />
            <span>Country</span>
            <input type='password' required />
            <span>Age</span>
            <input type='password' required />
            <button className='button'>Register</button>
          </form>
        </div>
      </section>
    </>
  )
}