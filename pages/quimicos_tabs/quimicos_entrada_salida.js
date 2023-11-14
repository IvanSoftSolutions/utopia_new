import { useEffect, useState } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
    {
        field: 'fecha',
        headerName: 'Fecha',
        width: 135,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'nombre',
        headerName: 'Nombre',
        width: 200,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'cantidad',
        headerName: 'Cantidad',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'entradaSalida',
        headerName: 'Entrada/Salida',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },

];

function Quimicos_entrada_salida() {
    const [rows, setRows] = useState([]);

    useEffect(() => {
        let aux = 1;
        axios
            .get('https://utopia-new-api.onrender.com/quimico_bitacora/')
            .then((response) => {
                // console.log(response.data.data);
                response.data.data.forEach(function (element) {
                    element.id = aux;
                    aux++;
                })
                setRows(response.data.data);
            })

            .catch((error) => {
                console.log(error);
            })
    }, [])

    return (
        <div style={{ display: "flex", width: "100%", justifyContent: "space-around" }}>
            <Box>
                <DataGrid
                    rows={rows}
                    columns={columns}
                    getRowHeight={() => 'auto'}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 100,
                            },
                        },
                    }}
                    slots={{
                        toolbar: GridToolbar,
                    }}
                    disableColumnFilter
                    disableColumnMenu
                    disableRowSelectionOnClick
                />
            </Box>
        </div>
    )
}

export default Quimicos_entrada_salida