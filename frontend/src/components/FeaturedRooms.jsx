import React from 'react';
import { useRoomContext } from '../context/context';
import Title from './Title';
import Room from './Room';
import Loading from './Loading';

const FeaturedRooms = () => {
  const { loading, featuredRooms: rooms } = useRoomContext();

  if (!rooms) {
    return <Loading />;
  }

  const roomComponents = rooms.map((room) => {
    return <Room key={room.id} room={room} />;  
  });

  return (
    <section className='featured-rooms'>
      <Title title="featured rooms" />
      <div className='featured-rooms-center'>
        {loading ? <Loading /> : roomComponents}
      </div>
    </section>
  );
};

export default FeaturedRooms;
