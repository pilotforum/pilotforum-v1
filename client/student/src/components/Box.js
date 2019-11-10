import React from 'react';
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

export default function Box({ name }) {
  return (
    <Container>
      <h3>{name}</h3>
    </Container>
  );
}
