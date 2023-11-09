import React from 'react'
import { nav } from "../../assets/datas/data"
import logo from '../../assets/images/blog.svg'
import './Headers.css'

import { Link } from 'react-router-dom'
export const Headers = () => {
  return (
    <> 
    <Headers >
       <div className="scontainer flex">
       <div className="logo">
       <img src={logo} alt="logo" width= "100px"/>
       </div>
       <nav>
            <ul>
              {nav.map((link) => (
                <li key={link.id}>
                  <Link to={link.url}>{link.text}</Link>
                </li>
              ))}
            </ul>
          </nav>
       </div>
    </Headers>
   
    </>
  )
}
