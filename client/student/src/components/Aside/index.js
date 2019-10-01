import React from 'react';
import Link from 'next/link';
import { injectIntl, FormattedMessage } from 'react-intl';

import Button from '~/components/UI/Button';
import { Container, TagsWrapper, Tags, Tag } from './styles';

function Aside({ intl: { messages } }) {
  return (
    <Container>
      <Button type="button" text={messages['aside.question']} />
      <TagsWrapper>
        <Link>
          <a>
            <h3>
              <FormattedMessage id="aside.tags" />{' '}
            </h3>
          </a>
        </Link>
        <Tags>
          <Tag>
            <Link href="/tag">
              <a>Tag 1</a>
            </Link>
          </Tag>
          <Tag>
            <Link href="/tag">
              <a>Tag 2</a>
            </Link>
          </Tag>
          <Tag>
            <Link href="/tag">
              <a>Tag 3</a>
            </Link>
          </Tag>
          <Tag>
            <Link href="/tag">
              <a>Tag 4</a>
            </Link>
          </Tag>
          <Tag>
            <Link href="/tag">
              <a>Tag 5</a>
            </Link>
          </Tag>
        </Tags>
      </TagsWrapper>
    </Container>
  );
}

export default injectIntl(Aside);
