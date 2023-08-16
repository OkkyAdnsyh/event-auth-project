import BarcodeReader from '@/components/elements/barcodeReader/BarcodeReader';
import React from 'react'

export default function Home() {

  const license = process.env.DBR_LICENSE_KEY

  return (
    <>
      <h2>Start Scanning</h2>
      <BarcodeReader license={license}/>
    </>
  )
}
