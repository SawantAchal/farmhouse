import React, { useState } from 'react';
import Title from './Title';
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa';

const Services = () => {
  const [services] = useState([
    {
      icon: <FaCocktail />,
      title: 'Free Cocktail',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <FaHiking />,
      title: 'Hiking Trails',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <FaShuttleVan />,
      title: 'Free Shuttle',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      icon: <FaBeer />,
      title: 'Craft Beer',
      info: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ]);

  return (
    <section className="services">
      <Title title="services" />
      <div className="services-center">
        {services.map((item, index) => (
          <article key={index} className="service">
            <span>{item.icon}</span>
            <h6>{item.title}</h6>
            <p>{item.info}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Services;
