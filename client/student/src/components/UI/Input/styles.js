import styled from 'styled-components';

export const StyledInput = styled.input`
  font-size: 14px;
  border-radius: 5px;
  width: 100%;

  align-items: center;
  background-color: hsl(0,0%,100%);
  border-color: hsl(0,0%,80%);
  color: ${({ theme }) => theme.colors.text};
  border-radius: 4px;
  border-style: solid;
  border-width: 1px;
  cursor: default;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  min-height: 38px;
  outline: 0 !important;
  position: relative;
  transition: all 100ms;
  padding: 0 10px;

  &::placeholder {
    color: hsl(0,0%,50%);
  }

  &:hover {
    border-width: 1px;
    border-color: hsl(0,0%,70%);
  }

  &:focus, &::selection {
    border-width: 2px;
    border-color: #2684ff;
  }
`;
