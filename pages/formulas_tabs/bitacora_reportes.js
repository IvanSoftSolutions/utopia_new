import * as React from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
    {
        field: 'usuario',
        headerName: 'Usuario',
        width: 110,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'fecha',
        headerName: 'Fecha',
        type: 'string',
        width: 130,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'formula',
        headerName: 'Formula',
        width: 250,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'peso',
        headerName: 'Peso',
        type: 'number',
        width: 110,
        headerAlign: 'center',
        align: 'center',
        valueFormatter: (params) => {
            if (params.value == null) {
                return '';
            }
            return `${params.value.toLocaleString()} kg`;
        },
    },
    {
        field: 'grosor',
        headerName: 'Grosor',
        type: 'number',
        width: 110,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'material',
        headerName: 'Material',
        width: 150,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'detalles',
        headerName: 'Detalles',
        width: 550,
        headerAlign: 'center',
        align: 'center',
    },
];

function bitacora_reportes() {
    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        let aux = 1;
        axios
            .get('https://utopia-new-api.onrender.com/bitacora/')
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
        <div>
            <Box sx={{}} >
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

export default bitacora_reportes