// import Head from 'next/head'
// import Image from 'next/image'
import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'

// import { ChakraProvider } from '@chakra-ui/react'
import { Box, Button, CircularProgress, CircularProgressLabel, Flex, Text, useDisclosure } from '@chakra-ui/react';
import App from './app'
// import Onboard from '@/screens/onboarding/Onboard'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='h-full bg-blue-100 pb-7'>
      <div className='flex items-center justify-center h-screen '>
        <div className='appbox'>
          <App />
        </div>

      </div>
    </div>
  )
}
