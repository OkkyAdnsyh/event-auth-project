
import { BarcodeScanner, TextResult } from 'dynamsoft-javascript-barcode'
import React, {useRef, useEffect} from 'react'
import styles from '@/public/VideoDecode.module.css';
import style from '@/styles/app.module.scss';

export interface IScannerProps{
    onFrameRead? : (results : TextResult[]) => void,
    onUniqueRead? : (txt : string, result : TextResult) => void
}

const VideoDecoder = (props : IScannerProps) => {
    let pScanner : Promise<BarcodeScanner> | null = null
    const elRef = useRef(null);

    
    useEffect(() => {
        const init = async () => {
            const scanner = await (pScanner = BarcodeScanner.createInstance());

            await scanner.setUIElement(elRef.current!);

            scanner.onFrameRead = props.onFrameRead;

            scanner.onUniqueRead = props.onUniqueRead;

            await scanner.open();

            setInterval(() => {
                scanner.hide();
            }, 10000);
        }
        init();
    }, []);
    


  return (
    <div ref={elRef}>
        <div className={`${styles["dce-video-container"]} dce-video-container`}></div>
        <div className={styles["dce-scanarea"]+" "+"dce-scanarea"}>
            <div className={styles["dce-scanlight"]+" "+"dce-scanlight"}></div>
        </div>
    </div>
  )
}

export default VideoDecoder