import React from 'react';
import Link from 'next/link';
import { IoIosHeart, IoMdHeartDislike } from 'react-icons/io';
import { parseISO, formatRelative } from 'date-fns';
import pt from 'date-fns/locale/pt-BR';
import { useSelector } from 'react-redux';

import {
  Container,
  Title,
  User,
  UserInfo,
  Likes,
  Content,
  Tags,
  Actions,
  CloseQuestion,
  DelQuestion,
} from './styles';
import { Tag } from '~/components/Question/styles';
import normalizeTag from '~/utils/normalizeTag';

export default function UserQuestion({
  userId,
  title,
  date,
  name,
  tags,
  content,
  status,
  likes,
  answersLength,
  voteQuestion,
  closeQuestion,
  delQuestion
}) {
  const profile = useSelector(state => state.user.profile);

  return (
    <Container>
      <Title>{title}</Title>

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

      <Likes>
        <IoIosHeart
          size={20}
          color="#4834D4"
          onClick={() => voteQuestion('like')}
        />
        <span>{likes} votos</span>
        <IoMdHeartDislike
          size={20}
          color="#4834D4"
          onClick={() => voteQuestion('dislike')}
        />
      </Likes>

      <Tags>
        {tags.map(tag => (
          <Tag key={tag.name}>
            <Link href={`/questions?filter=tag&id=${normalizeTag(tag.name)}`}>
              <a>
                {tag.name}
              </a>
            </Link>
          </Tag>
        ))}
      </Tags>

      <p><strong>{answersLength} resposta(s)</strong></p>

      {profile && profile.id === userId && (
        <Actions>
          <DelQuestion
            onClick={delQuestion}
            type="button"
          >
            apagar pergunta
          </DelQuestion>
          {status === 'ABERTA' && (
            <CloseQuestion
              onClick={closeQuestion}
              type="button"
            >
              fechar pergunta
          </CloseQuestion>
          )}
        </Actions>
      )}
    </Container>
  );
}
