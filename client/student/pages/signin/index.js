import React from 'react';
import { injectIntl } from 'react-intl';

import { AuthLayout } from '~/components/Layout';
import Button from '~/components/UI/Button';
import Input from '~/components/UI/Input';

function Signin({ intl: { messages } }) {
  return (
    <AuthLayout link="/signup" linkMessage={messages['signin.have_an_account']}>
      <Input name="email" type="email" placeholder={messages['signin.email']} />
      <Input
        name="password"
        type="password"
        placeholder={messages['signin.password']}
      />
      <Button type="submit" text={messages['signin.login']} />
    </AuthLayout>
  );
}

export default injectIntl(Signin);
