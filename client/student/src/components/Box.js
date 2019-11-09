import React from 'react';
import styled from 'styled-components';

const Container = styled.div``;

export default function Box({ title }) {
  return <Container>{title}</Container>;
}
