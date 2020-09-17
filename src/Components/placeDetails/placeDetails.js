import React from 'react';
import { backgroundImg } from '../../image/backgroundImage.png';
import '../Form/inputFieldStyle.css';
function PlaceDetails() {
  return (
    <div className='row'>
      <div className='col-6'>
        <h1 className='display-3'>Cox's Bazar</h1>
        <p className='lead'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          blanditiis perspiciatis laboriosam ut similique dolorum temporibus
          dicta inventore nemo? Assumenda voluptate asperiores est quis fuga,
          reprehenderit quo totam animi enim.
        </p>
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
                id='origin'
                className='form-control font-weight-bold py-4'
                value='Dhaka'
              />
            </div>
            <div className='form-group'>
              <label className='text-muted' htmlFor='origin'>
                Destination
              </label>
              <input
                type='text'
                id='origin'
                className='form-control font-weight-bold py-4'
                value='Cox Bazar'
              />
            </div>

            <div className='row'>
              <div className='col-6'>
                <div className='form-group'>
                  <label className='text-muted' htmlFor='origin'>
                    From
                  </label>
                  <input
                    type='date'
                    id='origin'
                    className='form-control font-weight-bold py-4'
                  />
                </div>
              </div>
              <div className='col-6'>
                <div className='form-group'>
                  <label className='text-muted' htmlFor='origin'>
                    To
                  </label>
                  <input
                    type='date'
                    id='origin'
                    className='form-control font-weight-bold py-4'
                  />
                </div>
              </div>
            </div>
            <button
              type='submit'
              className='btn btn-block btn-warning font-weight-bold'
            >
              Start Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PlaceDetails;
