import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Navigation from '~/components/Navigation';
import Aside from '~/components/Aside';
import { Wrapper, Container } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <Wrapper>
      <Header />
      <hr />
      <Container>
        <Navigation />
        {children}
        <Aside />
      </Container>
    </Wrapper>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
