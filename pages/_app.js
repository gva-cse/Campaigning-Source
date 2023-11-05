import '@/styles/globals.css'
import { Analytics } from '@vercel/analytics/react'
import { SessionProvider } from "next-auth/react"

import { useEffect } from 'react';

function MyApp({ Component, pageProps }) {
  // Your custom logic here

  return <Component {...pageProps} />;
}


export default function App({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
      <Analytics />
    </SessionProvider>
  )
}
