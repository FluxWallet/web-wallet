import react, { useState, useEffect } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import profile from './../../static/profile.webp'
import dashboardImage from './../../static/dashboard-wallet.png'
import { backendClient } from "../../graphql/backendClient"
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
                                <Image src={dashboardImage} className="rounded-lg" alt="dashboard image" />
                                {/* <img src="https://www.kindacode.com/wp-content/uploads/2022/06/night-sky.jpeg" /> */}
                                <h1 className="absolute text-3xl font-bold text-black top-12 left-4 ">
                                    {walletBalance} Flow Token  </h1>
                                {/* <h2 className="absolute text-3xl text-amber-400 bottom-4 left-1/2 -translate-x-1/2">Bottom Center</h2> */}
                                {/* <h3 className="absolute text-2xl text-blue-300 top-5 left-5">Top Left</h3> */}
                                <h3 className="absolute text-sm bottom-5 left-4">{walletAddress}</h3>
                                <h3 className="absolute text-1xl font-bold bottom-10 left-4">{walletName}</h3>
                            </div>



                        </div>

                        <div className='bg-grey-200 rounded-[16px] relative'>
                            <div className="flex w-full items-center justify-center px-4">

                                <div className="stats stats-vertical lg:stats-horizontal shadow">

                                    <div className="stat">
                                        <div className="stat-title">Transactions</div>
                                        <div className="stat-value">{transactions.length}</div>
                                        {/* <div className="stat-desc">Jan 1st - Feb 1st</div> */}
                                    </div>

                                    <div className="stat">
                                        <div className="stat-title">NFTs</div>
                                        <div className="stat-value">{nfts.length}</div>
                                        <div className="stat-desc">↗︎ 100 (100%)</div>
                                    </div>

                                    {/* <div className="stats bg-primary text-primary-content">

                                        <div className="stat ">
                                            <div className="stat-title text-white">Account balance</div>
                                            <div className="stat-value">$89,400</div>
                                            <div className="stat-actions">
                                                <button className="btn btn-sm btn-success">Add funds</button>
                                            </div>
                                        </div>

                                        {/* <div className="stat">
                                            <div className="stat-title">Current balance</div>
                                            <div className="stat-value">$89,400</div>
                                            <div className="stat-actions">
                                                <button className="btn btn-sm">Withdrawal</button>
                                                <button className="btn btn-sm">deposit</button>
                                            </div>
                                        </div> */}


                                </div>



                            </div>
                            {/* transactions */}
                            {/* <div>
                                <div className="flex relative">
                                    <div className='p-5'>
                                        <table className="table w-[310] ">
                                            <tbody>

                                                <tr>
                                                    <th>1</th>
                                                    <td>Cy Ganderton</td>

                                                    <td>Blue</td>
                                                </tr>

                                                <tr>
                                                    <th>2</th>
                                                    <td>Hart Hagerty</td>

                                                    <td>Purple</td>
                                                </tr>

                                            </tbody>
                                        </table>

                                    </div>
                                </div>
                            </div> */}
                            <div className='pt-4 px-4'>
                                <div onClick={() => {router.push('/send') }} className='py-4 align-middle flex justify-center'>
                                    <a className="relative inline-block px-6 py-2 font-medium group">
                                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                        <span className="relative text-black group-hover:text-white">Send Token</span>
                                    </a>
                                </div>

                                <div className='py-4 align-middle flex justify-center'>
                                    <a onClick={() => { router.push('/dashboard/send') }} className="relative inline-block px-5 py-2 font-medium group">
                                        <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                                        <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                                        <span className="relative text-black group-hover:text-white">Transactions</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    )
}

