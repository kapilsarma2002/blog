import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';
import HomePage from '../components/homePage';

function MyApp({ Component, pageProps }: AppProps) {

  return (
    <ChakraProvider>
      {
        Component.authPage ? (
          <Component {...pageProps} />
        ) : (
          <HomePage>
            <Component {...pageProps} />
          </HomePage>
        )
      }
    </ChakraProvider>
  )
}

export default MyApp