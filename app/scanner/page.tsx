'use client';

import React, {useState, useEffect} from 'react'
import { BarcodeReader, TextResult } from 'dynamsoft-javascript-barcode';
import styles from '@/styles/app.module.scss'
import VideoDecoder from '@/components/element/VideoDecoder/VideoDecoder'
import '@/dbr'

const CryptoJs = require('crypto-js');

const Page = () => {

    const [isOpen, setIsOpen] = useState(false);
    const [decrypted, setDecrypted] = useState<string>('');
    const [loginStatus, setStatus] = useState(false);
    const [showPopup, setShow] = useState(false);

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

        setDecrypted(CryptoJs.AES.decrypt(window.localStorage.getItem('data'), 'test-key').toString(CryptoJs.enc.Utf8));
    
        initBarcodeScanner();
    }, []);

    const openScanner = () => {
        setIsOpen(!isOpen);
    };

    const onFrameRead = (results : TextResult[]) => {
        results.map(result => {
            {result.barcodeText === decrypted ? setStatus(true) : setStatus(false)};
            setShow(!showPopup);
            setIsOpen(!isOpen)
        })
    };

    const showPopupNow = () => {
        setShow(!showPopup)
    };

    const closePopUp = () => {
        setShow(!showPopup)
        setIsOpen(!isOpen)
    }

    const closeScanner = () => {
        setShow(!showPopup);
        setIsOpen(false)
    }
    

  return (
    <>
    {!isOpen && 
        <div className={styles.mainContainer}>
            <button onClick={openScanner} className={styles.mainButton}>Start Scanning</button>
        </div>
    }
    <div>
        {isOpen && <VideoDecoder onFrameRead={onFrameRead}/>}
    </div>
    {showPopup && 
    <div className={`${styles.mainContainer} ${styles.popUpContainer}`}>
        {loginStatus ? 
            <div className={styles.popUp}>
                <p>Access granted</p>
            </div> : 
            <div className={styles.popUp}>
                <p>Access denied</p>
            </div>
        }
        <button onClick={closePopUp} className={styles.mainButton}>Continue Scanning</button>
        <button onClick={closeScanner} className={styles.mainButton}>Stop Scanning</button>
    </div>
    }
    </>
  )
}
export default Page