import React from 'react';
import Link from 'next/link';

import { Container, Info, Title, Tags, Tag, InfoText } from './styles';

export default function Question({ title, tags, votes, answers }) {
  return (
    <Link href="/question">
      <a style={{ width: '100%' }}>
        <Container>
          <Title>{title}</Title>
          <Info>
            <Tags>
              {tags.map(tag => <Tag key={tag.name}>{tag.name}</Tag>)}
            </Tags>
            <InfoText>{votes} votos</InfoText>
            {/* <InfoText>{answers} respostas</InfoText> */}
          </Info>
        </Container>
      </a>
    </Link>
  );
}
