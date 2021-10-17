import React from 'react';
import PropTypes from 'prop-types';
import tw from 'twin.macro';
import { GatsbyImage as Img } from 'gatsby-plugin-image';

const OfficerCard = ({ name, title, phone, email, image, lectures, skipImage, ...rest }) => {
  const isPlural = lectures && lectures.split(',').length > 1;

  const HeadshotImage = () => {
    return (
      <div>
        {image ? (
          <Img
            className="self-center object-cover object-center mb-4 rounded-md h-28 w-28 lg:self-baseline"
            image={image}
            alt="TODO"
          />
        ) : (
          <div
            style={{ width: '150px', height: '150px' }}
            className="self-center object-cover object-center mb-4 rounded-md h-28 w-28 lg:self-baseline"
          ></div>
        )}
      </div>
    );
  };

  return (
    <article
      {...rest}
      css={[
        tw`flex flex-col h-full max-w-sm p-4 mb-3 tracking-wide bg-white border-2 border-gray-200 rounded-md shadow-lg`,
        skipImage ? tw`justify-center` : tw`justify-between`,
      ]}
    >
      {!skipImage && <HeadshotImage />}

      <div className="flex flex-col space-y-1 overflow-hidden text-base">
        <p className="font-semibold text-gray-700 text-l">{name}</p>
        {title && <p className="text-base font-normal ">{title}</p>}
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
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  title: PropTypes.string,
  lectures: PropTypes.string,
  image: PropTypes.object,
  skipImage: PropTypes.bool,
};

export default OfficerCard;
