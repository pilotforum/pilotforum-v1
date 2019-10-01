import styled from 'styled-components';

export const Container = styled.aside`
  max-width: 200px;
  width: 100%;
`;

export const TagsWrapper = styled.div`
  margin-top: 45px;

  a {
    color: ${({ theme }) => theme.colors.text};
    cursor: pointer;

    h3 {
      transition: opacity 150ms;
      font-size: 1.14rem;
      font-weight: bold;
      margin-bottom: 30px;
      color: ${({ theme }) => theme.colors.text};

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

export const Tags = styled.ul`
  list-style: none;
`;

export const Tag = styled.li`
  background-color: ${({ theme }) => theme.colors.secondary};
  padding: 6px 0;
  width: 100%;
  text-align: center;
  border-radius: 5px;
  margin-bottom: 15px;

  a {
    color: ${({ theme }) => theme.colors.text};
    display: block;
    width: 100%;
    height: 100%;
  }
`;
