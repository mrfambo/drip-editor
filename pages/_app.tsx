import '../styles/globals.css'

import { AppProps } from 'next/app'
import { ReactElement } from 'react'

function App({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />
}

export default App
