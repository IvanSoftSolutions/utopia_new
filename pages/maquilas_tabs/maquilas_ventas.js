import * as React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
    {
        field: 'folio',
        headerName: 'Folio',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
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
        field: 'cliente',
        headerName: 'Cliente',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'concepto',
        headerName: 'Concepto',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'cantidad',
        headerName: 'Cantidad',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'wholeHideSides',
        headerName: 'Whole Hide/Sides',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
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
    },
    {
        field: 'moneda',
        headerName: 'Moneda',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'tasaDeCambio',
        headerName: 'Tasa De Cambio',
        type: 'number',
        width: 130,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'totalUSD',
        headerName: 'Total USD',
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
    { id: 1, folio: 69, fecha: null, cliente: 'El flaco', concepto: 'cosas voli', cantidad: 45, wholeHideSides: 60, precio: 47, total: 48, moneda: '', tasaDeCambio: 50, totalUSD: 98, observaciones: 'adsasdasdas' },
    { id: 2, folio: 69, fecha: null, cliente: 'El flaco', concepto: 'cosas voli', cantidad: 45, wholeHideSides: 60, precio: 47, total: 48, moneda: '', tasaDeCambio: 50, totalUSD: 98, observaciones: 'adsasdasdas' },
    { id: 3, folio: 69, fecha: null, cliente: 'El flaco', concepto: 'cosas voli', cantidad: 45, wholeHideSides: 60, precio: 47, total: 48, moneda: '', tasaDeCambio: 50, totalUSD: 98, observaciones: 'adsasdasdas' },
    { id: 4, folio: 69, fecha: null, cliente: 'El flaco', concepto: 'cosas voli', cantidad: 45, wholeHideSides: 60, precio: 47, total: 48, moneda: '', tasaDeCambio: 50, totalUSD: 98, observaciones: 'adsasdasdas' },
    { id: 5, folio: 69, fecha: null, cliente: 'El flaco', concepto: 'cosas voli', cantidad: 45, wholeHideSides: 60, precio: 47, total: 48, moneda: '', tasaDeCambio: 50, totalUSD: 98, observaciones: 'adsasdasdas' },
    { id: 6, folio: 69, fecha: null, cliente: 'El flaco', concepto: 'cosas voli', cantidad: 45, wholeHideSides: 60, precio: 47, total: 48, moneda: '', tasaDeCambio: 50, totalUSD: 98, observaciones: 'adsasdasdas' },
    { id: 7, folio: 69, fecha: null, cliente: 'El flaco', concepto: 'cosas voli', cantidad: 45, wholeHideSides: 60, precio: 47, total: 48, moneda: '', tasaDeCambio: 50, totalUSD: 98, observaciones: 'adsasdasdas' },
    { id: 8, folio: 69, fecha: null, cliente: 'El flaco', concepto: 'cosas voli', cantidad: 45, wholeHideSides: 60, precio: 47, total: 48, moneda: '', tasaDeCambio: 50, totalUSD: 98, observaciones: 'adsasdasdas' },
    { id: 9, folio: 69, fecha: null, cliente: 'El flaco', concepto: 'cosas voli', cantidad: 45, wholeHideSides: 60, precio: 47, total: 48, moneda: '', tasaDeCambio: 50, totalUSD: 98, observaciones: 'adsasdasdas' },

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

function maquilas_ventas() {
    const [openNew, setOpenNew] = React.useState(false);

    const handleOpenNew = () => setOpenNew(true);
    const handleCloseNew = () => setOpenNew(false);

    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "space-around" }} >
                <Button variant="contained" sx={{ minWidth: "15em", marginTop: "2em", marginBottom: "2em" }} onClick={handleOpenNew} >Nueva Maquila</Button>
            </Box>
            <Modal
                open={openNew}
                onClose={handleCloseNew}
                aria-labelledby="nueva-maquila"
                aria-describedby="modal-nueva-maquila"
            >
                <Box sx={style}>
                    <h3>INFORMACION DE VENTA</h3>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Folio" label="Folio" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Fecha" label="Fecha" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Cliente" label="Cliente" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Concepto" label="Concepto" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Cantidad" label="Cantidad" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Whole Hide/Sides" label="Whole Hide/Sides" variant="outlined" />
                        </Stack>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Precio" label="Precio" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Total" label="Total" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Moneda" label="Moneda" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Tasa de Cambio" label="Tasa de Cambio" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Total USD" label="Total USD" variant="outlined" />
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
    )
}

export default maquilas_ventas