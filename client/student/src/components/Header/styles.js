import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 14px 0;
`;

export const Logo = styled.div`
  background: url(/static/images/logos/logo_header.svg) center no-repeat;
  width: 152px;
  height: 32px;
`;

export const SearchBar = styled.input`
  flex: 0.8;
  border: none;
  padding: 08px 12px 8px 40px;
  border-bottom: 1px solid transparent;
  background: url(/static/images/icons/search.svg) left no-repeat;
  background-size: 24px 24px;

  &:hover,
  &:focus {
    border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
  }
`;

export const Menu = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;

  li:not(:last-child) {
    margin-right: 50px;
  }
`;
