'use server'

import { cookies } from 'next/headers'

export const setCookies = async (data : string, pathname : string) => {
    if(pathname === '/') cookies().delete('token')

    cookies().set('token', data)
}