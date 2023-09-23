'use client';

import React from 'react'
import FormControl from '@/components/element/FormControl/FormControl';
import TextInput from '@/components/element/Input/TextInput';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react'
import Button from '@/components/element/Button/Button';

const SignUp = () => {

    const [username, setUsername] = useState("")
    const [password, setPass] = useState("")
    const [email, setEmail] = useState("")
    const [passError, setError] = useState(false)
    const router = useRouter()

    const onSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push('/dashboard')
        // await login()
    }

    const onChangeName = (e : ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    const onChangePass = (e : ChangeEvent<HTMLInputElement>) => {
        setPass(e.target.value)
    }
    const onChangeEmail = (e : ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const onChangeConfirmPass = (e : ChangeEvent<HTMLInputElement>) => {
        if(e.target.value !== password){
            setError(true)
        } setError(false)
    }

  return (
    <>
        <div className={`w-1/2 px-6 py-8 bg-sky-600 rounded-lg flex flex-col items-center justify-between gap-6`}>
            <h1 className={`text-xl text-black`}>Create New Account</h1>
            <FormControl onSubmit={onSubmit} method='POST' className={`py-6 px-4 bg-sky-300 rounded-md`}>
                <TextInput
                    name='email'
                    id='email'
                    type='email'
                    placeholder='Enter your email'
                    onChange={onChangeEmail}
                >
                    Email
                </TextInput>
                <TextInput
                    name='username'
                    id='username'
                    type='username'
                    placeholder='Username'
                    onChange={onChangeName}
                >
                    Username
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
                <TextInput
                    name='pass2'
                    id='pass2'
                    type='password'
                    placeholder='Confirm your password'
                    onChange={onChangeConfirmPass}
                    className={passError ? 'border-red-600 border-2 outline-red-600' : ''}
                >
                    Confirm Your Password
                </TextInput>
                <div className={`flex items-center justify-center mt-4 gap-6`}>
                    <Button type='submit'>
                        Sign Up
                    </Button>
                    <Button type='reset' className='bg-red-400'>
                        Cancel
                    </Button>
                </div>
            </FormControl>
        </div>
    </>
  )
}

export default SignUp