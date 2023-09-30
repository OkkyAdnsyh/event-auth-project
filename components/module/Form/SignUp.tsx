'use client';

import React from 'react'
import FormControl from '@/components/element/FormControl/FormControl';
import TextInput from '@/components/element/Input/TextInput';
import { useRouter } from 'next/navigation';
import { ChangeEvent, FormEvent, useState } from 'react'
import Button from '@/components/element/Button/Button';
import * as BS from 'react-icons/bs'
import * as IM from 'react-icons/im'



const SignUp = () => {

    const [username, setUsername] = useState("")
    const [password, setPass] = useState("")
    const [email, setEmail] = useState("")
    const [passError, setError] = useState(false)

    const [modal, setModal] = useState(false)
    const [loading, setLoading] = useState(false)
    const [fetchErr, setFetchErr] = useState(false)
    const [msg, setMsg] = useState("")

    const router = useRouter()

    const onSubmit = async (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setModal(!modal)
        setLoading(!loading)

        const res = await fetch('http://localhost:5000/api/user/register', {
            method : 'POST',
            headers : {
                'Content-Type' : 'application/json'
            },
            body : JSON.stringify({
                userName : username,
                email : email,
                password : password
            })
        })

        if(!res.ok){
            const err = await res.json()
            setLoading(loading)
            setFetchErr(!fetchErr)
            setMsg(err.message)
        }else{
            const result = await res.json()
            setLoading(loading)
            setMsg(result.message)
        }
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
        if (e.target.value !== password){
            setError(true)
        } else (setError(false))
    }

    const resetState = () => {
        setUsername("")
        setEmail("")
        setPass("")
    }

    const loginAfterRegister = async () => {
        setLoading(!loading)

        const res = await fetch('/api/login', {
            method : 'POST',
            headers : {
                "Content-Type" : "application/json"
            },
            body : JSON.stringify({
                name : username,
                password : password
            })
        })

        if(!res.ok){
            const err = await res.json()
            setLoading(loading)
            setFetchErr(!fetchErr)
            setMsg(err.message)
        }else{
            const data = await res.json()
            setLoading(loading)
            setMsg(data.message)
    
            router.push('/dashboard')
        }
    }

  return (
    <>
        {modal && 
            <div className={`absolute z-10 gap-y-6 bg-white shadow-md rounded flex flex-col items-center justify-center p-20`}>
                <div role="status">
                    {!loading && !fetchErr && 
                        <BS.BsFillCheckCircleFill
                            style={{
                                fontSize : '56px',
                                color : '#23a315'
                            }}
                        />
                    }
                    {!loading && fetchErr && 
                        <IM.ImCross
                            style={{
                                fontSize : '56px',
                                color : '#a31515'
                            }}
                        />
                    }
                    {loading &&
                        <svg aria-hidden="true" className="w-20 h-20 mr-2 text-gray-200 animate-spin dark:text-gray-400 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                        <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                    </svg>
                    }
                </div>
                {
                    loading &&
                    <p>Loading...</p>
                }
                {
                    !loading && !fetchErr &&
                    <div className={`flex flex-col items-center justify-center gap-y-6`}>
                        <p>{msg}</p>
                        <Button type='button'
                            className='bg-yellow-400'
                            onClick={loginAfterRegister}
                        >
                            Go To Dashboard
                        </Button>
                    </div>
                }
                {
                    !loading && fetchErr &&
                    <div className={`flex flex-col items-center justify-center gap-y-6`}>
                        <p>{msg}</p>
                        <Button type='button'
                            className='bg-red-400'
                        >
                            Back
                        </Button>
                    </div>
                }
            </div>
        }        
        <div className={`w-full lg:w-[45%] px-6 lg:px-8 py-4 lg:py-6 bg-gray-100 rounded-lg flex flex-col items-center justify-between gap-4`}>
            <h1 className={`text-xl font-bold text-black`}>Create New Account</h1>
            <FormControl onSubmit={onSubmit} method='POST' className={`bg-slate-950 flex flex-col items-start justify-start gap-y-3 w-full py-4 lg:py-8 lg:px-12 px-6 rounded-md`}>
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
                    className={`${passError ? 'border-red-600 border-2 outline-red-600' : ''}`}
                >
                    Confirm Your Password
                </TextInput>
                <div className={`w-full flex lg:flex-row flex-col items-center justify-center mt-4 gap-y-4 lg:gap-y-0 lg:gap-x-6`}>
                    <Button type='submit'
                        className='bg-btn-grad font-bold'
                    >
                        Sign Up
                    </Button>
                    <Button onClick={resetState} type='reset' className='bg-transparent text-red-700 font-bold underline underline-offset-4'>
                        Cancel
                    </Button>
                </div>
            </FormControl>
        </div>
    </>
  )
}

export default SignUp