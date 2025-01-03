import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HeaderTag from '../components/navbar/header';
import '../header.css'
const Home = () => {
  return (
    <>

    <HeaderTag/>
    <div class="container-fluid">
    <div class="row">
    <Navbar />
    </div>
    </div>
    <h1>About</h1>
    </>
  )
}

export default Home
