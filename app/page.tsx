import BarcodeReader from '@/components/elements/barcodeReader/BarcodeReader';
import React from 'react'

interface ILicenseKeyProps{
  license : string
}

export async function getServerSideProps() {
  let license: string | undefined = process.env.DBR_LICENSE_KEY
  return {props : {license : license}}
}

export default function Home(props : ILicenseKeyProps) {

  return (
    <>
      <h2>Start Scanning</h2>
      <BarcodeReader license={props.license}/>
    </>
  )
}
