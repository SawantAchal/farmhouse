import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import Contact from '../components/Contact'

const Home = () => {
  return (
    <>
      <Hero>
        <Banner title={"luxurious rooms"} subtitle={"deluxe rooms starting at 5000RS"}>
          <Link to="/rooms" className='btn-primary'>our rooms</Link>
        </Banner>
      </Hero>
      <Services />
      <FeaturedRooms/>
      <Contact/>
    </>
  )
}

export default Home