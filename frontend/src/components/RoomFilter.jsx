import React from 'react';
import { useRoomContext } from '../context/context'; 
import Title from './Title';

const RoomFilter = ({ rooms }) => {
  const getUnique = (items, value) => {
    return [...new Set(items.map(item => item[value]))];
  };

  const context = useRoomContext();
  const {
    filterRooms,
    handleChange,
    type,
    capacity,
    price,
    minSize,
    maxSize,
    breakfast,
    pets,
    minPrice,
    maxPrice,
  } = context;

  const handleSubmit = (e) => {
    e.preventDefault();
    filterRooms();
  };

  // Get unique types
  let types = getUnique(rooms, 'type');
  types = ['all', ...types];
  // Map types to JSX
  types = types.map((item, index) => {
    return <option value={item} key={index}>{item}</option>;
  });

  // Get unique people (capacities)
  let people = getUnique(rooms, 'capacity');
  people = people.map((item, index) => {
    return <option key={index} value={item}>{item}</option>;
  });

  return (
    <>
      <section className='filter-container'>
        <Title title="Search Rooms" />
        <form className='filter-form' onSubmit={handleSubmit}>
          <div className='form-group'>
            <label htmlFor='type'>Room Type</label>
            <select name='type' id='type' value={type} className='form-control' onChange={handleChange}>
              {types}
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='capacity'>Guests</label>
            <select name='capacity' id='capacity' value={capacity} className='form-control' onChange={handleChange}>
              {people}
            </select>
          </div>

          <div className='form-group'>
            <label htmlFor='price'>Room Price ${price}</label>
            <input type='range' name='price' min={minPrice} max={maxPrice} id='price' value={price} onChange={handleChange} className='form-control' />
          </div>

          <div className='form-group'>
            <label htmlFor='size'>Room Size</label>
            <div className='size-inputs'>
              <input type='number' name='minSize' id='size' value={minSize} className='size-input' onChange={handleChange} />
              <input type='number' name='maxSize' id='size' value={maxSize} className='size-input' onChange={handleChange} />
            </div>
          </div>

          <div className='form-group'>
            <div className='single-extra'>
              <input type='checkbox' checked={breakfast} name='breakfast' id='breakfast' onChange={handleChange} />
              <label htmlFor='breakfast'>Breakfast</label>
            </div>
            <div className='single-extra'>
              <input type='checkbox' checked={pets} name='pets' id='pets' onChange={handleChange} />
              <label htmlFor='pets'>Pets</label>
            </div>
          </div>

          <div className='form-group'>
            <button type="button" onClick={filterRooms} className='btn-primary'>Filter Rooms</button>
          </div>
        </form>
      </section>
    </>
  );
};

export default RoomFilter;
