import React from 'react'
import "./HomePage.css"
import { Link } from 'react-router-dom'

function HomePage() {
  return (
    <div>
      <h1> Hey🙋‍♂️ We are learning React🚀</h1>
      <h2>let's learn together</h2>
      <button> <Link to="/join">Join us</Link></button>
    </div>
  )
}

export default HomePage
