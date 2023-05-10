import React from 'react'
import food from '../assests/food.jpeg'
import {Link} from 'react-router-dom'
import "../styles/Home.css"

const Home = () => {
  return (
     <div className="home" style={{backgroundImage:`url(${food})`}}>
        <div className="headerContainer">
          <h1>Food Corner</h1>
          <p>INDIAN FOOD AT A CLICK</p>
          <Link to="/menu">
          <button>Order Now</button>
          </Link>
        </div>
     </div>
  )
}

export default Home
