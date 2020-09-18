import React from 'react';
import { AiFillStar } from 'react-icons/ai';

function ResultCard({ room }) {
  return (
    <div className='row mb-3'>
      <div className='col-5'>
        <img src={room.photo} alt={room.title} className='w-100' />
      </div>
      <div className='col-7'>
        <h6>{room.title}</h6>
        <p className='text-muted'>
          {room.guests} guests {room.bedrooms} bedrooms {room.baths} baths
        </p>
        <p className='text-muted'>
          {room.facilities}
          <br />
          {room.cancellation}
        </p>
        <h6>
          <span>
            <AiFillStar color='#D4AF37' />
            {room.ratings}
          </span>
          <br />
          <span>
            ${room.price}/<span className='text-muted'>Night </span>
          </span>
          <span className='text-muted'>$167 total</span>
        </h6>
      </div>
    </div>
  );
}

export default ResultCard;
