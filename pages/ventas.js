import * as React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

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

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "35%",
    height: "85%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: "center",
    overflow: 'scroll'
};

function ventas() {
    const [openNew, setOpenNew] = React.useState(false);
    const [age, setAge] = React.useState('');

    const handleOpenNew = () => setOpenNew(true);
    const handleCloseNew = () => setOpenNew(false);
    const handleChange = (event) => {
        setAge(event.target.value);
    };

    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "space-around" }} >
                <Button variant="contained" sx={{ minWidth: "15em", marginTop: "2em", marginBottom: "2em" }} onClick={handleOpenNew} >Nueva Venta</Button>
            </Box>
            <Modal
                open={openNew}
                onClose={handleCloseNew}
                aria-labelledby="nueva-venta"
                aria-describedby="modal-nueva-venta"
            >
                <Box sx={style}>
                    <h3>INFORMACION DE VENTA</h3>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Folio" label="Folio" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Fecha" label="Fecha" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Cliente" label="Cliente" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Inventario" label="Inventario" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Piezas" label="Piezas" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Cantidad" label="Cantidad" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Precio" label="Precio" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Total MXN" label="Total MXN" variant="outlined" />

                        </Stack>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Tasa de Cambio" label="Tasa de Cambio" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Total USD" label="Total USD" variant="outlined" />
                            <FormControl>
                                <InputLabel id="concepto-label">Concepto</InputLabel>
                                <Select
                                    labelId="concepto-label"
                                    id="concepto"
                                    value={age}
                                    label="concepto"
                                    onChange={handleChange}
                                    sx={{ minWidth: "15em" }}
                                >
                                    <MenuItem value={10}></MenuItem>
                                    <MenuItem value={20}></MenuItem>
                                    <MenuItem value={30}></MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel id="unidad-label">Unidad</InputLabel>
                                <Select
                                    labelId="unidad-label"
                                    id="unidad"
                                    value={age}
                                    label="unidad"
                                    onChange={handleChange}
                                    sx={{ minWidth: "15em" }}
                                >
                                    <MenuItem value={10}></MenuItem>
                                    <MenuItem value={20}></MenuItem>
                                    <MenuItem value={30}></MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel id="unidadMedida-label">Unidad de Medida</InputLabel>
                                <Select
                                    labelId="unidadMedida-label"
                                    id="unidadMedida"
                                    value={age}
                                    label="unidadMedida"
                                    onChange={handleChange}
                                    sx={{ minWidth: "15em" }}
                                >
                                    <MenuItem value={10}></MenuItem>
                                    <MenuItem value={20}></MenuItem>
                                    <MenuItem value={30}></MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel id="seleccion-label">Seleccion</InputLabel>
                                <Select
                                    labelId="seleccion-label"
                                    id="seleccion"
                                    value={age}
                                    label="seleccion"
                                    onChange={handleChange}
                                    sx={{ minWidth: "15em" }}
                                >
                                    <MenuItem value={10}></MenuItem>
                                    <MenuItem value={20}></MenuItem>
                                    <MenuItem value={30}></MenuItem>
                                </Select>
                            </FormControl>
                            <FormControl>
                                <InputLabel id="tipo-label">Tipo</InputLabel>
                                <Select
                                    labelId="tipo-label"
                                    id="tipo"
                                    value={age}
                                    label="tipo"
                                    onChange={handleChange}
                                    sx={{ minWidth: "15em" }}
                                >
                                    <MenuItem value={10}></MenuItem>
                                    <MenuItem value={20}></MenuItem>
                                    <MenuItem value={30}></MenuItem>
                                </Select>
                            </FormControl>
                        </Stack>
                    </Box>
                    <Box sx={{ marginTop: "2em" }}>
                        <TextField id="Observaciones" label="Observaciones" variant="outlined" fullWidth multiline />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Button variant="contained" sx={{ maxWidth: "6.5em", marginTop: "2em", marginBottom: "2em" }} >Aceptar</Button>
                        <Button variant="contained" sx={{ maxWidth: "6.5em", marginTop: "2em", marginBottom: "2em" }} onClick={handleCloseNew} >Cancelar</Button>
                    </Box>

                </Box>
            </Modal>
            <Box sx={{}} >
                <DataGrid
                    rows={rows}
                    columns={columns}
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
                />
            </Box>
        </div>
    )
}

export default ventas