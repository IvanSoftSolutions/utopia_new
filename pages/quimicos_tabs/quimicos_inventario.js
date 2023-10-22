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
    width: "20em",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: "center"
};

function quimicos_inventario() {
    const [openNew, setOpenNew] = React.useState(false);
    const [openAdd, setOpenAdd] = React.useState(false);
    const [quimico, setQuimico] = React.useState('');

    const handleOpenNew = () => setOpenNew(true);
    const handleCloseNew = () => setOpenNew(false);

    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

    const handleQuimicoChange = (event) => {
        setQuimico(event.target.value);
    };

    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "space-around" }} >
                <Button variant="contained" sx={{ minWidth: "15em", marginTop: "2em", marginBottom: "2em" }} onClick={handleOpenNew} >Nuevo Quimico</Button>
                <Button variant="contained" sx={{ minWidth: "15em", marginTop: "2em", marginBottom: "2em" }} onClick={handleOpenAdd} >Agregar a existente</Button>
            </Box>
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
            <Modal
                open={openNew}
                onClose={handleCloseNew}
                aria-labelledby="nuevo-quimico"
                aria-describedby="modal-nuevo-quimico"
            >
                <Box sx={style}>
                    <h3>INFORMACION</h3>
                    <Stack spacing={2}>
                        <TextField sx={{ minWidth: "15em" }} id="Nombre" label="Nombre" variant="outlined" />
                        <TextField sx={{ minWidth: "15em" }} id="Productor" label="Productor" variant="outlined" />
                        <TextField sx={{ minWidth: "15em" }} id="Presentacion" label="Presentacion" variant="outlined" />
                        <TextField sx={{ minWidth: "15em" }} id="Cantidad" label="Cantidad" variant="outlined" />
                        <TextField sx={{ minWidth: "15em" }} id="Peso" label="Peso" variant="outlined" />
                        <TextField sx={{ minWidth: "15em" }} id="Precio" label="Precio" variant="outlined" />
                        <TextField sx={{ minWidth: "15em" }} id="Divisa" label="Divisa" variant="outlined" />
                    </Stack>
                    <Button variant="contained" sx={{ minWidth: "6.5em", marginTop: "2em", marginBottom: "2em", marginRight: "1em" }} >Aceptar</Button>
                    <Button variant="contained" sx={{ minWidth: "6.5em", marginLeft: "1em" }} onClick={handleCloseNew} >Cancelar</Button>
                </Box>
            </Modal>
            <Modal
                open={openAdd}
                onClose={handleCloseAdd}
                aria-labelledby="agregar-existente"
                aria-describedby="modal-agregar-existente"
            >
                <Box sx={style}>
                    <h3>AGREGAR A INVENTARIO</h3>
                    <Stack spacing={2}>
                        <FormControl>
                            <InputLabel id="quimico-label">Quimico</InputLabel>
                            <Select
                                labelId="quimico-label"
                                id="quimico"
                                value={quimico}
                                label="quimico"
                                onChange={handleQuimicoChange}
                                sx={{ minWidth: "15em" }}
                            >
                                <MenuItem value={10}></MenuItem>
                                <MenuItem value={20}></MenuItem>
                                <MenuItem value={30}></MenuItem>
                            </Select>
                        </FormControl>
                        <TextField sx={{ minWidth: "15em" }} id="quimico-cantidad" label="Cantidad" variant="outlined" />
                    </Stack>
                    <Button variant="contained" sx={{ minWidth: "6.5em", marginTop: "2em", marginBottom: "2em", marginRight: "1em" }} >Aceptar</Button>
                    <Button variant="contained" sx={{ minWidth: "6.5em", marginLeft: "1em" }} onClick={handleCloseAdd} >Cancelar</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default quimicos_inventario