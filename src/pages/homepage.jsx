import React from 'react'
import Header from '../components/header';
import Moviedetails from '../components/movielist';
import Footer from '../components/footer';
import Toprated from '../pages/top-rated' ;
import Series from '../components/series-list';
const Homepage = () => {
  return (
    <>
      <Header/>
      <Moviedetails/>
      <Toprated/>
      <Series/>
      <Footer/>
     

    </>
  )
}

export default Homepage;
