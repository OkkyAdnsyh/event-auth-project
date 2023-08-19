'use client';

import Link from 'next/link'
import React from 'react'
import styles from '@/styles/app.module.scss'


export default function Home() {
  
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.linkContainer}>
          <Link className={styles.link} href={'/data'}>
            Go to Dataset
          </Link>
          <Link className={styles.link} href={'/scanner'}>
            Go to Scanner
          </Link>
          <Link className={styles.link} href={'/signUp'}>
            Sign Up New Data
          </Link>
        </div>
      </div>
    </>
  )
}