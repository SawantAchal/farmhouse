import React from 'react'

const Banner = ({title , children  ,subtitle}) => {
  return (
    <>
      <div className='banner'>
        <h1>{title}</h1>
        <div />
        <p>{subtitle}</p>
        {children}
      </div>
    </>
  )
}

export default Banner