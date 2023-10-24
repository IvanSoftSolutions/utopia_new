import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
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
        field: 'pallet',
        headerName: 'Pallet',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'upoCamion',
        headerName: 'UPO/Camión',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'articulo',
        headerName: 'Artículo',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'color',
        headerName: 'Color',
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
        field: 'kind',
        headerName: 'Kind',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'wholesHide',
        headerName: 'Wholes Hide',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'sides',
        headerName: 'Sides',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'shrunkenShoulder',
        headerName: 'Shrunken Shoulder',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'doubleButt',
        headerName: 'Double Butt',
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
        field: 'grado',
        headerName: 'Grado',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'ubicacion',
        headerName: 'Ubicación',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'locacion',
        headerName: 'Locación',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'costoPorPiel',
        headerName: 'Costo Por Piel',
        type: 'number',
        width: 120,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'piezasPorCosto',
        headerName: 'Piezas x Costo',
        type: 'number',
        width: 120,
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
        field: 'observaciones',
        headerName: 'Observaciones',
        width: 500,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
];

const rows = [
    { id: 1, pallet: 1, upoCamion: 2, articulo: 'asdasd', color: 'negro', tipo: 'vaca', kind: 'bebe', wholesHide: 14, sides: 15, shrunkenShoulder: 16, doubleButt: 17, total: 69, grado: 4, ubicacion: 'rack 1', locacion: 'bodega 2', costoPorPiel: null, piezasPorCosto: null, fecha: null, observaciones: 'adsasdasfasd' },
    { id: 2, pallet: 1, upoCamion: 2, articulo: 'asdasd', color: 'negro', tipo: 'vaca', kind: 'bebe', wholesHide: 14, sides: 15, shrunkenShoulder: 16, doubleButt: 17, total: 69, grado: 4, ubicacion: 'rack 1', locacion: 'bodega 2', costoPorPiel: null, piezasPorCosto: null, fecha: null, observaciones: 'adsasdasfasd' },
    { id: 3, pallet: 1, upoCamion: 2, articulo: 'asdasd', color: 'negro', tipo: 'vaca', kind: 'bebe', wholesHide: 14, sides: 15, shrunkenShoulder: 16, doubleButt: 17, total: 69, grado: 4, ubicacion: 'rack 1', locacion: 'bodega 2', costoPorPiel: null, piezasPorCosto: null, fecha: null, observaciones: 'adsasdasfasd' },
    { id: 4, pallet: 1, upoCamion: 2, articulo: 'asdasd', color: 'negro', tipo: 'vaca', kind: 'bebe', wholesHide: 14, sides: 15, shrunkenShoulder: 16, doubleButt: 17, total: 69, grado: 4, ubicacion: 'rack 1', locacion: 'bodega 2', costoPorPiel: null, piezasPorCosto: null, fecha: null, observaciones: 'adsasdasfasd' },
    { id: 5, pallet: 1, upoCamion: 2, articulo: 'asdasd', color: 'negro', tipo: 'vaca', kind: 'bebe', wholesHide: 14, sides: 15, shrunkenShoulder: 16, doubleButt: 17, total: 69, grado: 4, ubicacion: 'rack 1', locacion: 'bodega 2', costoPorPiel: null, piezasPorCosto: null, fecha: null, observaciones: 'adsasdasfasd' },
    { id: 6, pallet: 1, upoCamion: 2, articulo: 'asdasd', color: 'negro', tipo: 'vaca', kind: 'bebe', wholesHide: 14, sides: 15, shrunkenShoulder: 16, doubleButt: 17, total: 69, grado: 4, ubicacion: 'rack 1', locacion: 'bodega 2', costoPorPiel: null, piezasPorCosto: null, fecha: null, observaciones: 'adsasdasfasd' },
    { id: 7, pallet: 1, upoCamion: 2, articulo: 'asdasd', color: 'negro', tipo: 'vaca', kind: 'bebe', wholesHide: 14, sides: 15, shrunkenShoulder: 16, doubleButt: 17, total: 69, grado: 4, ubicacion: 'rack 1', locacion: 'bodega 2', costoPorPiel: null, piezasPorCosto: null, fecha: null, observaciones: 'adsasdasfasd' },
    { id: 8, pallet: 1, upoCamion: 2, articulo: 'asdasd', color: 'negro', tipo: 'vaca', kind: 'bebe', wholesHide: 14, sides: 15, shrunkenShoulder: 16, doubleButt: 17, total: 69, grado: 4, ubicacion: 'rack 1', locacion: 'bodega 2', costoPorPiel: null, piezasPorCosto: null, fecha: null, observaciones: 'adsasdasfasd' },
    { id: 9, pallet: 1, upoCamion: 2, articulo: 'asdasd', color: 'negro', tipo: 'vaca', kind: 'bebe', wholesHide: 14, sides: 15, shrunkenShoulder: 16, doubleButt: 17, total: 69, grado: 4, ubicacion: 'rack 1', locacion: 'bodega 2', costoPorPiel: null, piezasPorCosto: null, fecha: null, observaciones: 'adsasdasfasd' },

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

function inventario_pieles() {
    const [openNew, setOpenNew] = React.useState(false);

    const handleOpenNew = () => setOpenNew(true);
    const handleCloseNew = () => setOpenNew(false);

    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "space-around" }} >
                <Button variant="contained" sx={{ minWidth: "15em", marginTop: "2em", marginBottom: "2em" }} onClick={handleOpenNew} >nuevo Pallet</Button>
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
                aria-labelledby="nuevo-pallet"
                aria-describedby="modal-nuevo-pallet"
            >
                <Box sx={style}>
                    <h3>IFORMACION DE PALLET</h3>
                    <Box sx={{ display: "flex", justifyContent: "space-evenly" }}>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Artículo" label="Artículo" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Color" label="Color" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Tipo" label="Tipo" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Kind" label="Kind" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Wholes Hide" label="Wholes Hide" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Sides" label="Sides" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Shrunken Shoulder" label="Shrunken Shoulder" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Double Butt" label="Double Butt" variant="outlined" />
                        </Stack>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Total" label="Total" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Grado" label="Grado" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Ubicación" label="Ubicación" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Locación" label="Locación" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Costo por Piel" label="Costo por Piel" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Piezas x Costo" label="Piezas x Costo" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="UPO/Camión" label="UPO/Camión" variant="outlined" />
                            <TextField sx={{ minWidth: "15em" }} id="Fecha" label="Fecha" variant="outlined" />
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

export default inventario_pieles