import React from 'react';
import ResultCard from './ResultCard';

function SearchResults() {
  return (
    <div className='row'>
      <div className='col-6'>
        <p className='text-muted'>252 Stays Apr 13-17 252 guests</p>
        <h3>Stay in Cox's Bazar</h3>
        <ResultCard />
      </div>
      <div className='col-6'></div>
    </div>
  );
}

export default SearchResults;
