import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { GoogleMap, Marker, useLoadScript } from '@react-google-maps/api';

import { Spinner } from 'primitives';

const libraries = ['places'];
const mapContainerStyles = { width: '100%', height: '500px', display: 'flex' };
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  centerControl: true,
};

const LodgeMap = ({ geoLocation, ...rest }) => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.GATSBY_GOOGLE_API_KEY,
    libraries,
  });

  const location = useMemo(() => {
    if (!geoLocation) return null;
    return {
      lat: geoLocation.lat,
      lng: geoLocation.lng,
    };
  }, [geoLocation]);

  if (loadError) return 'Error loading maps 😢';

  return (
    <>
      {isLoaded ? (
        <section styles={{ minHeight: '550px' }} {...rest}>
          <GoogleMap options={options} zoom={14} center={location} mapContainerStyle={mapContainerStyles}>
            <Marker animation={2} position={geoLocation} />
          </GoogleMap>
        </section>
      ) : (
        <div styles={{ minHeight: '550px' }}>
          <Spinner />
        </div>
      )}
    </>
  );
};

LodgeMap.propTypes = {
  geoLocation: PropTypes.shape({
    lat: PropTypes.number,
    lng: PropTypes.number,
  }),
};

export default LodgeMap;
