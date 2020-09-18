import React, { useContext } from 'react';
import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
import { PlaceContext } from '../../App';

const mapStyles = {
  width: '100%',
  height: '80%',
};

function GoogleMap(props) {
  const [places] = useContext(PlaceContext);
  const placeLocation = places.data[2].location;
  return (
    <Map
      google={props.google}
      zoom={10}
      style={mapStyles}
      initialCenter={{
        lat: placeLocation.latitude,
        lng: placeLocation.longitude,
      }}
    >
      <Marker
        position={{ lat: placeLocation.latitude, lng: placeLocation.longitude }}
      />
    </Map>
  );
}
export default GoogleApiWrapper({
  apiKey: 'AIzaSyC69fb5gYqkHysLxtGYDeEtLe5E87sqJGs',
})(GoogleMap);
