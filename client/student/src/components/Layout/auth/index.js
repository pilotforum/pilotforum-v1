import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';

import { Wrapper, Content, Form, Logo } from './styles';

export default function AuthLayout({ children, link, linkMessage }) {
  return (
    <Wrapper>
      <Logo />
      <Content>
        <Form>{children}</Form>
        <Link href={link}>
          <a>{linkMessage}</a>
        </Link>
      </Content>
    </Wrapper>
  );
}

AuthLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  link: PropTypes.string.isRequired,
  linkMessage: PropTypes.string.isRequired,
};
