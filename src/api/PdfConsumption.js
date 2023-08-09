export async function PdfConsumption(consumos, phone){
    const consumosTable = await creatTable(consumos)
    const html = `
        <style>
            #customers {
                font-family: Arial, Helvetica, sans-serif;
                border-collapse: collapse;
                width: 100%;
            }

            #customers td, #customers th {
                border: 1px solid #ddd;
                padding: 8px;
            }

            #customers tr:nth-child(even){background-color: #f2f2f2;}

            #customers tr:hover {background-color: #ddd;}

            #customers th {
                padding-top: 12px;
                padding-bottom: 12px;
                text-align: left;
                background-color: #22afc3;
                color: white;
            }

            .textTitle{
                font-family: Arial, Helvetica, sans-serif;
                color: #1b83cd;
            }
        </style>

        <div class="container">    
            <h1 class="textTitle">Reporte de consumos del numero: ${phone}</h1>
            <table id="customers">
                <tr>
                    <th>Fecha</th>
                    <th>Consumo</th>
                </tr>
                ${consumosTable}
            </table>
        </div>
    `
    return html
}

function creatTable(consumos) {
    let consumosTable = "";

    consumos.forEach((consumo) => {
        consumosTable += `
        <tr>
            <td>${consumo.START_DATE}</td>
            <td>${parseFloat(consumo.consumos).toFixed(2)} ${consumo.UNIDAD}</td>
        </tr>
        `
    });

    return consumosTable
}

