import styled from 'styled-components';

export const Container = styled.section`
  width: 100%;
  padding-bottom: 30px;
  border-bottom: 1px solid #DFE4EA;
`;

export const Title = styled.h1`
  font-size: 22px!important;
`;

export const User = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;

  img {
    border-radius: 50%;
    margin-right: 10px;
  }
`;

export const UserInfo = styled.div``;

export const Tags = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 20px;
`;

export const CloseQuestion = styled.button`
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #DFE4EA;
  border-radius: 5px;
`;

export const DelQuestion = styled.button`
  margin-right: 10px;
  padding: 10px;
  border: 1px solid #e74c3c;
  color: #e74c3c;
  border-radius: 5px;
`;

export const Tag = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(116, 185, 255, 0.75);
  border-radius: 5px;
  padding: 4px 13px;
  margin-right: 10px;

  a {
    color: #205B98;
    font-size: 10px;
    line-height: 10px;
  }
`;

export const Likes = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 20px;

  svg {
    cursor: pointer;
  }

  span {
    margin: 0 10px;
  }
`;

export const Content = styled.div`
  padding: 18px 0;
`;
