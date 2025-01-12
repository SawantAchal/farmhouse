import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'
import Services from '../components/Services'
import FeaturedRooms from '../components/FeaturedRooms'
import Contact from '../components/Contact'
import defaultBcg from '../assets/defaultBcg.jpeg'
import lobby2 from '../assets/lobby2.jpeg'
import entry from '../assets/entry.jpeg'

const Home = () => {
  const imageList = [defaultBcg,lobby2, entry ];
  return (
    <>
      <Hero images={imageList} autoPlay={3000}>
        <Banner title={"luxurious rooms"} subtitle={"deluxe rooms starting at 750RS"}>
          <Link to="/rooms" className='btn-primary'>our rooms</Link>
        </Banner>
      </Hero >
      <Services />
      <FeaturedRooms/>
      <Contact/>
    </>
  )
}

export default Home