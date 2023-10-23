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

function engrases() {
    const [openNew, setOpenNew] = React.useState(false);

    const handleOpenNew = () => setOpenNew(true);
    const handleCloseNew = () => setOpenNew(false);

    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "space-around" }} >
                <Button variant="contained" sx={{ minWidth: "15em", marginTop: "2em", marginBottom: "2em" }} onClick={handleOpenNew} >Nuevo Engrase</Button>
            </Box>
            <Modal
                open={openNew}
                onClose={handleCloseNew}
                aria-labelledby="nueva-venta"
                aria-describedby="modal-nueva-venta"
            >
                <Box sx={style}>
                    <h3>IFORMACION DE ENGRASE</h3>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Fecha" label="Fecha" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Numero Carga" label="Numero Carga" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Cuero" label="Cuero" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Camion/Partida" label="Camion/Partida" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Kilogramos" label="Kilogramos" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Piezas" label="Piezas" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Material" label="Material" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Calibre" label="Calibre" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Línea" label="Línea" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Color" label="Color" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Fecha Secado" label="Fecha Secado" variant="outlined" />
                        </Stack>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Korona" label="Korona" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Engrase Seco" label="Engrase Seco" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Escurrir" label="Escurrir" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Desvenado" label="Desvenado" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Bauce" label="Bauce" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Vacío" label="Vacío" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="TAIC" label="TAIC" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Aéreo" label="Aéreo" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Toggling" label="Toggling" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Pulido" label="Pulido" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Abatanado" label="Abatanado" variant="outlined" />

                        </Stack>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Ablandado" label="Ablandado" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Vacío 2" label="Vacío 2" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Pistolas" label="Pistolas" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Roller" label="Roller" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Finilux" label="Finilux" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Rotoprex" label="Rotoprex" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Partido" label="Partido" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Grabado" label="Grabado" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Envio Planta" label="Envio Planta" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Fecha Facturacion" label="Fecha Facturacion" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Numero Factura" label="Numero Factura" variant="outlined" />
                        </Stack>
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

export default engrases