import styled, { css } from 'styled-components';

export const Container = styled.div`
  background: rgba(223, 228, 234, 0.5);
  border-radius: 5px;
  height: 85px;
  padding: 16px 20px;

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  width: 100%;
  height: 100%;

  margin-bottom: 1rem;
`;

export const Title = styled.h2`
  font-weight: bold;
  text-decoration: none;
  font-size: 18px;
  color: #000!important;
`;

export const Info = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-top: 20px;
  width: 100%;
`;

export const InfoText = styled.div`
  margin-left: 40px;
  color: ${({ open }) => open ? css`
    ${open ? '#000' : '#e74c3c'}
  ` : '#000'};
`;

export const Tags = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Tag = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(116, 185, 255, 0.75);
  border-radius: 5px;
  padding: 4px 13px;
  margin-right: 10px;

  p {
    color: #205B98;
    font-size: 10px;
    line-height: 10px;
  }
`;
