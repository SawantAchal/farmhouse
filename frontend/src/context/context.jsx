import React, { createContext, useContext, useEffect, useState } from 'react';
import items from './data';

const RoomContext = createContext();

const RoomProvider = ({ children }) => {
  const [state, setState] = useState({
    rooms: [],
    sortedRooms: [],
    featuredRooms: [],
    loading: true,
    type: 'all',
    capacity: 1,
    price: 600,
    minPrice: 0,
    maxPrice: 0,
    minSize: 0,
    maxSize: 0,
    breakfast: false,
    pets: false,
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        let roomsData = formatData(items);
        let featuredRoomsData = roomsData.filter((room) => room.featured === true);
        let maxPriceData = Math.max(...roomsData.map((item) => item.price));
        let maxSizeData = Math.max(...roomsData.map((item) => item.size));

        setState((prev) => ({
          ...prev,
          rooms: roomsData,
          sortedRooms: roomsData,
          featuredRooms: featuredRoomsData,
          loading: false,
          price: maxPriceData,
          maxPrice: maxPriceData,
          maxSize: maxSizeData,
        }));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // <-- Empty dependency array to run the effect only once

  const formatData = (items) => {
    return items.map((item) => {
      let id = item.sys.id;
      let images = item.fields.images.map((image) => image.fields.file.url);

      return { ...item.fields, images, id };
    });
  };

  const getRoom = (slug) => {
    let tempRooms = [...state.rooms];
    const room = tempRooms.find((room) => room.slug === slug);
    return room;
  };

  const handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const filterRooms = () => {
    let tempRooms = [...state.rooms];

    let { type, capacity, price, minSize, maxSize, breakfast, pets } = state;

    capacity = parseInt(capacity);

    tempRooms = tempRooms.filter((room) => type === 'all' || room.type === type);

    tempRooms = tempRooms.filter((room) => capacity === 1 || room.capacity >= capacity);

    tempRooms = tempRooms.filter((room) => room.price <= price);

    tempRooms = tempRooms.filter((room) => room.size >= minSize && room.size <= maxSize);

    if (breakfast) {
      tempRooms = tempRooms.filter((room) => room.breakfast === true);
    }

    if (pets) {
      tempRooms = tempRooms.filter((room) => room.pets === true);
    }

    setState((prev) => ({
      ...prev,
      sortedRooms: tempRooms,
    }));
  };

  return (
    <RoomContext.Provider value={{ ...state, getRoom, handleChange, filterRooms }}>
      {children}
    </RoomContext.Provider>
  );
};

const useRoomContext = () => {
  const context = useContext(RoomContext);
  if (!context) {
    throw new Error('useRoomContext must be used within a RoomProvider');
  }
  return context;
};

const withRoomProvider = (Component) => (props) => (
  <RoomProvider>
    <Component {...props} />
  </RoomProvider>
);

export { RoomProvider, useRoomContext, withRoomProvider };


