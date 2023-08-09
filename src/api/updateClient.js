export async function updateClient({name, lastname, cellphone, email, password}){
    // console.log({name, lastname, cellphone, email, password})
    // return 1
    try {
        const response = await fetch('https://apps-ws.spot1.mx/updateClient', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body:JSON.stringify({
                name,
                lastname,
                email,
                cellphone,
                password
            })
        }) 
        console.log(response)
        return response.json()
    } catch (error) {
        console.log(error)
        return error;
    }
}