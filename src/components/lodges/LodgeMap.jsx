import React from 'react';
import PropTypes from 'prop-types';
import { LoadScript, GoogleMap, Marker } from '@react-google-maps/api';

import mapStyles from './mapStyles';

const libraries = ['places'];
const mapContainerStyles = { width: '100%', height: '500px', display: 'flex' };
const options = { styles: mapStyles, disableDefaultUI: true, zoomControl: true };

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

// const LocationContainer = styled.section`
//   margin-top: 15px;
//   background-color: #fff;
//   width: 100%;

//   h2 {
//     border-bottom: 1px dashed #e6e8ed;
//     padding: 20px 30px;
//   }

//   .body {
//     display: flex;
//     flex-direction: column;
//     padding: 20px 30px 20px 30px;

//     h3 {
//       font-size: 14px;
//       line-height: 16px;
//     }

//     p {
//       color: #696969;
//       font-size: 12px;
//       line-height: 16px;
//     }

//     img {
//       width: 100%;
//       margin-top: 20px;
//     }
//   }

//   .map-wrapper {
//     margin-top: 20px;

//     button {
//       img {
//         margin: 0;
//       }
//     }

//     .info-box {
//       padding: 20px;
//       width: 100%;
//     }
//   }
// `;
