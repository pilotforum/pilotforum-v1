import React from 'react';
import PropTypes from 'prop-types';

import { StyledButton } from './styles';

export default function Button({ text, ...rest }) {
  return <StyledButton {...rest}>{text}</StyledButton>;
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
};
