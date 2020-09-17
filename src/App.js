import React, { createContext, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
} from 'react-router-dom';
import SignIn from './Components/Form/SignIn';
import Home from './Components/Home/Home';
import PlaceDetails from './Components/placeDetails/placeDetails';

export const UserContext = createContext();
export const PlaceContext = createContext();

function App(props) {
  const [user, setUser] = useState({});
  const [places, setPlaces] = useState({});
  return (
    <BrowserRouter>
      <UserContext.Provider value={[user, setUser]}>
        <PlaceContext.Provider>
          <div className='container'>
            <Navbar />
            <PlaceDetails />
          </div>
        </PlaceContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
