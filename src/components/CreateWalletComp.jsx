import React, { useState, useEffect } from 'react'
import { backendClient } from "../graphql/backendClient"
import { useRouter } from 'next/router'

// import Image from 'next/image';
// import qrcode from 'qrcode';
// import speakeasy from 'speakeasy';

const CreateWallet = () => {
    const [wstatus, setwStatus] = useState("Reconfigure Wallet");
    const router = useRouter();
    const walletbtn = () => {
        backendClient("createWallet")
        setwStatus("Created")
    }

    return (
        <div>
            <h1 className="text-4xl py-2   font-sans">Flux Wallet </h1>
            { }
            <h1 className="text-xl pb-10   font-sans"> Status :
                {wstatus === "Created" ? <div className="badge badge-success gap-2">  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    success
                </div> : <div className="badge badge-error gap-2">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                    Error : {wstatus}
                </div>}
            </h1>

            {/* <div className="badge badge-success gap-2"> */}

            <div className='py-4'>
                <a onClick={walletbtn} className="relative inline-block px-4 py-2 font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">Reconfigure</span>
                </a>
            </div>

            <div className='py-4'>
                <a onClick={() => { router.push('/dashboard') }} className="relative inline-block px-5 py-2 font-medium group">
                    <span className="absolute inset-0 w-full h-full transition duration-200 ease-out transform translate-x-1 translate-y-1 bg-black group-hover:-translate-x-0 group-hover:-translate-y-0"></span>
                    <span className="absolute inset-0 w-full h-full bg-white border-2 border-black group-hover:bg-black"></span>
                    <span className="relative text-black group-hover:text-white">Dashboard</span>
                </a>
            </div>

        </div>

    )
}

export default CreateWallet