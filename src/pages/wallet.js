/* eslint-disable react/no-unescaped-entities */
import CreateWallet from "../components/CreateWalletComp"
// import WalletAuth from "@/components/WalletAuth"

export default function Wallet() {
    return (
        <div className='h-full bg-blue-100 pb-7'>

        <div className='flex items-center justify-center h-screen'>
            <div className='appbox'>
                <div id='header'>
                    <div className='pt-4 px-4'>
                        <h1 className="text-4xl text-white py-4  font-sans">
                            Congrats 🎉
                        </h1>
                        <h2 className="text-base text-white py-2 pb-10 font-sans "> Start Your New Journey </h2>
                        {/* <CircularProgress /> */}
                    </div>


                    <div className='bg-white rounded-[16px] object-contain w-[320px] h-[480px] relative'>
                        <div className="flex h-full items-center justify-center px-4 ">
                            <div className="w-full">
                                <CreateWallet />
                            </div>
                        </div>
                    </div>


                </div>
                </div>
            </div>
        </div>
    )
}