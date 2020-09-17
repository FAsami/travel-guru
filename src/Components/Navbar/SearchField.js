import React from 'react';
import { FaSearch } from 'react-icons/fa';
import './searchFieldStyle.css';

export default function SearchField() {
  return (
    <div className='main'>
      <div className='form-group has-search'>
        <FaSearch className='form-control-feedback p-2' />
        <input type='text' className='form-control' placeholder='Search' />
      </div>
    </div>
  );
}
