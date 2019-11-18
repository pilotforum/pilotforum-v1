import React from 'react';
import PropTypes from 'prop-types';

import Header from '~/components/Header';
import Navigation from '~/components/Navigation';
import Aside from '~/components/Aside';
import { Wrapper, Container } from './styles';

export default function DefaultLayout({ children, withoutAside }) {
  return (
    <Wrapper>
      <Header />
      <hr />
      <Container withoutAside={withoutAside}>
        <Navigation />
        <main>{children}</main>
        {!withoutAside && <Aside />}
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
