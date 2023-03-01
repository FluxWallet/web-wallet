import react, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import profile from './../../static/profile.webp'
import dashboardImage from './../../static/dashboard-wallet.png'
import Image from 'next/image'


export default function Dashboard() {
    const [loading, setLoading] = useState(true)
    const [wallet, setWallet] = useState(false)
    const [walletAddress, setWalletAddress] = useState('0x01ae785590807164')
    const [walletBalance, setWalletBalance] = useState(0)
    const [walletName, setWalletName] = useState('0xshikhar.find')
    const [userName, setUserName] = useState('0xshikhar')
    const [transactions, setTransactions] = useState([])
    const [nfts, setNfts] = useState([])
    const router = useRouter();

    useEffect(() => {

        setTimeout(() => { }, 1000)
    }, [])

    return (
        <div className='h-full bg-blue-100 pb-7'>
            <div className='flex items-center justify-center h-screen'>
                <div className='appbox bg-white'>
                    {/* <div>
                        <div className="grid w-full h-full rounded bg-primary text-primary-content place-content-center">1</div>
                        <div className="grid w-32 h-20 rounded bg-accent text-accent-content place-content-center">2</div>
                        <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content place-content-center">3</div>
                    </div> */}


                    <div id='header'>

                        <div className='pt-4 px-4'>

                            <div className="relative flex row">
                                <Image className="mask mask-squircle w-12 h-12 rounded-full ring-4 ring-gray-900 dark:ring-gray-900" src={profile} alt="profile image" />
                                {/* <img className="w-10 h-10 rounded-full" src={profile} alt="" /> */}
                                <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                                <div className='px-4 items-center'>
                                    <h1 className='font-bold text-lg'>Welcome</h1>
                                    <h1 className='text-sm'>{userName}</h1>
                                </div>

                            </div>

                            <div className="relative my-5">
                                <h1 className="text-2xl pb-5 font-bold font-sans">Send Transaction</h1>

                                <form>
                                    <div className="mb-6">
                                        <label for="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Recipient Address</label>
                                        <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="0x23sd532456624" required />
                                    </div>
                                    <div className="mb-6">
                                        <label for="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Amount To Transfer</label>
                                        <input type="password" id="password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light" placeholder="0 FLOW" required />
                                    </div>
                                    <div className="mb-6">
                                        <label for="repeat-password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Enter Verfication Code</label>
                                        <input type="password" id="repeat-password" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  placeholder="Code" required />
                                    </div>
                                    <div className="flex items-start mb-6">
                                        <div className="flex items-center h-5">
                                            <input id="terms" type="checkbox" value="" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800" required />
                                        </div>
                                        <label for="terms" className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Verifying <a className="text-blue-600 hover:underline dark:text-blue-500">Transaction</a></label>
                                    </div>
                                    <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Send</button>
                                </form>


                            </div>



                        </div>


                    </div>
                </div>
            </div>

        </div>

    )
}

