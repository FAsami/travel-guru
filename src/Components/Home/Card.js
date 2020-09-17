import React from 'react';
import { Link } from 'react-router-dom';

function Card(props) {
  const { name, photo } = props.place;

  return (
    <div className='col-4'>
      <div className='card'>
        <Link to={`/${name}`}>
          <img src={photo} className='card-img-top' alt={name} />
          <div className='card-body'>
            <h4 className='card-title'>{name}</h4>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Card;
