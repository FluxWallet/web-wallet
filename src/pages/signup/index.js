// import Head from 'next/head'
// import Image from 'next/image'
// import { Inter } from '@next/font/google'
// import styles from '@/styles/Home.module.css'
// import { LockClosedIcon } from '@heroicons/react/20/solid'
import WalletAuth from '../../components/WalletAuth'


export default function Signup() {
    return (
        <div className='flex items-center justify-center h-screen bg-blue-100'>
            <div className='appbox'>
                <div id='header'>
                    <div className='pt-4 px-4'>
                        <h1 className="text-4xl text-white py-4  font-sans">
                            Hey ! 👋
                        </h1>
                        <h2 className="text-base text-white py-2 pb-10 font-sans "> Its time to secure you !</h2>
                        {/* <CircularProgress /> */}
                    </div>

                    <div className='bg-white rounded-[16px] object-contain w-[320px] h-[480px] relative'>
                        <div className="flex h-full items-center justify-center px-4 inset-x-0 bottom-0">
                            <div className="w-full">
                                <WalletAuth />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

