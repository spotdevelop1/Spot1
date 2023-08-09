export async function consultCdrs(type, phone, dateStart, dateEnd){
    let url = 'https://apps-ws.spot1.mx/consultCdrs?' + new URLSearchParams({
        type,
        phone,
        dateStart,
        dateEnd,
    })
    console.log(url);

    try {
        const response = await (await fetch(url)).json();
        return response
    } catch (error) {
        return console.log(error)
    }

}

