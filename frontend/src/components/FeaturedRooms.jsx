import React from 'react'
import Loading from './Loading'
import Title from './Title'

const FeaturedRooms = () => {
    const { loading, featuredRooms: rooms } = useRoomContext();

    if (!rooms) {
      return <Loading />;
    }
  
    const roomComponents = rooms.map((room) => {
      return <room key={room.id} room={room} />;
    });

  return (
    <>
      <section className='featured-rooms'>
        <Title title="featured rooms" />
        <div className='featured-rooms-center'>
          {loading ? <Loading /> : roomComponents}
        </div>
      </section>
    </>
  )
}

export default FeaturedRooms