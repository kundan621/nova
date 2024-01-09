//http://localhost:3000/api/intro

export async function GET(request){
    const users=[
        {id:1, name: 'John'},
        {id:2, name: 'jane'},
        {id:3, name: 'bob'}
    ];

    return new Response(JSON.stringify(users))
}