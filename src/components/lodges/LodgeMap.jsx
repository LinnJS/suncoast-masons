import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

const libraries = ['places'];
const mapContainerStyles = { width: '100%', height: '500px', display: 'flex' };
const options = {
  disableDefaultUI: true,
  zoomControl: true,
  centerControl: true,
};

const LodgeMap = ({ geoLocation, ...rest }) => {
  const location = useMemo(() => {
    if (!geoLocation) return null;
    return {
      lat: geoLocation.lat,
      lng: geoLocation.lng,
    };
  }, [geoLocation]);

  return (
    <section styles={{ minHeight: '550px' }} {...rest}>
      <LoadScript libraries={libraries} googleMapsApiKey={process.env.GATSBY_GOOGLE_API_KEY}>
        <GoogleMap options={options} zoom={14} center={location} mapContainerStyle={mapContainerStyles}>
          <Marker animation={2} position={geoLocation} />
        </GoogleMap>
      </LoadScript>
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
