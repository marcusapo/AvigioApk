import '~/styles/globals.css'
import '~/styles/text.css'

import { Montserrat } from 'next/font/google'
import type { AppProps } from 'next/app'

const montserrat = Montserrat({ subsets: ['latin'] })

function App({ Component, pageProps }: AppProps) {
  return (
        <main className={montserrat.className}>
          <Component {...pageProps} />
        </main>
  )
}

export default App