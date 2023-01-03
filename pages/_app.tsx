import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react'
import { store } from 'services/redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import {persistStore} from 'redux-persist';

let persistor = persistStore(store);
import withRedux from 'next-redux-wrapper';

function App({ Component, pageProps }: AppProps) {
  return (
        <ChakraProvider>
          <PersistGate loading={null} persistor={persistor}>
              <Component {...pageProps} />
          </PersistGate>
        </ChakraProvider>

  )
}

const makeStore = () => store;

export default withRedux(makeStore)(App)