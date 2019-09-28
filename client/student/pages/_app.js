import React from 'react';
import App from 'next/app';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';

import defaultTheme from '~/styles/theme';
import locales from '~/locales';

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    return (
      <IntlProvider locale="pt-BR" messages={locales['pt-BR']}>
        <ThemeProvider theme={defaultTheme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </IntlProvider>
    );
  }
}
