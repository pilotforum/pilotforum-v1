import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;

  hr {
    border: 1px solid #e5e5e5;
  }
`;

export const Container = styled.div`
  padding: 45px 0 20px 0;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  main {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    width: 100%;
    ${({ withoutAside }) => !withoutAside && css`
      padding: 0 40px 0 0;
      margin-right: 20px;
    `}

    h1 {
      font-size: 18px;
      text-align: left;
      font-weight: bold;
      width: 100%;
      margin-bottom: 25px;
    }

    p {
      width: 100%;
      font-size: 1rem;
      color: ${({ theme }) => theme.colors.text};
      line-height: 1.3;
      text-align: left;
    }
  }
`;
