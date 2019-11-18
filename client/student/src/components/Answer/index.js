import React from 'react';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';

import { Container } from './styles';
import { User, UserInfo, Content } from '~/components/UserQuestion/styles';

export default function Answer({ name, date, content }) {
  return (
    <Container>
      <User>
        <img
          src='https://api.adorable.io/avatars/50/abott@adorable.png'
          alt={name}
        />
        <UserInfo>
          <h3>{name}</h3>
          <p>{formatRelative(parseISO(date), new Date(), { locale: pt })}</p>
        </UserInfo>
      </User>

      <Content dangerouslySetInnerHTML={{ __html: content }} />
    </Container>
  );
}
