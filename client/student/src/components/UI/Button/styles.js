import styled from 'styled-components';

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
`;
