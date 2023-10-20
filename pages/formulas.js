import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DataGrid } from '@mui/x-data-grid';


export default function Formulas() {
    const [age, setAge] = React.useState('');

    const handleChange = (event) => {
        setAge(event.target.value);
    };

    const columns = [
        { field: 'id', headerName: 'ID', width: 90 },
        {
            field: 'firstName',
            headerName: 'First name',
            width: 150,
            editable: true,
        },
        {
            field: 'lastName',
            headerName: 'Last name',
            width: 150,
            editable: true,
        },
        {
            field: 'age',
            headerName: 'Age',
            type: 'number',
            width: 110,
            editable: true,
        },
        {
            field: 'fullName',
            headerName: 'Full name',
            description: 'This column has a value getter and is not sortable.',
            sortable: false,
            width: 160,
            valueGetter: (params) =>
                `${params.row.firstName || ''} ${params.row.lastName || ''}`,
        }
    ];

    const rows = [
        { id: 1, lastName: 'Snow', firstName: 'Jon', age: 35 },
        { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 42 },
        { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 45 },
        { id: 4, lastName: 'Stark', firstName: 'Arya', age: 16 },
        { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
        { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
        { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
        { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
        { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },

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
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 10,
                            },
                        },
                    }}
                />
            </Box>
        </div>
    )
}
