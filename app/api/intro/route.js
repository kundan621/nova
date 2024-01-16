//http://localhost:3000/api/intro
import { NextResponse } from "next/server";

export async function GET(request){
    const users=[
        {id:1, name: 'John'},
        {id:2, name: 'jane'},
        {id:3, name: 'bob'}
    ];

    return new Response(JSON.stringify(users))
}
export async function POST(req, res) {
    try {
        const data = await req.json();  // Parse the JSON body
        console.log('Received data:', data);
        return NextResponse.json({ message: 'Hello from the endpoint!' })
      } catch (error) {
        console.error('Error processing request:', error);
            return NextResponse.json({ message: 'Hello from the endpoint!' })
        }
    }
