import React, { useContext } from 'react';
import { BsArrowRight } from 'react-icons/bs';
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from 'react-icons/io';

import Card from './Card';
import { Link } from 'react-router-dom';
import { PlaceContext } from '../../App';
function Home() {
  const [places] = useContext(PlaceContext);
  const homeCompoentPlace = places.data[0];

  return (
    <div className='row'>
      <div className='col-4'>
        <h1>{homeCompoentPlace.name}</h1>
        <p>{homeCompoentPlace.description}</p>
        <Link to={`/places/${homeCompoentPlace.id}`}>
          <button className='btn btn-warning'>
            Booking <BsArrowRight />
          </button>
        </Link>
      </div>
      <div className='col-8'>
        <div className='row'>
          {places.data.map((place) => (
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
