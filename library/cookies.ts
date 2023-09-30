'use server';

import { cookies } from 'next/headers'

export const setCookies = async (data : string, pathname : string) => {
    if(pathname === '/') cookies().delete('token')

    cookies().set('token', data)
}

export const deleteOnPathCookies =async (pathname: string) => {
    const hasCookies = cookies().has('token')
    if(hasCookies){
        if(pathname === '/' || pathname === '/signUp') cookies().delete('token')
    }
}