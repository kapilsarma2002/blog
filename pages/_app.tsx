import '../styles/globals.css'
import { ChakraProvider, DarkMode, LightMode } from '@chakra-ui/react'

function MyApp({ Component, pageProps }: any) {
  return (
    <ChakraProvider theme={LightMode}>
        <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
