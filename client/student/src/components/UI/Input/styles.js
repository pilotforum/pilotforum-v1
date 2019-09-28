import styled from 'styled-components';
import { Input } from '@rocketseat/unform';

export const StyledInput = styled(Input)`
  background-color: ${({ theme }) => theme.colors.gray};
  padding: 10px 12px;
  border: none;
  color: ${({ theme }) => theme.colors.text};
  font-size: 0.79rem;
  border-radius: 5px;
  width: 100%;

  &::placeholder {
    color: ${({ theme }) => theme.colors.text};
  }
`;
