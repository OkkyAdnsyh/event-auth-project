'use client';

import Submit from '@/components/element/Button/Button';
import FormControl from '@/components/element/FormControl/FormControl';
import TextInput from '@/components/element/Input/TextInput';
import { usePathname, useRouter } from 'next/navigation';
import { setCookies } from '@/library/cookies';
import React, { ChangeEvent, FormEvent, useState } from 'react'
import Button from '@/components/element/Button/Button';
import Link from 'next/link';

const Login = () => {

    const [name, setName] = useState("")
    const [password, setPass] = useState("")
    const router = useRouter()
    const pathname = usePathname()

    // const login = async () => {
        // const formData = new URLSearchParams();
        // formData.append('name', name);
        // formData.append('password', password)
      
    //     const res = await fetch('http://localhost:5000/api/user/login', {
    //       method : 'POST',
    //       headers : {
    //         "Content-Type" : "application/json"
    //       },
    //       body : JSON.stringify({
    //         name : name,
    //         password : password
    //       })
    //     })

    //     const data = await res.json()
    //     setCookies(data.token, pathname)
    // }

    const onSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('/dashboard')
        // await login()
    }

    const onChangeName = (e : ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }
    const onChangePass = (e : ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value)
    }

  return (
    <>
        <div className={`w-1/2 px-6 py-8 bg-sky-600 rounded-lg flex flex-col items-center justify-between gap-6`}>
            <h1 className={`text-xl text-black`}>LOGIN</h1>
            <FormControl onSubmit={onSubmit} method='POST' className={`py-6 px-4 bg-sky-300 rounded-md`}>
                <TextInput
                    name='name'
                    id='name'
                    type='text'
                    placeholder='Email or Username'
                    onChange={onChangeName}

                >
                    Email or Username
                </TextInput>
                <TextInput
                    name='pass'
                    id='pass'
                    type='password'
                    placeholder='Password'
                    onChange={onChangePass}

                >
                    Password
                </TextInput>
                <div className={`flex items-center justify-center mt-4`}>
                    <Button type='submit'>
                        Login
                    </Button>
                </div>
            </FormControl>
            <Link
                href={'/scannerLogin'}
                className={`py-2 px-8 rounded-full bg-yellow-400 text-gray-950 text-md flex justify-center mt-4`}
            >
                Scanner Login
            </Link>
        </div>
    </>
  )
}

export default Login