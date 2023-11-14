import * as React from 'react'
import axios from 'axios';
import dayjs from 'dayjs';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers/DesktopDatePicker';

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
        width: 135,
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
        field: 'piezas',
        headerName: 'Piezas',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'wholeHidesSides',
        headerName: 'Whole Hides/Sides ',
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
        field: 'unidad',
        headerName: 'Unidad',
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
        field: 'totalPesos',
        headerName: 'Total MXN',
        type: 'number',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'tasaCambio',
        headerName: 'Tasa De Cambio',
        type: 'number',
        width: 130,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'totalUsd',
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

function ventas_ventas() {
    const [rows, setRows] = React.useState([]);
    const [folio, setFolio] = React.useState('');
    const [fecha, setFecha] = React.useState(new Date().toDateString());
    const [cliente, setCliente] = React.useState('');
    const [concepto, setConcepto] = React.useState('');
    const [piezas, setPiezas] = React.useState(0);
    const [wholeHidesSides, setWholeHidesSides] = React.useState('');
    const [cantidad, setCantidad] = React.useState(0);
    const [unidad, setUnidad] = React.useState('');
    const [precio, setPrecio] = React.useState(0);
    const [totalPesos, setTotalPesos] = React.useState(0);
    const [tasaCambio, setTasaCambio] = React.useState(0);
    const [totalUsd, setTotalUsd] = React.useState(0);
    const [observaciones, setObservaciones] = React.useState('');

    const [openNew, setOpenNew] = React.useState(false);

    const handleOpenNew = () => setOpenNew(true);
    const handleCloseNew = () => setOpenNew(false);

    const handleFolioChange = (event) => {
        setFolio(event.target.value);
    };

    const handleClienteChange = (event) => {
        setCliente(event.target.value);
    };

    const handleConceptoChange = (event) => {
        setConcepto(event.target.value);
    };

    const handlePiezasChange = (event) => {
        setPiezas(event.target.value);
    };

    const handleWholeHidesSidesChange = (event) => {
        setWholeHidesSides(event.target.value);
    };

    const handleCantidadChange = (event) => {
        setCantidad(event.target.value);
    };

    const handleUnidadChange = (event) => {
        setUnidad(event.target.value);
    };

    const handlePrecioChange = (event) => {
        setPrecio(event.target.value);
    };

    const handleTotalPesosChange = (event) => {
        setTotalPesos(event.target.value);
    };

    const handleTasaCambioChange = (event) => {
        setTasaCambio(event.target.value);
    };

    const handleTotalUsdChange = (event) => {
        setTotalUsd(event.target.value);
    };

    const handleObservacionesChange = (event) => {
        setObservaciones(event.target.value);
    };

    React.useEffect(() => {
        let aux = 1;
        axios
            .get('https://utopia-new-api.onrender.com/ventas_ventas/')
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

    function postVenta() {

        const data = {
            folio,
            fecha,
            cliente,
            concepto,
            piezas,
            wholeHidesSides,
            cantidad,
            unidad,
            precio,
            totalPesos,
            tasaCambio,
            totalUsd,
            observaciones,
        }

        console.log(data);

        axios
            .post('https://utopia-new-api.onrender.com/ventas_ventas/', data)
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
                <Button variant="contained" sx={{ minWidth: "15em", marginTop: "2em", marginBottom: "2em" }} onClick={handleOpenNew} >Nueva Venta</Button>
            </Box>
            <Modal
                open={openNew}
                onClose={handleCloseNew}
                aria-labelledby="nueva-venta"
                aria-describedby="modal-nueva-venta"
            >
                <Box sx={style}>
                    <h3>INFORMACION DE VENTA</h3>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Folio" label="Folio" variant="outlined" onChange={handleFolioChange} />
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es-mx'>
                                <DesktopDatePicker label="Fecha" value={dayjs(fecha)} onChange={(newValue) => setFecha((newValue.$d).toDateString())}
                                />
                            </LocalizationProvider>
                            <TextField sx={{ minWidth: "15em" }} id="Cliente" label="Cliente" variant="outlined" onChange={handleClienteChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Concepto" label="Concepto" variant="outlined" onChange={handleConceptoChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Piezas" label="Piezas" variant="outlined" onChange={handlePiezasChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Whole Hides/Sides" label="Whole Hides/Sides" variant="outlined" onChange={handleWholeHidesSidesChange} />
                        </Stack>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Cantidad" label="Cantidad" variant="outlined" onChange={handleCantidadChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Unidad" label="Unidad" variant="outlined" onChange={handleUnidadChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Precio" label="Precio" variant="outlined" onChange={handlePrecioChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Total MXN" label="Total MXN" variant="outlined" onChange={handleTotalPesosChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Tasa de Cambio" label="Tasa de Cambio" variant="outlined" onChange={handleTasaCambioChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Total USD" label="Total USD" variant="outlined" onChange={handleTotalUsdChange} />
                        </Stack>
                    </Box>
                    <Box sx={{ marginTop: "2em" }}>
                        <TextField id="Observaciones" label="Observaciones" variant="outlined" fullWidth multiline onChange={handleObservacionesChange} />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Button variant="contained" sx={{ maxWidth: "6.5em", marginTop: "2em", marginBottom: "2em" }} onClick={postVenta}>Aceptar</Button>
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

export default ventas_ventas