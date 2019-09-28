import React from 'react';
import { injectIntl } from 'react-intl';

import { AuthLayout } from '~/components/Layout';
import Button from '~/components/UI/Button';
import Input from '~/components/UI/Input';

function Signup({ intl: { messages } }) {
  return (
    <AuthLayout link="/signin" linkMessage={messages['signup.have_an_account']}>
      <Input name="name" type="text" placeholder={messages['signup.name']} />
      <Input name="email" type="email" placeholder={messages['signup.email']} />
      <Input
        name="password"
        type="password"
        placeholder={messages['signup.password']}
      />
      <Button type="submit" text={messages['signup.register']} />
    </AuthLayout>
  );
}

export default injectIntl(Signup);
