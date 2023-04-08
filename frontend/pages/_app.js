import { ApolloProvider } from '@apollo/client';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';
import Router from 'next/router';

import Page from '../components/Page';

import withData from '../lib/withData';

Router.events.on('routeChangeStart', () => {
  NProgress.start();
});

Router.events.on('routeChangeComplete', () => {
  NProgress.done();
});

Router.events.on('routeChangeError', () => {
  NProgress.done();
});


function MyApp({ Component, pageProps, apollo }) {
  return (
    <ApolloProvider client={apollo}>
      <Page>
        <Component {...pageProps} />
      </Page>
    </ApolloProvider>
  )
}

// Tell Next.js to expose the Apollo client on the `pageProps`
MyApp.getInitialProps = async function({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  // This exposes the query to the user
  pageProps.query = ctx.query;
  return { pageProps };
};


export default withData(MyApp);