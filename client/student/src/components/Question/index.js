import React from 'react';
import Link from 'next/link';

import { Container, Info, Title, Tags, Tag, InfoText } from './styles';

export default function Question({ id, title, tags, votes, answers, status }) {
  return (
    <Link href={`/question?id=${id}`}>
      <a style={{ width: '100%' }}>
        <Container>
          <Title>{title}</Title>
          <Info>
            <Tags>
              {tags.map(tag => <Tag key={tag.name}>{tag.name}</Tag>)}
            </Tags>
            <InfoText>{votes === 0 ? 'nenhum' : votes} voto(s)</InfoText>
            <InfoText>{answers === 0 ? 'nenhuma' : answers} resposta(s)</InfoText>
            <InfoText open={status === 'ABERTA'}>{status === 'ABERTA' ? 'Aberta' : 'Fechada'}</InfoText>
          </Info>
        </Container>
      </a>
    </Link>
  );
}
