import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { injectIntl, FormattedMessage } from 'react-intl';

import { Container, Logo, SearchBar, Profile, Menu } from './styles';

import { signOut } from '~/store/modules/auth/actions';

function Header({ intl: { messages } }) {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.user.profile);

  function handleLogout() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Link href="/">
        <a>
          <Logo />
        </a>
      </Link>
      <SearchBar type="text" placeholder={messages['header.searchBar']} />
      {profile ?
        (<Profile>
          <div>
            <strong>{profile.name}</strong>
            <button type="button" onClick={handleLogout}>Sair</button>
          </div>
          <img
            src='https://api.adorable.io/avatars/50/abott@adorable.png'
            alt="João Pedro"
          />
        </Profile>) : (
          <Menu>
            <li>
              <Link href="signin">
                <a>
                  <FormattedMessage id="header.signin" />
                </a>
              </Link>
            </li>
            <li>
              <Link href="signup">
                <a>
                  <FormattedMessage id="header.signup" />
                </a>
              </Link>
            </li>
          </Menu>)}
    </Container>
  );
}

export default injectIntl(Header);
