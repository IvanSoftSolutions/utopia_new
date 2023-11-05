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

// const rows1 = [
//     { id: 1, usuario: 'asdasd', formula: 'Jon', peso: 35, grosor: 10, material: 'vaca', detalles: 'asdkasdasd' },
//     { id: 2, usuario: 'asdasd', formula: 'Cersei', peso: 42, grosor: 10, material: 'vaca', detalles: 'asdkasdasd' },
//     { id: 3, usuario: 'asdasd', formula: 'Jaime', peso: 45, grosor: 10, material: 'vaca', detalles: 'asdkasdasd' },
//     { id: 4, usuario: 'asdasd', formula: 'Arya', peso: 16, grosor: 10, material: 'vaca', detalles: 'asdkasdasd' },
//     { id: 5, usuario: 'asdasd', formula: 'Daenerys', peso: null, grosor: 10, material: 'vaca', detalles: 'asdkasdasd' },
//     { id: 6, usuario: 'asdasd', formula: null, peso: 150, grosor: 10, material: 'vaca', detalles: 'asdkasdasd' },
//     { id: 7, usuario: 'asdasd', formula: 'Ferrara', peso: 44, grosor: 10, material: 'vaca', detalles: 'asdkasdasd' },
//     { id: 8, usuario: 'asdasd', formula: 'Rossini', peso: 36, grosor: 10, material: 'vaca', detalles: 'asdkasdasd' },
//     { id: 9, usuario: 'asdasd', formula: 'Harvey', peso: 65, grosor: 10, material: 'vaca', detalles: 'asdkasdasd' },
// ];

function bitacora_reportes() {
    const [rows, setRows] = React.useState([]);

    React.useEffect(() => {
        let aux = 1;
        axios
            .get('http://localhost:5555/bitacora/')
            .then((response) => {
                console.log(response.data.data);
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