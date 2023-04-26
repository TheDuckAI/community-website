import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Cormorant_Garamond } from "@next/font/google"

export const cormorantGaramond = Cormorant_Garamond({
  subsets: ['cyrillic'],
  weight: '300'
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={cormorantGaramond.className}>
      <Component {...pageProps} />
    </main>
  )
  
}
