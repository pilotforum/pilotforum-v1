import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Link from 'next/link';
import Router from 'next/router';
import { injectIntl, FormattedMessage } from 'react-intl';

import Button from '~/components/UI/Button';
import { Container, TagsWrapper, Tags, Tag } from './styles';
import normalizeTag from '~/utils/normalizeTag';

import { loadTagsRequest } from '~/store/modules/tags/actions'

function Aside({ intl: { messages } }) {
  const dispatch = useDispatch();
  const { tags, loading } = useSelector(state => state.tags);

  useEffect(() => {
    if (tags.length === 0) {
      dispatch(loadTagsRequest());
    }
  }, []);

  return (
    <Container>
      <Button
        type="button"
        text={messages['aside.question']}
        onClick={() => Router.push('/question/new')}
      />
      <TagsWrapper>
        <Link href="/tags">
          <a>
            <h3>
              <FormattedMessage id="aside.tags" />{' '}
            </h3>
          </a>
        </Link>
        <Tags>
          {loading && !tags ? <p>Carregando tags...</p> :
            tags.map(tag => (
              <Tag key={tag.id}>
                <Link href={`/questions?filter=tag&id=${normalizeTag(tag.name)}`}>
                  <a>{tag.name}</a>
                </Link>
              </Tag>
            ))}
        </Tags>
      </TagsWrapper>
    </Container>
  );
}

export default injectIntl(Aside);
