import * as React from 'react'
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
        type: 'string',
        width: 130,
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
        field: 'linea',
        headerName: 'Linea',
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
        type: 'string',
        width: 130,
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
        type: 'string',
        width: 130,
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
    const [rows, setRows] = React.useState([]);

    const [fechaEngrase, setFechaEngrase] = React.useState(new Date());
    const [numeroCarga, setNumeroCarga] = React.useState(0);
    const [cuero, setCuero] = React.useState('');
    const [camionPartida, setCamionPartida] = React.useState(0);
    const [kg, setKg] = React.useState(0);
    const [piezas, setPiezas] = React.useState(0);
    const [material, setMaterial] = React.useState('');
    const [calibre, setCalibre] = React.useState(0);
    const [linea, setLinea] = React.useState('');
    const [color, setColor] = React.useState('');
    const [fechaSecado, setFechaSecado] = React.useState(new Date());
    const [korona, setKorona] = React.useState(false);
    const [engraseSeco, setEngraseSeco] = React.useState(false);
    const [escurrir, setEscurrir] = React.useState(false);
    const [desvenado, setDesvenado] = React.useState(false);
    const [bauce, setBauce] = React.useState(false);
    const [vacio, setVacio] = React.useState(false);
    const [taic, setTaic] = React.useState(false);
    const [aereo, setAereo] = React.useState(false);
    const [toggling, setToggling] = React.useState(false);
    const [ablandado, setAblandado] = React.useState(false);
    const [pulido, setPulido] = React.useState(false);
    const [abatanado, setAbatanado] = React.useState(false);
    const [vacio2, setVacio2] = React.useState(false);
    const [pistolas, setPistolas] = React.useState(false);
    const [roller, setRoller] = React.useState(false);
    const [finilux, setFinilux] = React.useState(false);
    const [rotoprex, setRotoprex] = React.useState(false);
    const [partido, setPartido] = React.useState(false);
    const [grabado, setGrabado] = React.useState(false);
    const [envioPlanta, setEnvioPlanta] = React.useState(false);
    const [fechaFactura, setFechaFactura] = React.useState(new Date());
    const [numeroFactura, setNumeroFactura] = React.useState('');

    const [openNew, setOpenNew] = React.useState(false);

    const handleOpenNew = () => setOpenNew(true);
    const handleCloseNew = () => setOpenNew(false);

    const handleNumeroCargaChange = (event) => {
        setNumeroCarga(event.target.value);
    };

    const handleCueroChange = (event) => {
        setCuero(event.target.value);
    };

    const handleCamionPartidaChange = (event) => {
        setCamionPartida(event.target.value);
    };

    const handleKgChange = (event) => {
        setKg(event.target.value);
    };

    const handlePiezasChange = (event) => {
        setPiezas(event.target.value);
    };

    const handleMaterialChange = (event) => {
        setMaterial(event.target.value);
    };

    const handleCalibreChange = (event) => {
        setCalibre(event.target.value);
    };

    const handleLineaChange = (event) => {
        setLinea(event.target.value);
    };

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const handleNumeroFacturaChange = (event) => {
        setNumeroFactura(event.target.value);
    };

    const handleKorona = (event) => {
        setKorona(event.target.value);
    };
    const handleEngraseSeco = (event) => {
        setEngraseSeco(event.target.value);
    };
    const handleEscurrir = (event) => {
        setEscurrir(event.target.value);
    };
    const handleDesvenado = (event) => {
        setDesvenado(event.target.value);
    };
    const handleBauce = (event) => {
        setBauce(event.target.value);
    };
    const handleVacio = (event) => {
        setVacio(event.target.value);
    };
    const handleTaic = (event) => {
        setTaic(event.target.value);
    };
    const handleAereo = (event) => {
        setAereo(event.target.value);
    };
    const handleToggling = (event) => {
        setToggling(event.target.value);
    };
    const handleAblandado = (event) => {
        setAblandado(event.target.value);
    };
    const handlePulido = (event) => {
        setPulido(event.target.value);
    };
    const handleAbatanado = (event) => {
        setAbatanado(event.target.value);
    };
    const handleVacio2 = (event) => {
        setVacio2(event.target.value);
    };
    const handlePistolas = (event) => {
        setPistolas(event.target.value);
    };
    const handleRoller = (event) => {
        setRoller(event.target.value);
    };
    const handleFinilux = (event) => {
        setFinilux(event.target.value);
    };
    const handleRotoprex = (event) => {
        setRotoprex(event.target.value);
    };
    const handlePartido = (event) => {
        setPartido(event.target.value);
    };
    const handleGrabado = (event) => {
        setGrabado(event.target.value);
    };
    const handleEnvioPlanta = (event) => {
        setEnvioPlanta(event.target.value);
    };

    React.useEffect(() => {
        let aux = 1;
        axios
            .get('https://utopia-new-api.onrender.com/engrase/')
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

    function postEngrase() {

        const data = {
            fechaEngrase,
            numeroCarga,
            cuero,
            camionPartida,
            kg,
            piezas,
            material,
            calibre,
            linea,
            color,
            fechaSecado,
            korona,
            engraseSeco,
            escurrir,
            desvenado,
            bauce,
            vacio,
            taic,
            aereo,
            toggling,
            ablandado,
            pulido,
            abatanado,
            vacio2,
            pistolas,
            roller,
            finilux,
            rotoprex,
            partido,
            grabado,
            envioPlanta,
            fechaFactura,
            numeroFactura,
        }

        console.log(data);

        axios
            .post('https://utopia-new-api.onrender.com/engrase/', data)
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
                aria-labelledby="nuevo-engrase"
                aria-describedby="modal-nuevo-engrase"
            >
                <Box sx={style}>
                    <h3>IFORMACION DE ENGRASE</h3>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Stack spacing={2}>
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es-mx'>
                                <DesktopDatePicker label="Fecha Engrase" value={dayjs(fechaEngrase)} onChange={(newValue) => setFechaEngrase((newValue.$d).toDateString())}
                                />
                            </LocalizationProvider>
                            {/* <TextField sx={{ minWidth: "15em" }} id="Fecha" label="Fecha Engrase" variant="outlined" onChange={handleFechaEngraseChange} /> */}
                            <TextField sx={{ minWidth: "15em" }} id="Numero Carga" label="Numero Carga" variant="outlined" onChange={handleNumeroCargaChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Cuero" label="Cuero" variant="outlined" onChange={handleCueroChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Camion/Partida" label="Camion/Partida" variant="outlined" onChange={handleCamionPartidaChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Kilogramos" label="Kilogramos" variant="outlined" onChange={handleKgChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Piezas" label="Piezas" variant="outlined" onChange={handlePiezasChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Material" label="Material" variant="outlined" onChange={handleMaterialChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Calibre" label="Calibre" variant="outlined" onChange={handleCalibreChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Línea" label="Línea" variant="outlined" onChange={handleLineaChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Color" label="Color" variant="outlined" onChange={handleColorChange} />
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es-mx'>
                                <DesktopDatePicker label="Fecha Secado" value={dayjs(fechaSecado)} onChange={(newValue) => setFechaSecado((newValue.$d).toDateString())}
                                />
                            </LocalizationProvider>
                        </Stack>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} select id="Korona" label="Korona" defaultValue={false} variant="outlined" onChange={handleKorona}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Engrase Seco" label="Engrase Seco" defaultValue={false} variant="outlined" onChange={handleEngraseSeco}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Escurrir" label="Escurrir" defaultValue={false} variant="outlined" onChange={handleEscurrir}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Desvenado" label="Desvenado" defaultValue={false} variant="outlined" onChange={handleDesvenado}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Bauce" label="Bauce" defaultValue={false} variant="outlined" onChange={handleBauce}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Vacío" label="Vacío" defaultValue={false} variant="outlined" onChange={handleVacio}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="TAIC" label="TAIC" defaultValue={false} variant="outlined" onChange={handleTaic}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Aéreo" label="Aéreo" defaultValue={false} variant="outlined" onChange={handleAereo}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Toggling" label="Toggling" defaultValue={false} variant="outlined" onChange={handleToggling}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Pulido" label="Pulido" defaultValue={false} variant="outlined" onChange={handlePulido}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Abatanado" label="Abatanado" defaultValue={false} variant="outlined" onChange={handleAbatanado}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>

                        </Stack>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} select id="Ablandado" label="Ablandado" defaultValue={false} variant="outlined" onChange={handleAblandado}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Vacío 2" label="Vacío 2" defaultValue={false} variant="outlined" onChange={handleVacio2}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Pistolas" label="Pistolas" defaultValue={false} variant="outlined" onChange={handlePistolas}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Roller" label="Roller" defaultValue={false} variant="outlined" onChange={handleRoller}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Finilux" label="Finilux" defaultValue={false} variant="outlined" onChange={handleFinilux}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Rotoprex" label="Rotoprex" defaultValue={false} variant="outlined" onChange={handleRotoprex}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Partido" label="Partido" defaultValue={false} variant="outlined" onChange={handlePartido}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Grabado" label="Grabado" defaultValue={false} variant="outlined" onChange={handleGrabado}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Envio Planta" label="Envio Planta" defaultValue={false} variant="outlined" onChange={handleEnvioPlanta}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es-mx'>
                                <DesktopDatePicker label="Fecha Factura" value={dayjs(fechaFactura)} onChange={(newValue) => setFechaFactura((newValue.$d).toDateString())}
                                />
                            </LocalizationProvider>
                            <TextField sx={{ minWidth: "15em" }} id="Numero Factura" label="Numero Factura" variant="outlined" onChange={handleNumeroFacturaChange} />

                        </Stack>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Button variant="contained" sx={{ maxWidth: "6.5em", marginTop: "2em", marginBottom: "2em" }} onClick={postEngrase}>Aceptar</Button>
                        <Button variant="contained" sx={{ maxWidth: "6.5em", marginTop: "2em", marginBottom: "2em" }} onClick={handleCloseNew} >Cancelar</Button>
                    </Box>

                </Box>
            </Modal>
        </div>
    )
}

export default engrases