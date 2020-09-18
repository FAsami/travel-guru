import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PlaceContext } from '../../App';
import GoogleMap from '../Map/GoogleMap';
import ResultCard from './ResultCard';

function SearchResults() {
  const { id } = useParams();
  const [places] = useContext(PlaceContext);
  const place = places.data[id];
  const rooms = place.rooms;

  return (
    <div className='row'>
      <div className='col-6'>
        <p className='text-muted'>252 Stays Apr 13-17 252 guests</p>
        <h3>Stay in Cox's Bazar</h3>
        {rooms.map((room) => (
          <ResultCard key={room.id} room={room} />
        ))}
      </div>
      <div className='col-6'>
        <GoogleMap place={place} />
      </div>
    </div>
  );
}

export default SearchResults;
