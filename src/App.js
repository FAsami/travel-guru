import React, { createContext, useState } from 'react';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import SignIn from './Components/SignIn/SignIn';
import Home from './Components/Home/Home';
import PlaceDetails from './Components/placeDetails/placeDetails';
import SearchResults from './Components/SearchResult/SearchResults';
import NotFound from './Components/NotFound/NotFound';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import { placeData } from './Components/Data/placesFakaData';

export const UserContext = createContext();
export const PlaceContext = createContext();

function App() {
  const [user, setUser] = useState({ email: '', name: '' });
  const [places, setPlaces] = useState({ data: placeData });
  return (
    <BrowserRouter>
      <UserContext.Provider value={[user, setUser]}>
        <PlaceContext.Provider value={[places, setPlaces]}>
          <div className='container'>
            <Navbar />
            <Switch>
              <Route exact path='/'>
                <Home />
              </Route>
              <Route path='/login'>
                <SignIn />
              </Route>
              <PrivateRoute path='/booking/:id'>
                <SearchResults />
              </PrivateRoute>
              <Route path='/places/:placeId'>
                <PlaceDetails />
              </Route>
              <Route path='*'>
                <NotFound />
              </Route>
            </Switch>
          </div>
        </PlaceContext.Provider>
      </UserContext.Provider>
    </BrowserRouter>
  );
}

export default App;
