import { AppProps } from 'next/app';
import { Provider } from 'react-redux';
import Head from 'next/head';
import useBreakpoint from '../hooks/useBreakpoint';

import withRedux from 'next-redux-wrapper';
import store from '../redux/store';
import { setInitDeviceType } from '../redux/meta/meta.actions';
import breakpoints, { IBreakpoints } from '../breakpoints';
import Sidebar from '../components/sidebar/sidebar.component';
import 'normalize.css';
import '../styles/main.scss';

const App = ({ Component: NextComponentPage, pageProps }: AppProps) => {
  const matchPoints = useBreakpoint<typeof breakpoints>(breakpoints);
  if (typeof window !== 'undefined' && matchPoints) {
    for (let device in matchPoints) {
      if (matchPoints[device]) {
        store.dispatch(setInitDeviceType(device as keyof IBreakpoints));
      }
    }
  }
  return (
    <>
      <Head>
        <title>nocap</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Provider store={store}>
        <div className="container">
          <NextComponentPage {...pageProps} />;
        </div>
      </Provider>
    </>
  );
};

const makeStore = () => store;
export default withRedux(makeStore)(App);
