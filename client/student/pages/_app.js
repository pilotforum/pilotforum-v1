import React from 'react';
import App from 'next/app';
import { PersistGate } from 'redux-persist/integration/react';
import { ThemeProvider } from 'styled-components';
import { IntlProvider } from 'react-intl';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import GlobalStyle from '~/styles/global';
import defaultTheme from '~/styles/theme';
import { store, persistor } from '~/store';
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
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <IntlProvider locale="pt-BR" messages={locales['pt-BR']}>
            <ThemeProvider theme={defaultTheme}>
              <>
                <GlobalStyle />
                <ToastContainer />
                <Component {...pageProps} />
              </>
            </ThemeProvider>
          </IntlProvider>
        </PersistGate>
      </Provider>
    );
  }
}
