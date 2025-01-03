import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeaderTag from '../components/navbar/styles.css'
import '../components/navbar/styles.css';

const Home = () => {
  return (
    <>
    <HeaderTag/>
    <Navbar />
    <div className="container">
      <h1>Home</h1>
      <p>Welcome to the home page.</p>
      </div>
    </>
  )
}

export default Home
