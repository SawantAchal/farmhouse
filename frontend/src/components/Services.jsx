import React, { useState } from 'react';
import Title from './Title';
import { FaShuttleVan} from 'react-icons/fa';
import { FaSwimmingPool } from "react-icons/fa";
import { GiKidSlide } from "react-icons/gi";
import { GiWaterfall } from "react-icons/gi";

const Services = () => {
  const [services] = useState([
    {
      icon: <FaSwimmingPool />,
      title: 'Refreshing Pool',
      info: 'Dive into our refreshing pool and unwind with style.',
    },
    {
      icon: <GiKidSlide />,
      title: 'Children’s Playground',
      info: 'Endless fun for kids with slides and play areas.',
    },
    {
      icon: <FaShuttleVan />,
      title: 'Free Shuttle Service',
      info: 'Enjoy hassle-free transportation to and from our farmhouse.',
    },
    {
      icon: <GiWaterfall />,
      title: 'Serene Waterfalls',
      info: 'Relax by the peaceful waterfall and embrace nature’s beauty.',
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
