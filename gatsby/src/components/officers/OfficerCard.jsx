import React from 'react';
import PropTypes from 'prop-types';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

const OfficerCard = ({ id, name, title, phone, email, image, lectures, ...rest }) => {
  const isPlural = lectures && lectures.split(',').length > 1;

  return (
    <article
      {...rest}
      key={id}
      className="flex flex-col justify-between h-full max-w-sm p-4 mb-3 tracking-wide bg-white border-2 border-gray-200 rounded-md shadow-lg"
    >
      {image && (
        <Img
          className="self-center object-cover object-center mb-4 rounded-md h-28 w-28 lg:self-baseline"
          image={image}
          alt="TODO"
        />
      )}

      <div className="flex flex-col mb-4 space-y-1 overflow-hidden text-base justify-items-end">
        <p className="font-semibold text-gray-700 text-l">{name}</p>
        <p className="text-base font-normal ">{title}</p>
        {lectures && (
          <p className="text-base font-normal ">
            {lectures} lecture{isPlural && 's'}
          </p>
        )}
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
  lectures: PropTypes.string,
  image: PropTypes.object,
};

export default OfficerCard;
