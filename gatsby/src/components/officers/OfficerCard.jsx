import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

const OfficerCard = ({ id, name, title, phone, email, image, ...rest }) => {
  return (
    <article
      {...rest}
      key={id}
      className="max-w-sm p-4 mb-3 tracking-wide bg-white border-2 border-gray-200 rounded-md shadow-lg"
    >
      {image && <Img className="object-cover object-center mb-2 rounded-full h-28 w-28" image={image} alt="TODO" />}

      <div className="flex flex-col mb-4 space-y-1 text-base justify-items-start">
        <p className="text-xl font-normal text-gray-700 ">{name}</p>
        <p className="text-base font-normal ">{title}</p>
        <a className="text-blue-600" href={`tel:${phone}`}>
          {phone}
        </a>
        <a className="text-blue-600" href={`mailto:${email}`}>
          {email}
        </a>
      </div>
    </article>
  );
};

OfficerCard.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  title: PropTypes.string,
  phone: PropTypes.string,
  email: PropTypes.string,
  image: PropTypes.object,
};

export default OfficerCard;
