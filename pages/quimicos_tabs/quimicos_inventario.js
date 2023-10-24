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
    {
        field: 'id',
        headerName: 'ID',
        type: 'number',
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
        field: 'productor',
        headerName: 'Productor',
        width: 200,
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
        field: 'cantidad',
        headerName: 'Cantidad',
        type: 'number',
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
        field: 'kg',
        headerName: 'KG',
        type: 'number',
        width: 110,
        sortable: false,
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
        field: 'precio',
        headerName: 'Precio',
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
        valueGetter: (params) => params.row.kg * params.row.precio
    },
    {
        field: 'divisa',
        headerName: 'Divisa',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
];

const rows = [
    { id: 1, nombre: 'quimico', productor: 'Snow', presentacion: 'Jon', cantidad: 35, peso: 100, kg: 5, precio: 14, divisa: 'USD' },
    { id: 2, nombre: 'quimico', productor: 'Lannister', presentacion: 'Cersei', cantidad: 42, peso: 100, kg: 5, precio: 14, divisa: 'USD' },
    { id: 3, nombre: 'quimico', productor: 'Lannister', presentacion: 'Jaime', cantidad: 45, peso: 100, kg: 5, precio: 14, divisa: 'USD' },
    { id: 4, nombre: 'quimico', productor: 'Stark', presentacion: 'Arya', cantidad: 16, peso: 100, kg: 5, precio: 14, divisa: 'USD' },
    { id: 5, nombre: 'quimico', productor: 'Targaryen', presentacion: 'Daenerys', cantidad: null, peso: 100, kg: 5, precio: 14, divisa: 'USD' },
    { id: 6, nombre: 'quimico', productor: 'Melisandre', presentacion: null, cantidad: 150, peso: 100, kg: 5, precio: 14, divisa: 'USD' },
    { id: 7, nombre: 'quimico', productor: 'Clifford', presentacion: 'Ferrara', cantidad: 44, peso: 100, kg: 5, precio: 14, divisa: 'USD' },
    { id: 8, nombre: 'quimico', productor: 'Frances', presentacion: 'Rossini', cantidad: 36, peso: 100, kg: 5, precio: 14, divisa: 'USD' },
    { id: 9, nombre: 'quimico', productor: 'Roxie', presentacion: 'Harvey', cantidad: 65, peso: 100, kg: 5, precio: 14, divisa: 'USD' },

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