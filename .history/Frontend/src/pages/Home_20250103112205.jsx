import React from 'react'
import Navbar from '../components/navbar/Navbar'
import "../components/navbar/styles.css";  // Correct relative path
import HeaderTag from '../components/navbar/header';

const Home = () => {
  return (
    <>
    <HeaderTag/>
    <Navbar />
    <h1>About</h1>
    </>
  )
}

export default Home
