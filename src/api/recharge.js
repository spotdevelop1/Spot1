export async function rechargeStripe(number, tarjeta, offerID, client_id){
    let body =  JSON.stringify({
                    number,
                    stripeToken: tarjeta,
                    offerID,
                    client_id
                })
                console.log(body)
    try {
        const response = await fetch('https://apps-ws.spot1.mx/paymentStripe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                number,
                stripeToken: tarjeta,
                offerID,
                client_id
            })
        }) 
        let data = await response.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log(error)
        return false;
    }
}