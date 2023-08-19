'use client';

import React, {useState, useEffect} from 'react'
import { BarcodeReader, TextResult } from 'dynamsoft-javascript-barcode';
import styles from '@/styles/app.module.scss'
import VideoDecoder from '@/components/element/VideoDecoder/VideoDecoder'
import '@/dbr'

const CryptoJs = require('crypto-js');

interface IDataProps{
  dataEnc : string,
  name : string
}

const pages = () => {

  const [encrypted, setEncrypted] = useState<string | null>();
  const [signStatus, setSignStatus] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  let pScanner : Promise<BarcodeReader> | null = null

  const openScanner = () => {
    setIsOpen(!isOpen);
  }

  const onFrameRead = (results : TextResult[]) => {
    results.map(result => {
      let encrypt = CryptoJs.AES.encrypt(result.barcodeText, "test-key");
      setEncrypted(encrypt);
      setIsOpen(!isOpen)
    })
  }

  const onSubmit = async () => {
    localStorage.setItem('data', encrypted as string);
    setEncrypted("");
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

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.inputContainer}>
          <div className={styles.inputGroup}>
            <input className={`${styles.input} data-show`} type="text" readOnly={true} value={encrypted as string}/>
            <input className={`${styles.input} data-name`} type="text" placeholder='Name' />
          </div>
          <div className={styles.btnGroup}>
            <button onClick={onSubmit} className={styles.mainButton}>Sign Data</button>
            <button onClick={openScanner} className={styles.mainButton}>Start Scanning</button>
          </div>
        </div>
      </div>
      <div>
        {isOpen && <VideoDecoder
          onFrameRead={onFrameRead}
        />}
      </div>
    </>
  )
}

export default pages