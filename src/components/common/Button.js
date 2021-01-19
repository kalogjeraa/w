import React from 'react';
import {Link} from 'react-router-dom';

import '../../styles/button.css';

const STYLES = [
  'btn--primary',
  'btn--outline',
];

const SIZES = [
  'btn--medium',
  'btn--large',
];

export const Button = ({
  children,
  type,
  onClick,
  buttonStyle,
  buttonSize,
}) => {
  const checkButtonStyle = STYLES.includes(buttonStyle)
    ? buttonStyle
    : STYLES[0];

  const checkButtonSize = SIZES.includes(buttonSize)
    ? buttonSize
    : SIZES[0];

  return (
    <Link
      to={{pathname: 'https://en.wikipedia.org/wiki/Main_Page'}}
      target='_blank'
      className='btn-mobile'
    >
      <button
        className={`btn ${checkButtonStyle} ${checkButtonSize}`}
        onClick={onClick}
        type={type}
      >
        {children}
      </button>
    </Link>
  );
};