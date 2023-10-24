import * as React from 'react'
import Box from '@mui/material/Box';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
    {
        field: 'fecha',
        headerName: 'Fecha',
        type: 'date',
        width: 110,
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
        field: 'presentacion',
        headerName: 'Presentación',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'peso',
        headerName: 'Peso',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'total',
        headerName: 'Total',
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

const rows = [
    { id: 1, fecha: null, nombre: 'quimico', cantidad: 5, presentacion: 'Jon', peso: 35, total: 100, entradaSalida: 'Entrada', },
    { id: 2, fecha: null, nombre: 'quimico', cantidad: 5, presentacion: 'Cersei', peso: 42, total: 100, entradaSalida: 'Entrada', },
    { id: 3, fecha: null, nombre: 'quimico', cantidad: 5, presentacion: 'Jaime', peso: 45, total: 100, entradaSalida: 'Entrada', },
    { id: 4, fecha: null, nombre: 'quimico', cantidad: 5, presentacion: 'Arya', peso: 16, total: 100, entradaSalida: 'Entrada', },
    { id: 5, fecha: null, nombre: 'quimico', cantidad: 5, presentacion: 'Daenerys', peso: null, total: 100, entradaSalida: 'Entrada', },
    { id: 6, fecha: null, nombre: 'quimico', cantidad: 5, presentacion: null, peso: 150, total: 100, entradaSalida: 'Entrada', },
    { id: 7, fecha: null, nombre: 'quimico', cantidad: 5, presentacion: 'Ferrara', peso: 44, total: 100, entradaSalida: 'Entrada', },
    { id: 8, fecha: null, nombre: 'quimico', cantidad: 5, presentacion: 'Rossini', peso: 36, total: 100, entradaSalida: 'Entrada', },
    { id: 9, fecha: null, nombre: 'quimico', cantidad: 5, presentacion: 'Harvey', peso: 65, total: 100, entradaSalida: 'Entrada', },

];

function quimicos_entrada_salida() {
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
                                pageSize: 10,
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

export default quimicos_entrada_salida