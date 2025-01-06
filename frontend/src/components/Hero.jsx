import React from 'react'

const Hero = ({ children, hero }) => {
  return (
    <><header className={hero}>{children}</header>;</>
  )
}
// Setting defaultProps outside of the functional component
Hero.defaultProps = {
    hero: "defaultHero",
  };
export default Hero