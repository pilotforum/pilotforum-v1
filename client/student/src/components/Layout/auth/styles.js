import styled from 'styled-components';
import { Form as AuxForm } from '@rocketseat/unform';

export const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.section`
  width: 100%;
  max-width: 400px;
  text-align: center;
`;

export const Form = styled(AuxForm)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;

  input {
    margin-bottom: 1.15rem;
  }
`;

export const Logo = styled.div`
  background: url(/static/images/logos/logo_auth.svg) center no-repeat;
  width: 146px;
  height: 92px;
  margin-bottom: 38px;
`;
