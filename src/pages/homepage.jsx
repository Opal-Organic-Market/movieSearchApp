import React from 'react'
import Header from '../components/header';
import Moviedetails from '../components/moviedetails';
import Footer from '../components/footer';
import Series from '../components/series';

const Homepage = () => {
  return (
    <>
      <Header/>
      <Series/>
      <Moviedetails/>
      <Footer/>

    </>
  )
}

export default Homepage;
