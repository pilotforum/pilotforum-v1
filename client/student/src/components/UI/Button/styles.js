import styled from 'styled-components';
import { lighten } from 'polished';

export const StyledButton = styled.button`
  border: none;
  font-weight: bold;
  font-size: 1rem;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 5px;
  padding: 8px 12px;
  width: 100%;
  transition: background 150ms;

  &:hover {
    background-color: ${({ theme }) => lighten(0.05, theme.colors.primary)};
  }
`;
