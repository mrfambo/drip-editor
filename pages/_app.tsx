import { AppProps } from 'next/app'

function App({ Component, pageProps }: AppProps): any {
  return <Component {...pageProps} />
}

export default App
