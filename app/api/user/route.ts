
import { headers } from "next/headers"
import { NextResponse } from "next/server"

export async function GET() {
    const headersList = headers()
    const token = headersList.get('Authorization')
    const res = await fetch('http://localhost:5000/api/user/dashboard', {
        method : 'GET',
        headers : {
            "Content-Type" : 'application/json',
            Authorization : `Bearer ${token}`
        }
    })
    if(!res.ok){
        const err = await res.json()
        return NextResponse.json({message : err.message}, {status : res.status})
    }

    const data = await res.json()
    return NextResponse.json({data : data},{status : 200})
}