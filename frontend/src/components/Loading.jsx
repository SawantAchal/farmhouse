import React from 'react'
import loading from '../assets/gif/loading-arrow.gif'

const Loading = () => {
  return (
    <>
      <div className='loading'>
        <h4>rooms data loading</h4>
        <img src={loading} />
      </div>
    </>
  )
}

export default Loading