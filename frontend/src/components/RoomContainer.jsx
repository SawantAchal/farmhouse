import React from 'react'
import Loading from './Loading'
import RoomFilter from './RoomFilter'
import RoomList from './RoomList'

const RoomContainer = () => {
  const { loading, sortedRooms, rooms } = useRoomContext(); 
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div>
        <RoomFilter rooms={rooms} />
        <RoomList rooms={sortedRooms} />
      </div>
    </>
  )
}

export default RoomContainer