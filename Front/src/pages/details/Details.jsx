import React, { useState } from "react"
import "./details.css"
import "../../components/headers/headers.css"
import img from "../../assets/images/b5.jpg"
import { BsPencilSquare } from "react-icons/bs"
import { AiOutlineDelete } from "react-icons/ai"
import { useParams } from "react-router-dom"
import { useEffect } from "react"
import { blog } from "../../assets/datas/data"

export const Details = () => {
  const { id } = useParams()
  const [blogs, setBlogs] = useState(null)

  useEffect(() => {
    let blogs = blog.find((blogs) => blogs.id === parseInt(id))
    if (blogs) {
      setBlogs(blogs)
    }
  }, [])
  return (
    <>
      {blogs ? (
        <section className='singlePage'>
          <div className='container'>
            <div className='left'>
              <img src={blogs.cover} alt='' />
            </div>
            <div className='right'>
              <div className='buttons'>
                <button className='button'>
                  <BsPencilSquare />
                </button>
                <button className='button'>
                  <AiOutlineDelete />
                </button>
              </div>
              <h1>Betadine Feminine Wash</h1>
              <p>{blogs.desc}</p>
              <p>""</p>
              <p>Author: </p>
            </div>
          </div>
        </section>
      ) : null}
    </>
  )
}
