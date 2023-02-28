import React, { useState, useEffect } from 'react'
import { backendClient } from "../graphql/backendClient"

// import Image from 'next/image';
// import qrcode from 'qrcode';
// import speakeasy from 'speakeasy';

const CreateWallet = () => {

    return (
        <div>
            <h1>Wallet Created </h1>
            <button onClick={() => backendClient("createWallet")}>Create Wallet</button>

        </div>

    )
}

export default CreateWallet