import * as React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
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
        field: 'fechaEngrase',
        headerName: 'Fecha Engrase',
        type: 'date',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'numeroCarga',
        headerName: 'Número Carga',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'cuero',
        headerName: 'Cuero',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'camionPartida',
        headerName: 'Camión/Partida',
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
        field: 'piezas',
        headerName: 'Piezas',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'material',
        headerName: 'Material',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'calibre',
        headerName: 'Calibre',
        type: 'number',
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
        field: 'fechaSecado',
        headerName: 'Fecha Secado',
        type: 'date',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'korona',
        headerName: 'Korona',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'engraseSeco',
        headerName: 'Engrase Seco',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'escurrir',
        headerName: 'Escurrir',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'desvenado',
        headerName: 'Desvenado',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'bauce',
        headerName: 'Bauce',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'vacio',
        headerName: 'Vacío',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'taic',
        headerName: 'TAIC',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'aereo',
        headerName: 'Aéreo',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'toggling',
        headerName: 'Toggling',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'ablandado',
        headerName: 'Ablandado',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'pulido',
        headerName: 'Pulido',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'abatanado',
        headerName: 'Abatanado',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'vacio2',
        headerName: 'Vacío 2',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'pistolas',
        headerName: 'Pistolas',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'roller',
        headerName: 'Roller',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'finilux',
        headerName: 'Finilux',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'rotoprex',
        headerName: 'Rotoprex',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'partido',
        headerName: 'Partido',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'grabado',
        headerName: 'Grabado',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'envioPlanta',
        headerName: 'Envio Planta',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'fechaFactura',
        headerName: 'Fecha Factura',
        type: 'date',
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
    { id: 1, fechaEngrase: null, numeroCarga: 10, cuero: 'vaca', camionPartida: 10, kg: 100, piezas: 20, material: 'venao', calibre: 45, linea: 'utopia', color: 'negro', fechaSecado: null, korona: true, engraseSeco: false, escurrir: true, desvenado: false, bauce: true, vacio: false, taic: true, aereo: false, toggling: true, ablandado: false, pulido: true, abatanado: false, vacio2: true, pistolas: false, roller: true, finilux: false, rotoprex: true, partido: false, grabado: true, envioPlanta: false, fechaFactura: null, numeroFactura: 69 },
    { id: 2, fechaEngrase: null, numeroCarga: 10, cuero: 'vaca', camionPartida: 10, kg: 100, piezas: 20, material: 'venao', calibre: 45, linea: 'utopia', color: 'negro', fechaSecado: null, korona: true, engraseSeco: false, escurrir: true, desvenado: false, bauce: true, vacio: false, taic: true, aereo: false, toggling: true, ablandado: false, pulido: true, abatanado: false, vacio2: true, pistolas: false, roller: true, finilux: false, rotoprex: true, partido: false, grabado: true, envioPlanta: false, fechaFactura: null, numeroFactura: 69 },
    { id: 3, fechaEngrase: null, numeroCarga: 10, cuero: 'vaca', camionPartida: 10, kg: 100, piezas: 20, material: 'venao', calibre: 45, linea: 'utopia', color: 'negro', fechaSecado: null, korona: true, engraseSeco: false, escurrir: true, desvenado: false, bauce: true, vacio: false, taic: true, aereo: false, toggling: true, ablandado: false, pulido: true, abatanado: false, vacio2: true, pistolas: false, roller: true, finilux: false, rotoprex: true, partido: false, grabado: true, envioPlanta: false, fechaFactura: null, numeroFactura: 69 },
    { id: 4, fechaEngrase: null, numeroCarga: 10, cuero: 'vaca', camionPartida: 10, kg: 100, piezas: 20, material: 'venao', calibre: 45, linea: 'utopia', color: 'negro', fechaSecado: null, korona: true, engraseSeco: false, escurrir: true, desvenado: false, bauce: true, vacio: false, taic: true, aereo: false, toggling: true, ablandado: false, pulido: true, abatanado: false, vacio2: true, pistolas: false, roller: true, finilux: false, rotoprex: true, partido: false, grabado: true, envioPlanta: false, fechaFactura: null, numeroFactura: 69 },
    { id: 5, fechaEngrase: null, numeroCarga: 10, cuero: 'vaca', camionPartida: 10, kg: 100, piezas: 20, material: 'venao', calibre: 45, linea: 'utopia', color: 'negro', fechaSecado: null, korona: true, engraseSeco: false, escurrir: true, desvenado: false, bauce: true, vacio: false, taic: true, aereo: false, toggling: true, ablandado: false, pulido: true, abatanado: false, vacio2: true, pistolas: false, roller: true, finilux: false, rotoprex: true, partido: false, grabado: true, envioPlanta: false, fechaFactura: null, numeroFactura: 69 },
    { id: 6, fechaEngrase: null, numeroCarga: 10, cuero: 'vaca', camionPartida: 10, kg: 100, piezas: 20, material: 'venao', calibre: 45, linea: 'utopia', color: 'negro', fechaSecado: null, korona: true, engraseSeco: false, escurrir: true, desvenado: false, bauce: true, vacio: false, taic: true, aereo: false, toggling: true, ablandado: false, pulido: true, abatanado: false, vacio2: true, pistolas: false, roller: true, finilux: false, rotoprex: true, partido: false, grabado: true, envioPlanta: false, fechaFactura: null, numeroFactura: 69 },
    { id: 7, fechaEngrase: null, numeroCarga: 10, cuero: 'vaca', camionPartida: 10, kg: 100, piezas: 20, material: 'venao', calibre: 45, linea: 'utopia', color: 'negro', fechaSecado: null, korona: true, engraseSeco: false, escurrir: true, desvenado: false, bauce: true, vacio: false, taic: true, aereo: false, toggling: true, ablandado: false, pulido: true, abatanado: false, vacio2: true, pistolas: false, roller: true, finilux: false, rotoprex: true, partido: false, grabado: true, envioPlanta: false, fechaFactura: null, numeroFactura: 69 },
    { id: 8, fechaEngrase: null, numeroCarga: 10, cuero: 'vaca', camionPartida: 10, kg: 100, piezas: 20, material: 'venao', calibre: 45, linea: 'utopia', color: 'negro', fechaSecado: null, korona: true, engraseSeco: false, escurrir: true, desvenado: false, bauce: true, vacio: false, taic: true, aereo: false, toggling: true, ablandado: false, pulido: true, abatanado: false, vacio2: true, pistolas: false, roller: true, finilux: false, rotoprex: true, partido: false, grabado: true, envioPlanta: false, fechaFactura: null, numeroFactura: 69 },
    { id: 9, fechaEngrase: null, numeroCarga: 10, cuero: 'vaca', camionPartida: 10, kg: 100, piezas: 20, material: 'venao', calibre: 45, linea: 'utopia', color: 'negro', fechaSecado: null, korona: true, engraseSeco: false, escurrir: true, desvenado: false, bauce: true, vacio: false, taic: true, aereo: false, toggling: true, ablandado: false, pulido: true, abatanado: false, vacio2: true, pistolas: false, roller: true, finilux: false, rotoprex: true, partido: false, grabado: true, envioPlanta: false, fechaFactura: null, numeroFactura: 69 },

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
                            <TextField sx={{ minWidth: "15em" }} select id="Korona" label="Korona" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Engrase Seco" label="Engrase Seco" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Escurrir" label="Escurrir" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Desvenado" label="Desvenado" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Bauce" label="Bauce" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Vacío" label="Vacío" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="TAIC" label="TAIC" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Aéreo" label="Aéreo" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Toggling" label="Toggling" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Pulido" label="Pulido" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Abatanado" label="Abatanado" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>

                        </Stack>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} select id="Ablandado" label="Ablandado" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Vacío 2" label="Vacío 2" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Pistolas" label="Pistolas" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Roller" label="Roller" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Finilux" label="Finilux" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Rotoprex" label="Rotoprex" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Partido" label="Partido" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Grabado" label="Grabado" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Envio Planta" label="Envio Planta" defaultValue={false} variant="outlined">
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
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
        </div>
    )
}

export default engrases