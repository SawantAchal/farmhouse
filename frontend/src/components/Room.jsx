import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import defaultImg from '../assets/details-1.jpeg';

const Room = ({ room }) => {
  const { name, slug, images, price } = room;

  return (
    <article className="room">
      <div className="img-container">
        <img src={images[0] || defaultImg} alt="single room" />
        <div className="price-top">
          <h6>Rs.{price}</h6>
          <p>Per person</p>
        </div>
        <Link to={`/single-room/${slug}`} className="btn-primary room-link">
          Feature
        </Link>
      </div>
      <p className="room-info">{name}</p>
    </article>
  );
};

Room.propTypes = {
  room: PropTypes.shape({
    name: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
};

export default Room;
