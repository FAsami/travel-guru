import React from 'react';
import { places } from '../Data/placesFakaData';
import { BsArrowRight } from 'react-icons/bs';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';
import Card from './Card';
function Home() {
  return (
    <div className='row'>
      <div className='col-4'>
        <h1>Cox's Bazar</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi
          deserunt ipsa accusantium, nobis iste error in placeat! Commodi magni
          ratione, quam necessitatibus maiores nisi repellat, officiis
          voluptates velit aliquid alias perferendis fugiat. Ipsam assumenda
          facilis iure, necessitatibus excepturi consectetur placeat?
        </p>
        <button className='btn btn-warning'>
          Booking <BsArrowRight />
        </button>
      </div>
      <div className='col-8'>
        <div className='row'>
          {places.map((place) => (
            <Card key={place.id} place={place} />
          ))}
        </div>
        <IoIosArrowDropleftCircle />
        <IoIosArrowDroprightCircle />
      </div>
    </div>
  );
}

export default Home;
