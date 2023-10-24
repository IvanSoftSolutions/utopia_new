import * as React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
    {
        field: 'concepto',
        headerName: 'Concepto',
        width: 150,
        editable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'unidad',
        headerName: 'Unidad',
        width: 150,
        editable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'seleccion',
        headerName: 'Seleccion',
        width: 110,
        editable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'tipo',
        headerName: 'Tipo',
        width: 110,
        editable: false,
        headerAlign: 'center',
        align: 'center',
    },
];

const rows = [
    { id: 1, concepto: 'cosas voli', unidad: 'balones', seleccion: 'premium', tipo: 'Mikasa' },
    { id: 2, concepto: 'cosas voli', unidad: 'balones', seleccion: 'premium', tipo: 'Mikasa' },
    { id: 3, concepto: 'cosas voli', unidad: 'balones', seleccion: 'premium', tipo: 'Mikasa' },
    { id: 4, concepto: 'cosas voli', unidad: 'balones', seleccion: 'premium', tipo: 'Mikasa' },
    { id: 5, concepto: 'cosas voli', unidad: 'balones', seleccion: 'premium', tipo: 'Mikasa' },
    { id: 6, concepto: 'cosas voli', unidad: 'balones', seleccion: 'premium', tipo: 'Mikasa' },
    { id: 7, concepto: 'cosas voli', unidad: 'balones', seleccion: 'premium', tipo: 'Mikasa' },
    { id: 8, concepto: 'cosas voli', unidad: 'balones', seleccion: 'premium', tipo: 'Mikasa' },
    { id: 9, concepto: 'cosas voli', unidad: 'balones', seleccion: 'premium', tipo: 'Mikasa' },

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

function ventas_conceptos() {
    const [openNew, setOpenNew] = React.useState(false);

    const handleOpenNew = () => setOpenNew(true);
    const handleCloseNew = () => setOpenNew(false);

    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "space-around" }} >
                <Button variant="contained" sx={{ minWidth: "15em", marginTop: "2em", marginBottom: "2em" }} onClick={handleOpenNew} >Nuevo Concepto</Button>
            </Box>
            <Modal
                open={openNew}
                onClose={handleCloseNew}
                aria-labelledby="nuevo-concepto"
                aria-describedby="modal-nuevo-concepto"
            >
                <Box sx={style}>
                    <h3>IFORMACION DE CONCEPTO</h3>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Concepto" label="Concepto" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Unidad" label="Unidad" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Selección" label="Selección" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Tipo" label="Tipo" variant="outlined" />
                        </Stack>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Button variant="contained" sx={{ maxWidth: "6.5em", marginTop: "2em", marginBottom: "2em" }} >Aceptar</Button>
                        <Button variant="contained" sx={{ maxWidth: "6.5em", marginTop: "2em", marginBottom: "2em" }} onClick={handleCloseNew} >Cancelar</Button>
                    </Box>
                </Box>
            </Modal>
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

        </div>
    )
}

export default ventas_conceptos