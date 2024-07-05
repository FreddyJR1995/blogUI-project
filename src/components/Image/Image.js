import React from 'react';
import PropTypes from 'prop-types';
import './Image.css';

const Image = ({ src, alt, size, shape, className, style, ...props }) => {
  const sizeClass = size ? `image--${size}` : '';
  const shapeClass = shape ? `image--${shape}` : '';

  const combinedStyle = {
    ...style,
    ...(shape === 'circle' ? { borderRadius: '50%' } : {}),
  };

  return (
    <img
      src={src}
      alt={alt}
      className={`image ${sizeClass} ${shapeClass} ${className}`}
      style={combinedStyle}
      {...props}
    />
  );
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  shape: PropTypes.oneOf(['rounded', 'circle']),
  className: PropTypes.string,
  style: PropTypes.object,
};

Image.defaultProps = {
  alt: '',
  size: 'medium',
  shape: 'rounded',
  className: '',
  style: {},
};

export default Image;
