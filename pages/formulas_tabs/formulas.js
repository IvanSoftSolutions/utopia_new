import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DataGrid, GridToolbar, gridClasses } from '@mui/x-data-grid';


export default function Formulas() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const columns = [
        {
            field: 'porcentage',
            headerName: 'Porcentaje %',
            type: 'number',
            width: 110,
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            valueFormatter: (params) => {
                if (params.value == null) {
                    return '';
                }
                return `${params.value.toLocaleString()} %`;
            },
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
            field: 'producto',
            headerName: 'Producto',
            width: 350,
            sortable: false,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'temp',
            headerName: 'Temp (C°)',
            type: 'number',
            width: 110,
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            valueFormatter: (params) => {
                if (params.value == null) {
                    return '';
                }
                return `${params.value.toLocaleString()} °`;
            },
        },
        {
            field: 'tiempo',
            headerName: 'Tiempo (min)',
            type: 'number',
            width: 110,
            sortable: false,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'cut',
            headerName: '#Cut',
            type: 'number',
            width: 110,
            sortable: false,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'observaciones',
            headerName: 'Observaciones',
            width: 500,
            sortable: false,
            headerAlign: 'center',
            align: 'center',
        },
    ];

    const rows = [
        { id: 1, porcentaje: 1, cantidad: 'Snow', producto: 'Jon', temp: 35, observaciones: 'aaaaaaaaassss' },
        { id: 2, porcentaje: 2, cantidad: 'Lannister', producto: 'Cersei', temp: 42, observaciones: 'aaa aaa aaaaa a aaa aaaaaa aaaa aaa aa aa aaaaaaaaaa aaaaaaaaaa aaaaaaaa aaaaaaaaa' },
        { id: 3, porcentaje: 3, cantidad: 'Lannister', producto: 'Jaime', temp: 45, observaciones: 'aaaaaaaaassss' },
        { id: 4, porcentaje: 4, cantidad: 'Stark', producto: 'Arya', temp: 16, observaciones: 'aaaaaaaaassss' },
        { id: 5, porcentaje: 5, cantidad: 'Targaryen', producto: 'Daenerys', temp: null, observaciones: 'aaaaaaaaassss' },
        { id: 6, porcentaje: 6, cantidad: 'Melisandre', producto: null, temp: 150, observaciones: 'aaaaaaaaassss' },
        { id: 7, porcentaje: 7, cantidad: 'Clifford', producto: 'Ferrara', temp: 44, observaciones: 'aaaaaaaaassss' },
        { id: 8, porcentaje: 8, cantidad: 'Frances', producto: 'Rossini', temp: 36, observaciones: 'aaaaaaaaassss' },
        { id: 9, porcentaje: 9, cantidad: 'Roxie', producto: 'Harvey', temp: 65, observaciones: 'aaaaaaaaassss' },

    ];

    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Stack spacing={2}>
                    <FormControl>
                        <InputLabel id="articulo-label">Articulo</InputLabel>
                        <Select
                            labelId="articulo-label"
                            id="articulo"
                            value={age}
                            label="articulo"
                            onChange={handleChange}
                            sx={{ minWidth: "15em" }}
                        >
                            <MenuItem value={10}></MenuItem>
                            <MenuItem value={20}></MenuItem>
                            <MenuItem value={30}></MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="color-label">Color</InputLabel>
                        <Select
                            labelId="color-label"
                            id="color"
                            value={age}
                            label="color"
                            onChange={handleChange}
                            sx={{ minWidth: "15em" }}
                        >
                            <MenuItem value={10}></MenuItem>
                            <MenuItem value={20}></MenuItem>
                            <MenuItem value={30}></MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="pallet-label">Pallet</InputLabel>
                        <Select
                            labelId="pallet-label"
                            id="pallet"
                            value={age}
                            label="pallet"
                            onChange={handleChange}
                            sx={{ minWidth: "15em" }}
                        >
                            <MenuItem value={10}></MenuItem>
                            <MenuItem value={20}></MenuItem>
                            <MenuItem value={30}></MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
                <Stack spacing={2}>
                    <TextField sx={{ minWidth: "15em" }} id="grosor" label="Grosor" variant="outlined" />
                    <TextField sx={{ minWidth: "15em" }} id="material" label="Material" variant="outlined" />
                    <TextField sx={{ minWidth: "15em" }} id="detalles" label="Detalles" variant="outlined" />
                </Stack>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-around" }} >
                <Button variant="contained" sx={{ minWidth: "15em", marginTop: "2em", marginBottom: "2em" }} >Buscar</Button>
                <Button variant="contained" sx={{ minWidth: "15em", marginTop: "2em", marginBottom: "2em" }} >Correr</Button>
            </Box>
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
