'use client';

import React, {useRef, useEffect, useState} from 'react'
import { CameraEnhancer } from 'dynamsoft-camera-enhancer'
import { PlayCallbackInfo } from 'dynamsoft-camera-enhancer'
import { TextResult, BarcodeScanner } from 'dynamsoft-javascript-barcode'

export interface IScannerProps{
    isActive? : boolean,
    children? : React.ReactNode,
    interval? : number,
    license? : string,
    onInitialized? : (enchancer:CameraEnhancer, scanner:BarcodeScanner) => void,
    onScanned? : (result:TextResult[]) => void,
    onPlayed? : (playCallbackInfo : PlayCallbackInfo) => void,
    onClosed? : () => void 
}

const BarcodeReader = (props:IScannerProps) => {
    const cameraContainer = useRef(null);
    const mounted = useRef(false);
    const [isActive, setIsActive] = useState(false);
    const interval = useRef<any>(null);
    const decoding = useRef(false);

    let scanner = useRef<any>(null);
    let enhancer = useRef<any>(null);

    const togglingCamera = () => {
        setIsActive(!isActive);
    }
    const toggleCamera = () => {
        if(mounted){
            if(isActive){
                enhancer.current?.open(true);
                startScanning();
            } else {
                enhancer.current.close();
                stopScanning();
            }
        };
    };
    
    useEffect(() => {
        const init = async () => {
            {BarcodeScanner.isWasmLoaded() === false ? BarcodeScanner.license = props.license as string : ""}
            
            scanner.current = await BarcodeScanner.createInstance();
            enhancer.current = await CameraEnhancer.createInstance();

            await enhancer.current.setUIElement(cameraContainer.current!);

            enhancer.current.on("played", (playCallbackInfo : PlayCallbackInfo) => {
                {props.onPlayed && props.onPlayed(playCallbackInfo)}
            });

            enhancer.current.on("cameraClose", () => {
                {props.onClosed && props.onClosed()}
            })

            enhancer.current.setVideoFit("cover");

            {props.onInitialized && props.onInitialized(enhancer.current, scanner.current)};

            {mounted.current === false ? init() : ""};

            mounted.current = true;

            toggleCamera();
        }
    }, []);
    
    const startScanning = () => {
        const decode = async () => {
            if(decoding.current === false && scanner.current && enhancer.current){
                decoding.current = true;
                const result = await scanner.current.decode(enhancer.current.getFrame());

                if(props.onScanned){
                    props.onScanned(result);
                };

                decoding.current = false
            };
        };

        if(props.interval){
            interval.current = setInterval(decode, props.interval);
        } else {
            interval.current = setInterval(decode, 40);
        };
    
    };

    const stopScanning = () => {
        clearInterval(interval.current);
    };


    
    useEffect(() => {
        toggleCamera();
    }, [isActive]);


    



  return (
    <>
    <div ref={cameraContainer}>
        <div className='dce-video-container'></div>
    </div>
    <button type='button' onClick={togglingCamera}>{isActive ? "Stop Scanning" : "Start Scanning"}</button>
    </>
  )
}

export default BarcodeReader
