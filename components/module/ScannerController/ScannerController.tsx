'use client';

import VideoDecoder from '@/components/element/VideoDecoder/VideoDecoder'
import React, { useEffect, useState } from 'react'
import '@/dbr'
import { BarcodeReader, BarcodeScanner, TextResult } from 'dynamsoft-javascript-barcode'

interface IBarcodeResults{
    barcodeText : string
}

const ScannerController = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [barcodeResult, setBarcodeResult] = useState<IBarcodeResults>({barcodeText : ""});
    

    const onFrameRead = (results : TextResult[]) => {
        results.map(result => {
            setBarcodeResult({...barcodeResult, barcodeText : result.barcodeText});
            setIsOpen(!isOpen)
        })
    }

    useEffect(() => {
        const initBarcodeScanner = async () => {
            try{
                await BarcodeReader.loadWasm();
            } catch (ex : any) {
                if (ex.message.indexOf("network connection error")) {
                    let customMsg = "Failed to connect to Dynamsoft License Server: network connection error. Check your Internet connection or contact Dynamsoft Support (support@dynamsoft.com) to acquire an offline license.";
                    console.log(customMsg);
                    alert(customMsg);
                } throw ex;
            } 
        };

        initBarcodeScanner();
    }, []);

    console.log(barcodeResult)
  return (
    <>
        <button onClick={() => setIsOpen(!isOpen)}>
            Open Scanner
        </button>
        <div>
            {isOpen && <VideoDecoder onFrameRead={onFrameRead}/>}
            {/* <VideoDecoder
            onFrameRead={onFrameRead}/> */}
        </div>
    </>
  )
}

export default ScannerController