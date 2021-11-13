import React from 'react';
import PropTypes from 'prop-types';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

import mapStyles from './mapStyles';

const libraries = ['places'];
const mapContainerStyles = { width: '100%', height: '500px', display: 'flex' };
const options = {
  styles: mapStyles,
  disableDefaultUI: true,
  zoomControl: true,
};

const LodgeMap = ({ geoLocation }) => {
  return (
    <section>
      <div className="map-wrapper">
        <LoadScript libraries={libraries} googleMapsApiKey={process.env.GATSBY_GOOGLE_API_KEY}>
          <GoogleMap options={options} zoom={15} center={geoLocation} mapContainerStyle={mapContainerStyles}>
            <Marker animation={2} position={geoLocation} />
          </GoogleMap>
        </LoadScript>
      </div>
    </section>
  );
};

LodgeMap.propTypes = {
  geoLocation: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
};

export default LodgeMap;
