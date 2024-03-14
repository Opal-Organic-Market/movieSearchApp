import React from 'react'
import Header from '../components/header';
import Moviedetails from '../components/moviedetails';
import Footer from '../components/footer';
import Toprated from '../pages/top-rated' ;
const Homepage = () => {
  return (
    <>
      <Header/>
      <Moviedetails/>
      <Toprated/>
      <Footer/>
     

    </>
  )
}

export default Homepage;
