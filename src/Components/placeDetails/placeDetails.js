import React, { useContext, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { PlaceContext } from '../../App';
import '../SignIn/inputFieldStyle.css';

function PlaceDetails() {
  const { placeId } = useParams();
  const [places] = useContext(PlaceContext);
  const place = places.data[placeId - 1];
  const [input, setInput] = useState('Dhaka');

  return (
    <div className='row'>
      <div className='col-6'>
        <p className='lead'>{place.description}</p>
      </div>
      <div className='col-6'>
        <div className='card p-4'>
          <form>
            <div className='form-group'>
              <label className='text-muted' htmlFor='origin'>
                Origin
              </label>
              <input
                type='text'
                className='form-control font-weight-bold py-4'
                onChange={() => setInput(input)}
              />
            </div>
            <div className='form-group'>
              <label className='text-muted' htmlFor='origin'>
                Destination
              </label>
              <input
                type='text'
                className='form-control font-weight-bold py-4'
                value={place.name}
                readOnly
              />
            </div>

            <div className='row'>
              <div className='col-6'>
                <div className='form-group'>
                  <label className='text-muted'>From</label>
                  <input
                    type='date'
                    className='form-control font-weight-bold py-4'
                  />
                </div>
              </div>
              <div className='col-6'>
                <div className='form-group'>
                  <label className='text-muted'>To</label>
                  <input
                    type='date'
                    className='form-control font-weight-bold py-4'
                  />
                </div>
              </div>
            </div>
            <Link to={`/booking/${place.id}`}>
              <button
                type='submit'
                className='btn btn-block btn-warning font-weight-bold'
              >
                Start Booking
              </button>
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetails;
