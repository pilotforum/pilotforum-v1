import styled from 'styled-components';
import AuxInput from '~/components/UI/Input';

export const Form = styled.form`
  width: 100%;
`;

export const Input = styled(AuxInput)`
  margin-bottom: 20px;
`;

export const AnswerContainer = styled.form`
  width: 100%;
  margin-top: 20px;
  margin-bottom: 45px;

  h4 {
    margin-bottom: 15px;
  }

  button {
    margin-top: 1.15rem;
  }
`;
