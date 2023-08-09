export async function getAllRates(){
    try {
        const response = await fetch('https://apps-ws.spot1.mx/getAllRates', {
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

