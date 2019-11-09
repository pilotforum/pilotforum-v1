import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { injectIntl } from 'react-intl';

import { AuthLayout } from '~/components/Layout';
import Button from '~/components/UI/Button';
import Input from '~/components/UI/Input';

import { signInRequest } from '~/store/modules/auth/actions';

function Signin({ intl: { messages } }) {
  const dispatch = useDispatch();

  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  function handleSubmit() {
    dispatch(signInRequest(email, password));
  }

  return (
    <AuthLayout
      link="/signup"
      linkMessage={messages['signin.have_an_account']}
      onFormSubmit={handleSubmit}
    >
      <Input
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        type="email"
        placeholder={messages['signin.email']}
      />
      <Input
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        type="password"
        placeholder={messages['signin.password']}
      />
      <Button type="submit" text={messages['signin.login']} />
    </AuthLayout>
  );
}

export default injectIntl(Signin);
