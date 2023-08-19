'use client';

import React, {useState, useEffect} from 'react'
import { BarcodeReader, TextResult } from 'dynamsoft-javascript-barcode';
import styles from '@/styles/app.module.scss'
import VideoDecoder from '@/components/element/VideoDecoder/VideoDecoder'
import '@/dbr'

const CryptoJs = require('crypto-js');

interface IDataProps{
  dataEnc : string,
  name : string,
  quota : number
}

const Page = () => {

  const [encrypted, setEncrypted] = useState<string | null>();
  const [signStatus, setSignStatus] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [formData, setFormData] = useState<IDataProps>();

  const openScanner = () => {
    setIsOpen(!isOpen);
  }

  const onFrameRead = (results : TextResult[]) => {
    results.map(result => {
      let encrypt = CryptoJs.AES.encrypt(result.barcodeText, "test-key");
      setEncrypted(encrypt);
      setIsOpen(!isOpen);
    })
  }

  const onSubmit = async () => {
    localStorage.setItem('data', encrypted as string);
  }

  const onSubmitForm = (event : React.FormEvent<HTMLFormElement>)=>{
    event.preventDefault()
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
      {!isOpen && 
      <div className={styles.mainContainer}>
        <form onSubmit={onSubmitForm} className={styles.inputContainer}>
          <div className={styles.inputGroup}>
            <input className={`${styles.input} data-show`} type="text" readOnly={true} value={encrypted as string}/>
          </div>
          <div className={styles.btnGroup}>
            <button type='submit' onClick={onSubmit} className={styles.mainButton}>Register Data</button>
            <button onClick={openScanner} className={styles.mainButton}>Start Scanning</button>
          </div>
        </form>
      </div>
      }
      <div>
        {isOpen && <VideoDecoder
          onFrameRead={onFrameRead}
        />}
      </div>
    </>
  )
}

export default Page