import React, { useState } from "react"
import "./login.css"
import back from "../../assets/images/my-account.jpg"
import axios from "axios"
 

export const Register = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [email, setEmail] = useState("")
  const [lastname, setlastname] = useState("")
  const [firstname, setfirstname] = useState("")
  const [country, setcountry] = useState("")
  const [age, setage] = useState()
  const [error, setError] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(false)
    try {
      const res = await axios.post("http://localhost:7000/createprofil", {
        username,
        password,
        email,
        lastname,
        firstname,
        country,
        age,
      })

      res.data && window.location.replace("/login")
    } catch (error) {
      setError(true)
    }
    axios.post("http://localhost:7000/createuser",{
        username,
        password,
        email,
        lastname,
        firstname,
        country,
        age,
      }).then(response=>console.log("done")).catch((error)=>console.log(error))
  }

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

          <form onSubmit={handleSubmit}>
            <span>Username *</span>
            <input type='text' required onChange={(e) => setUsername(e.target.value)} />
            <span> lastname *</span>
            <input type='text' required onChange={(e) => setlastname(e.target.value)} />
            <span>firstname *</span>
            <input type='text' required onChange={(e) => setfirstname(e.target.value)} />
            <span>country *</span>
            <input type='text' required onChange={(e) => setcountry(e.target.value)} />
            <span>age *</span>
            <input type='text' required onChange={(e) => setage(e.target.value)} />
            <span>Email address *</span>
            <input type='email' required onChange={(e) => setEmail(e.target.value)} />
            <span>Password *</span>
            <input type='password' required onChange={(e) => setPassword(e.target.value)} />
            <button type='submit' className='button'>
              Register
            </button>
          </form>
          {error && <span>Someting went wrong</span>}
        </div>
      </section>
    </>
  )
}
