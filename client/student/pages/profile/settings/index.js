import React from 'react';
import { FormattedMessage } from 'react-intl';

import { DefaultLayout } from '~/components/Layout';

export default function ProfileSettings() {
  return (
    <DefaultLayout>
      <h1>
        <FormattedMessage id="profile.settings.page_title" />
      </h1>
      <p>
        <FormattedMessage id="profile.settings.page_message" />
      </p>
    </DefaultLayout>
  );
}
