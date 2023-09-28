import { NextResponse } from "next/server"
import { cookies } from "next/headers"

export async function POST(req:Request) {
    const body = await req.json()
    const res = await fetch('http://localhost:5000/api/user/login', {
        method : 'POST',
        headers : {
            "Content-Type" : "application/json"
        },
        body : JSON.stringify(body)
    })

    if(!res.ok){
        const err = await res.json()
        return NextResponse.json({message : err.message}, {status : 400})
    }

    const data = await res.json()

    cookies().set('token', data.token)

    return NextResponse.json({message : 'Login Success'}, {status : 200})
}