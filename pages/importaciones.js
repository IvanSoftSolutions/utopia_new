import * as React from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

const columns = [
    {
        field: 'factura',
        headerName: 'Factura',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'contrato',
        headerName: 'Contrato',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'no',
        headerName: 'No',
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
        width: 135,
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
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'entrada',
        headerName: 'Entrada',
        width: 135,
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
        width: 135,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'dividido',
        headerName: 'Dividido',
        width: 135,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'entrega',
        headerName: 'Entrega',
        width: 135,
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
        type: 'number',
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
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
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
    const [rows, setRows] = React.useState([]);
    const [factura, setFactura] = React.useState(0);
    const [contrato, setContrato] = React.useState('');
    const [no, setNo] = React.useState('');
    const [camion, setCamion] = React.useState('');
    const [kind, setKind] = React.useState('');
    const [pallets, setPallets] = React.useState(0);
    const [valorUSD, setValorUSD] = React.useState(0);
    const [hides, setHides] = React.useState(0);
    const [peso, setPeso] = React.useState(0);
    const [eta, setEta] = React.useState('');
    const [truck, setTruck] = React.useState('');
    const [insurance, setInsurance] = React.useState(0);
    const [maquila, setMaquila] = React.useState('');
    const [partida, setPartida] = React.useState('');
    const [entrada, setEntrada] = React.useState('');
    const [split, setSplit] = React.useState('');
    const [final, setFinal] = React.useState('');
    const [remojo, setRemojo] = React.useState('');
    const [dividido, setDividido] = React.useState('');
    const [entrega, setEntrega] = React.useState('');
    const [tipo, setTipo] = React.useState('');
    const [observaciones, setObservaciones] = React.useState('');
    const [costoProceso, setCostoProceso] = React.useState(0);
    const [facturaPagada, setFacturaPagada] = React.useState(false);
    const [numeroFactura, setNumeroFactura] = React.useState(0);

    const [openNew, setOpenNew] = React.useState(false);

    const handleOpenNew = () => setOpenNew(true);
    const handleCloseNew = () => setOpenNew(false);

    const handleFacturaChange = (event) => {
        setFactura(event.target.value);
    };

    const handleContratoChange = (event) => {
        setContrato(event.target.value);
    };

    const handleNoChange = (event) => {
        setNo(event.target.value);
    };

    const handleCamionChange = (event) => {
        setCamion(event.target.value);
    };

    const handleKindChange = (event) => {
        setKind(event.target.value);
    };

    const handlePalletsChange = (event) => {
        setPallets(event.target.value);
    };

    const handleValorUSDChange = (event) => {
        setValorUSD(event.target.value);
    };

    const handleHidesChange = (event) => {
        setHides(event.target.value);
    };

    const handlePesoChange = (event) => {
        setPeso(event.target.value);
    };

    const handleTruckChange = (event) => {
        setTruck(event.target.value);
    };

    const handleInsuranceChange = (event) => {
        setInsurance(event.target.value);
    };

    const handleMaquilaChange = (event) => {
        setMaquila(event.target.value);
    };

    const handlePartidaChange = (event) => {
        setPartida(event.target.value);
    };

    const handleSplitChange = (event) => {
        setSplit(event.target.value);
    };

    const handleFinalChange = (event) => {
        setFinal(event.target.value);
    };

    const handleTipoChange = (event) => {
        setTipo(event.target.value);
    };

    const handleObservacionesChange = (event) => {
        setObservaciones(event.target.value);
    };

    const handleCostoProcesoChange = (event) => {
        setCostoProceso(event.target.value);
    };

    const handleFacturaPagadaChange = (event) => {
        setFacturaPagada(event.target.value);
    };

    const handleNumeroFacturaChange = (event) => {
        setNumeroFactura(event.target.value);
    };

    React.useEffect(() => {
        let aux = 1;
        axios
            .get('https://utopia-new-api.onrender.com/importaciones/')
            .then((response) => {
                // console.log(response.data.data);
                response.data.data.forEach(function (element) {
                    element.id = aux;
                    aux++;
                })
                setRows(response.data.data);
            })

            .catch((error) => {
                console.log(error);
            })
    }, [])

    function postImportacion() {

        const data = {
            factura,
            contrato,
            no,
            camion,
            kind,
            pallets,
            valorUSD,
            hides,
            peso,
            eta,
            truck,
            insurance,
            maquila,
            partida,
            entrada,
            split,
            final,
            remojo,
            dividido,
            entrega,
            tipo,
            observaciones,
            costoProceso,
            facturaPagada,
            numeroFactura,
        }

        console.log(data);

        axios
            .post('https://utopia-new-api.onrender.com/importaciones/', data)
            .then((response) => {
                // console.log(response.data.data);
                setOpenNew(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }

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
                            <TextField sx={{ minWidth: "15em" }} id="Factura" label="Factura" variant="outlined" onChange={handleFacturaChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Contrato" label="Contrato" variant="outlined" onChange={handleContratoChange} />
                            <TextField sx={{ minWidth: "15em" }} id="No" label="No" variant="outlined" onChange={handleNoChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Camión" label="Camión" variant="outlined" onChange={handleCamionChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Tipo" label="Tipo" variant="outlined" onChange={handleKindChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Pallets" label="Pallets" variant="outlined" onChange={handlePalletsChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Valor USD" label="Valor USD" variant="outlined" onChange={handleValorUSDChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Hides" label="Hides" variant="outlined" onChange={handleHidesChange} />
                        </Stack>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Peso" label="Peso" variant="outlined" onChange={handlePesoChange} />
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es-mx'>
                                <DesktopDatePicker label="ETA" value={dayjs(eta)} onChange={(newValue) => setEta((newValue.$d).toDateString())}
                                />
                            </LocalizationProvider>
                            <TextField sx={{ minWidth: "15em" }} id="Truck" label="Truck" variant="outlined" onChange={handleTruckChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Insurance" label="Insurance" variant="outlined" onChange={handleInsuranceChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Maquila" label="Maquila" variant="outlined" onChange={handleMaquilaChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Partida" label="Partida" variant="outlined" onChange={handlePartidaChange} />
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es-mx'>
                                <DesktopDatePicker label="Entrada" value={dayjs(entrada)} onChange={(newValue) => setEntrada((newValue.$d).toDateString())}
                                />
                            </LocalizationProvider>
                            <TextField sx={{ minWidth: "15em" }} id="Split" label="Split" variant="outlined" onChange={handleSplitChange} />
                        </Stack>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Final" label="Final" variant="outlined" onChange={handleFinalChange} />
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es-mx'>
                                <DesktopDatePicker label="Remojo" value={dayjs(remojo)} onChange={(newValue) => setRemojo((newValue.$d).toDateString())}
                                />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es-mx'>
                                <DesktopDatePicker label="Dividido" value={dayjs(dividido)} onChange={(newValue) => setDividido((newValue.$d).toDateString())}
                                />
                            </LocalizationProvider>
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es-mx'>
                                <DesktopDatePicker label="Entrega" value={dayjs(entrega)} onChange={(newValue) => setEntrega((newValue.$d).toDateString())}
                                />
                            </LocalizationProvider>
                            <TextField sx={{ minWidth: "15em" }} id="Type" label="Type" variant="outlined" onChange={handleTipoChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Costo Proceso" label="Costo Proceso" variant="outlined" onChange={handleCostoProcesoChange} />
                            <TextField sx={{ minWidth: "15em" }} select id="Factura Pagada" label="Factura Pagada" defaultValue={false} variant="outlined" onChange={handleFacturaPagadaChange}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} id="Número Factura" label="Número Factura" variant="outlined" onChange={handleNumeroFacturaChange} />
                        </Stack>
                    </Box>
                    <Box sx={{ marginTop: "2em" }}>
                        <TextField id="Observaciones" label="Observaciones" variant="outlined" fullWidth multiline onChange={handleObservacionesChange} />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Button variant="contained" sx={{ maxWidth: "6.5em", marginTop: "2em", marginBottom: "2em" }} onClick={postImportacion} >Aceptar</Button>
                        <Button variant="contained" sx={{ maxWidth: "6.5em", marginTop: "2em", marginBottom: "2em" }} onClick={handleCloseNew} >Cancelar</Button>
                    </Box>
                </Box>
            </Modal>
        </div>
    )
}

export default importaciones