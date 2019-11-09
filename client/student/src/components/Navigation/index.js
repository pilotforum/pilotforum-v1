import React from 'react';
import Link from 'next/link';
import { IoMdHome, IoIosBriefcase, IoMdPerson } from 'react-icons/io';
import { MdLibraryBooks } from 'react-icons/md';
import { FaQuestionCircle, FaCog } from 'react-icons/fa';
import { FormattedMessage } from 'react-intl';

import { Wrapper, Container, Info, List, Item } from './styles';

export default function Navigation() {
  return (
    <Wrapper>
      <Container>
        <Info>
          <FormattedMessage id="navigation.list_menu" />
        </Info>
        <List>
          <Item>
            <Link href="/">
              <a>
                <IoMdHome />
                <FormattedMessage id="navigation.list_item_menu_home" />
              </a>
            </Link>
          </Item>
          <Item>
            <Link href="/courses">
              <a>
                <IoIosBriefcase />
                <FormattedMessage id="navigation.list_item_menu_courses" />
              </a>
            </Link>
          </Item>
          <Item>
            <Link href="/subjects">
              <a>
                <MdLibraryBooks />
                <FormattedMessage id="navigation.list_item_menu_subjects" />
              </a>
            </Link>
          </Item>
        </List>
      </Container>
      <Container>
        <Info>
          <FormattedMessage id="navigation.list_dashboard" />
        </Info>
        <List>
          <Item>
            <Link href="/profile">
              <a>
                <IoMdPerson />
                <FormattedMessage id="navigation.list_item_dashboard_profile" />
              </a>
            </Link>
          </Item>
          <Item>
            <Link href="/questions">
              <a>
                <FaQuestionCircle />
                <FormattedMessage id="navigation.list_item_dashboard_questions" />
              </a>
            </Link>
          </Item>
          <Item>
            <Link href="/profile/settings">
              <a>
                <FaCog />
                <FormattedMessage id="navigation.list_item_dashboard_configuration" />
              </a>
            </Link>
          </Item>
        </List>
      </Container>
    </Wrapper>
  );
}
