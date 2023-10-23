import * as React from 'react'
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

function importaciones() {
    const [openNew, setOpenNew] = React.useState(false);

    const handleOpenNew = () => setOpenNew(true);
    const handleCloseNew = () => setOpenNew(false);

    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "space-around" }} >
                <Button variant="contained" sx={{ minWidth: "15em", marginTop: "2em", marginBottom: "2em" }} onClick={handleOpenNew} >Nueva Importacion</Button>
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
                            <TextField sx={{ minWidth: "15em" }} id="Factura" label="Factura" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Fecha" label="Fecha" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Número" label="Número" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Camión" label="Camión" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Tipo" label="Tipo" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Pallets" label="Pallets" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Valor USD" label="Valor USD" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Hides" label="Hides" variant="outlined" />
                        </Stack>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Peso" label="Peso" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="ETA" label="ETA" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Truck" label="Truck" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Insurance" label="Insurance" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Maquila" label="Maquila" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Partida" label="Partida" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Entrada" label="Entrada" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Split" label="Split" variant="outlined" />
                        </Stack>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Final" label="Final" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Remojo" label="Remojo" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Dividido" label="Dividido" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Entrega" label="Entrega" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Type" label="Type" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Costo Proceso" label="Costo Proceso" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Factura Pagada" label="Factura Pagada" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Número Factura" label="Número Factura" variant="outlined" />
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

export default importaciones