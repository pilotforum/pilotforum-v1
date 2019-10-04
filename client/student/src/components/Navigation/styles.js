import styled from 'styled-components';

export const Wrapper = styled.section`
  max-width: 200px;
  width: 100%;
`;

export const Container = styled.div`
  margin-bottom: 50px;
`;

export const Info = styled.div`
  font-size: 0.8rem;
  margin-bottom: 20px;
`;

export const List = styled.ul``;

export const Item = styled.li`
  margin-bottom: 20px;

  a {
    font-size: 0.9rem;
    color: ${({ theme }) => theme.colors.text};
    display: flex;
    justify-content: flex-start;
    align-items: center;

    svg {
      margin-right: 8px;
      color: ${({ theme }) => theme.colors.text};
      width: 17px;
      height: 17px;
    }
  }
`;
