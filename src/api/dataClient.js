export async function dataClient(userId){
    try {
    const response = await fetch('https://apps-ws.spot1.mx/get-user?id_client='+userId, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        }) 
        return response.json()
    } catch (error) {
        console.log(error)
        return error;
    }
}