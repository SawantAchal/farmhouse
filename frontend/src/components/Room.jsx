import React from 'react'
import { Link } from 'react-router-dom';

const Room = ({ room }) => {
    Room.propTypes = {
        room:PropTypes.shape({
          name:PropTypes.string.isRequired,
          slug:PropTypes.string.isRequired,
          images:PropTypes.arrayOf(PropTypes.string).isRequired,
          price:PropTypes.number.isRequired,
        })
      }
      const { name, slug, images, price } = room;
  return (
    <>
            <article className='room'>
      <div className='img-container'>
        <img src={images[0] || defaultImg} alt='single room' />
        <div className='price-top'>
          <h6>Rs.{price}</h6>
          <p>Per night</p>
        </div>
        <Link to={`/single-room/${slug}`} className='btn-primary room-link'>Feature</Link>
      </div>
      <p className='room-info '>{name}</p>
    </article>
    </>
  )
}

export default Room