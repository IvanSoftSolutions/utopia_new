import * as React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
    {
        field: 'factura',
        headerName: 'Factura',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'contrato',
        headerName: 'Contrato',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'numero',
        headerName: 'Número',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'camion',
        headerName: 'Camión',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'kind',
        headerName: 'Kind',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'pallets',
        headerName: 'Pallets',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'valorUSD',
        headerName: 'Valor USD',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'hides',
        headerName: 'Hides',
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
        field: 'eta',
        headerName: 'ETA',
        type: 'date',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'truck',
        headerName: 'Truck',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'insurance',
        headerName: 'Insurance',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'maquila',
        headerName: 'Maquila',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'partida',
        headerName: 'Partida',
        type: 'date',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'entrada',
        headerName: 'Entrada',
        type: 'date',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'split',
        headerName: 'Split',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'final',
        headerName: 'Final',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'remojo',
        headerName: 'Remojo',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'dividido',
        headerName: 'Dividido',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'entrega',
        headerName: 'Entrega',
        type: 'date',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'tipo',
        headerName: 'Tipo',
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
    {
        field: 'costoProceso',
        headerName: 'Costo Proceso',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'facturaPagada',
        headerName: 'Factura Pagada',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'numeroFactura',
        headerName: 'Número Factura',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
];

const rows = [
    { id: 1, factura: 69, contrato: 4, numero: 8, camion: 10, kind: 'vaca', pallets: 20, valorUSD: 4000, hides: 45, peso: 46, eta: null, truck: 47, insurance: 'popeye', maquila: 'sky', partida: null, split: 32, final: 25, remojo: false, dividido: true, entrega: null, tipo: 'venao', observaciones: 'adasdasdasd', costoProceso: 80, facturaPagada: false, numeroFactura: 123 },
    { id: 2, factura: 69, contrato: 4, numero: 8, camion: 10, kind: 'vaca', pallets: 20, valorUSD: 4000, hides: 45, peso: 46, eta: null, truck: 47, insurance: 'popeye', maquila: 'sky', partida: null, split: 32, final: 25, remojo: false, dividido: true, entrega: null, tipo: 'venao', observaciones: 'adasdasdasd', costoProceso: 80, facturaPagada: false, numeroFactura: 123 },
    { id: 3, factura: 69, contrato: 4, numero: 8, camion: 10, kind: 'vaca', pallets: 20, valorUSD: 4000, hides: 45, peso: 46, eta: null, truck: 47, insurance: 'popeye', maquila: 'sky', partida: null, split: 32, final: 25, remojo: false, dividido: true, entrega: null, tipo: 'venao', observaciones: 'adasdasdasd', costoProceso: 80, facturaPagada: false, numeroFactura: 123 },
    { id: 4, factura: 69, contrato: 4, numero: 8, camion: 10, kind: 'vaca', pallets: 20, valorUSD: 4000, hides: 45, peso: 46, eta: null, truck: 47, insurance: 'popeye', maquila: 'sky', partida: null, split: 32, final: 25, remojo: false, dividido: true, entrega: null, tipo: 'venao', observaciones: 'adasdasdasd', costoProceso: 80, facturaPagada: false, numeroFactura: 123 },
    { id: 5, factura: 69, contrato: 4, numero: 8, camion: 10, kind: 'vaca', pallets: 20, valorUSD: 4000, hides: 45, peso: 46, eta: null, truck: 47, insurance: 'popeye', maquila: 'sky', partida: null, split: 32, final: 25, remojo: false, dividido: true, entrega: null, tipo: 'venao', observaciones: 'adasdasdasd', costoProceso: 80, facturaPagada: false, numeroFactura: 123 },
    { id: 6, factura: 69, contrato: 4, numero: 8, camion: 10, kind: 'vaca', pallets: 20, valorUSD: 4000, hides: 45, peso: 46, eta: null, truck: 47, insurance: 'popeye', maquila: 'sky', partida: null, split: 32, final: 25, remojo: false, dividido: true, entrega: null, tipo: 'venao', observaciones: 'adasdasdasd', costoProceso: 80, facturaPagada: false, numeroFactura: 123 },
    { id: 7, factura: 69, contrato: 4, numero: 8, camion: 10, kind: 'vaca', pallets: 20, valorUSD: 4000, hides: 45, peso: 46, eta: null, truck: 47, insurance: 'popeye', maquila: 'sky', partida: null, split: 32, final: 25, remojo: false, dividido: true, entrega: null, tipo: 'venao', observaciones: 'adasdasdasd', costoProceso: 80, facturaPagada: false, numeroFactura: 123 },
    { id: 8, factura: 69, contrato: 4, numero: 8, camion: 10, kind: 'vaca', pallets: 20, valorUSD: 4000, hides: 45, peso: 46, eta: null, truck: 47, insurance: 'popeye', maquila: 'sky', partida: null, split: 32, final: 25, remojo: false, dividido: true, entrega: null, tipo: 'venao', observaciones: 'adasdasdasd', costoProceso: 80, facturaPagada: false, numeroFactura: 123 },
    { id: 9, factura: 69, contrato: 4, numero: 8, camion: 10, kind: 'vaca', pallets: 20, valorUSD: 4000, hides: 45, peso: 46, eta: null, truck: 47, insurance: 'popeye', maquila: 'sky', partida: null, split: 32, final: 25, remojo: false, dividido: true, entrega: null, tipo: 'venao', observaciones: 'adasdasdasd', costoProceso: 80, facturaPagada: false, numeroFactura: 123 },

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
            <Modal
                open={openNew}
                onClose={handleCloseNew}
                aria-labelledby="nueva-importacion"
                aria-describedby="modal-nueva-importacion"
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
        </div>
    )
}

export default importaciones