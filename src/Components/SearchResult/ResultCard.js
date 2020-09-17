import React from 'react';
import { AiFillStar } from 'react-icons/ai';

function ResultCard() {
  return (
    <div className='row'>
      <div className='col-5'>
        <img
          src='https://dummyimage.com/270x188/000/fff'
          alt=''
          className='w-100'
          srcset=''
        />
      </div>
      <div className='col-7'>
        <h4>Lorem ipsum dolor sit amet consectetur adipisicin</h4>
        <p className='text-muted'>4 guests 2 bedrooms 2 baths </p>
        <p className='text-muted'>Wifi air conditiong kitchen </p>
        <p className='text-muted'>Cancellation flexbility available</p>
        <h5>
          <span px-3>
            <AiFillStar />
            4.9(20)
          </span>
          <span px-2>
            $34/ <span className='text-muted'>Night</span>
          </span>
          <span className='text-muted'>$167 total</span>
        </h5>
      </div>
    </div>
  );
}

export default ResultCard;
