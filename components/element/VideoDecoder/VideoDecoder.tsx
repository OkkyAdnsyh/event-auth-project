
import { BarcodeScanner, TextResult } from 'dynamsoft-javascript-barcode'
import React, {useRef, useEffect} from 'react'
import styles from '@/public/VideoDecode.module.css';
import style from '@/styles/app.module.scss';

export interface IScannerProps{
    onFrameRead? : (results : TextResult[]) => void,
    onUniqueRead? : (txt : string, result : TextResult) => void
    onClose? : boolean
}

const VideoDecoder = (props : IScannerProps) => {
    let pScanner : Promise<BarcodeScanner> | null = null
    const scanner = useRef<BarcodeScanner>()
    const elRef = useRef(null);

    
    useEffect(() => {
        const init = async () => {
            scanner.current = await (pScanner = BarcodeScanner.createInstance())

            await scanner.current.setUIElement(elRef.current!);            
            scanner.current.onFrameRead = props.onFrameRead;
    
            scanner.current.onUniqueRead = props.onUniqueRead;
            
            await scanner.current.open();
        }
        init();

        const cleanUp = async () => {
            await scanner.current?.destroyContext();
        }

        return () => {
            cleanUp()
        };
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