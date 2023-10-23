import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
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
    width: "50%",
    height: "85%",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: "center",
    overflow: 'scroll'
};

function inventario_pieles() {
    const [openNew, setOpenNew] = React.useState(false);

    const handleOpenNew = () => setOpenNew(true);
    const handleCloseNew = () => setOpenNew(false);

    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "space-around" }} >
                <Button variant="contained" sx={{ minWidth: "15em", marginTop: "2em", marginBottom: "2em" }} onClick={handleOpenNew} >nuevo Pallet</Button>
            </Box>
            <Modal
                open={openNew}
                onClose={handleCloseNew}
                aria-labelledby="nueva-venta"
                aria-describedby="modal-nueva-venta"
            >
                <Box sx={style}>
                    <h3>IFORMACION DE PALLET</h3>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Artículo" label="Artículo" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Color" label="Color" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Tipo" label="Tipo" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Kind" label="Kind" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Wholes Hide" label="Wholes Hide" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Sides" label="Sides" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Shrunken Shoulder" label="Shrunken Shoulder" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Double Butt" label="Double Butt" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Total" label="Total" variant="outlined" />
                        </Stack>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Grado" label="Grado" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Ubicación" label="Ubicación" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Escurrir" label="Escurrir" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Locación" label="Locación" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Costo por Piel" label="Costo por Piel" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Piezas x Costo" label="Piezas x Costo" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Hongo" label="Hongo" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Afeitado" label="Afeitado" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Grosor" label="Grosor" variant="outlined" />
                        </Stack>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Lavado" label="Lavado" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Rechazados" label="Rechazados" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Es el pallet de la bodega 1?" label="Es el pallet de la bodega 1?" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="UPO/Camión" label="UPO/Camión" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Fecha" label="Fecha" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Evaluador" label="Evaluador" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Modificaciones/Ventas" label="Modificaciones/Ventas" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Evaluado" label="Evaluado" variant="outlined" />
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

export default inventario_pieles