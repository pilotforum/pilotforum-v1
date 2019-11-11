import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { injectIntl } from 'react-intl';

import { AuthLayout } from '~/components/Layout';
import Button from '~/components/UI/Button';
import Input from '~/components/UI/Input';

import { signUpRequest } from '~/store/modules/user/actions';

function Signup({ intl: { messages } }) {
  const dispatch = useDispatch();
  const loading = useSelector(state => state.auth.loading);

  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit() {
    dispatch(signUpRequest(name, email, password));
  }

  return (
    <AuthLayout
      link="/signin"
      linkMessage={messages['signup.have_an_account']}
      onFormSubmit={handleSubmit}
    >
      <Input
        name="name"
        type="text"
        placeholder={messages['signup.name']}
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        name="email"
        type="email"
        placeholder={messages['signup.email']}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        name="password"
        type="password"
        placeholder={messages['signup.password']}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <Button
        type="submit"
        text={loading ? 'Carregando...' : messages['signup.register']}
      />
    </AuthLayout>
  );
}

export default injectIntl(Signup);
