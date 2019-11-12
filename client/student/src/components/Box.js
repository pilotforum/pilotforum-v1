import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

const Container = styled.div`
  height: 50px;
  padding: 15px 20px;
  margin-bottom: 20px;
  background: rgba(223, 228, 234, 0.5);
  border-radius: 5px;
  width: 100%;

  display: flex;
  justify-content: flex-start;
  align-items: center;

  > h3 {
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #000000;
  }
`;

export default function Box({ name, link }) {
  if (link) {
    return (
      <Link href={link}>
        <a style={{ width: '100%' }}>
          <Container>
            <h3>{name}</h3>
          </Container>
        </a>
      </Link>
    )
  }

  return (
    <Container>
      <h3>{name}</h3>
    </Container>
  );
}
