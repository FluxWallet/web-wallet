import '../styles/globals.css'
// import { ChakraProvider } from '@chakra-ui/react'


// export default function App({ Component, pageProps }) {
//   return <Component {...pageProps} />
// }

// pages/_app.js
// 'use client'

import { ChakraProvider } from '@chakra-ui/react'
// import { CacheProvider } from '@chakra-ui/next-js'


function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default App