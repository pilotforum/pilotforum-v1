import React from 'react';
import Link from 'next/link';
import { injectIntl, FormattedMessage } from 'react-intl';

import { Container, Logo, SearchBar, Menu } from './styles';

function Header({ intl: { messages } }) {
  return (
    <Container>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <SearchBar type="text" placeholder={messages['header.searchBar']} />
      <Menu>
        <li>
          <Link href="signin">
            <a>
              <FormattedMessage id="header.signin" />
            </a>
          </Link>
        </li>
        <li>
          <Link href="sighup">
            <a>
              <FormattedMessage id="header.signup" />
            </a>
          </Link>
        </li>
      </Menu>
    </Container>
  );
}

export default injectIntl(Header);
