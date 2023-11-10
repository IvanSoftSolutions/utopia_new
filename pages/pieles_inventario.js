import React from 'react';
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
        field: 'pallet',
        headerName: 'Pallet',
        type: 'number',
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
        field: 'costoHide',
        headerName: 'Costo Por Piel',
        type: 'number',
        width: 120,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'piezasCosto',
        headerName: 'Piezas x Costo',
        type: 'number',
        width: 120,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'hongo',
        headerName: 'Hongo',
        type: 'boolean',
        width: 120,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'shaved',
        headerName: 'Shaved',
        type: 'boolean',
        width: 120,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'grosor',
        headerName: 'Grosor',
        width: 120,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'lavado',
        headerName: 'Lavado',
        type: 'boolean',
        width: 120,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'rechazados',
        headerName: 'Rechazados',
        type: 'boolean',
        width: 120,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'upoTruck',
        headerName: 'UPO/Truck',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'fecha',
        headerName: 'Fecha',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'evaluador',
        headerName: 'Evaluador',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'modificaciones',
        headerName: 'Modificaciones',
        type: 'boolean',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'evaluado',
        headerName: 'Evaluado',
        type: 'boolean',
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
    const [rows, setRows] = React.useState([]);
    const [articulo, setArticulo] = React.useState('');
    const [color, setColor] = React.useState('');
    const [tipo, setTipo] = React.useState('');
    const [kind, setKind] = React.useState('');
    const [wholesHide, setWholesHide] = React.useState(0);
    const [sides, setSides] = React.useState(0);
    const [shrunkenShoulder, setShrunkenShoulder] = React.useState(0);
    const [doubleButt, setDoubleButt] = React.useState(0);
    const [total, setTotal] = React.useState(0);
    const [grado, setGrado] = React.useState('');
    const [ubicacion, setUbicacion] = React.useState('');
    const [pallet, setPallet] = React.useState(0);
    const [locacion, setLocacion] = React.useState('');
    const [costoHide, setCostoHide] = React.useState(0);
    const [piezasCosto, setPiezasCosto] = React.useState(0);
    const [hongo, setHongo] = React.useState(false);
    const [shaved, setShaved] = React.useState(false);
    const [grosor, setGrosor] = React.useState(false);
    const [lavado, setLavado] = React.useState(false);
    const [rechazados, setRechazados] = React.useState(false);
    const [upoTruck, setUpoTruck] = React.useState('');
    const [fecha, setFecha] = React.useState(new Date().toDateString());
    const [evaluador, setEvaluador] = React.useState('');
    const [observaciones, setObservaciones] = React.useState('');
    const [modificaciones, setModificaciones] = React.useState('');
    const [evaluado, setEvaluado] = React.useState(false);

    const [openNew, setOpenNew] = React.useState(false);

    const handleOpenNew = () => setOpenNew(true);
    const handleCloseNew = () => setOpenNew(false);

    const handleArticuloChange = (event) => {
        setArticulo(event.target.value);
    };

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const handleTipoChange = (event) => {
        setTipo(event.target.value);
    };

    const handleKindChange = (event) => {
        setKind(event.target.value);
    };

    const handleWholesHideChange = (event) => {
        setWholesHide(event.target.value);
    };

    const handleSidesChange = (event) => {
        setSides(event.target.value);
    };

    const handleShrunkenShoulderChange = (event) => {
        setShrunkenShoulder(event.target.value);
    };

    const handleDoubleButtChange = (event) => {
        setDoubleButt(event.target.value);
    };

    const handleTotalChange = (event) => {
        setTotal(event.target.value);
    };

    const handleGradoChange = (event) => {
        setGrado(event.target.value);
    };

    const handleUbicacionChange = (event) => {
        setUbicacion(event.target.value);
    };

    const handlePalletChange = (event) => {
        setPallet(event.target.value);
    };

    const handleLocacionChange = (event) => {
        setLocacion(event.target.value);
    };

    const handleCostoHideChange = (event) => {
        setCostoHide(event.target.value);
    };

    const handlePiezasCostoChange = (event) => {
        setPiezasCosto(event.target.value);
    };

    const handleHongoChange = (event) => {
        setHongo(event.target.value);
    };

    const handleShavedChange = (event) => {
        setShaved(event.target.value);
    };

    const handleGrosorChange = (event) => {
        setGrosor(event.target.value);
    };

    const handleLavadoChange = (event) => {
        setLavado(event.target.value);
    };

    const handleRechazadosChange = (event) => {
        setRechazados(event.target.value);
    };

    const handleUpoTruckChange = (event) => {
        setUpoTruck(event.target.value);
    };

    const handleEvaluadorChange = (event) => {
        setEvaluador(event.target.value);
    };

    const handleModificacionesChange = (event) => {
        setModificaciones(event.target.value);
    };

    const handleEvaluadoChange = (event) => {
        setEvaluado(event.target.value);
    };

    const handleObservacionesChange = (event) => {
        setObservaciones(event.target.value);
    };

    React.useEffect(() => {
        let aux = 1;
        axios
            .get('http://localhost:5555/pieles_inventario/')
            .then((response) => {
                console.log(response.data.data);
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

    function postPallet() {

        const data = {
            articulo,
            color,
            tipo,
            kind,
            wholesHide,
            sides,
            shrunkenShoulder,
            doubleButt,
            total,
            grado,
            ubicacion,
            pallet,
            locacion,
            costoHide,
            piezasCosto,
            hongo,
            shaved,
            grosor,
            lavado,
            rechazados,
            upoTruck,
            fecha,
            evaluador,
            observaciones,
            modificaciones,
            evaluado,
        }

        console.log(data);

        axios
            .post('http://localhost:5555/pieles_inventario/', data)
            .then((response) => {
                console.log(response.data.data);
                // setOpenNew(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }

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
                            <TextField sx={{ minWidth: "15em" }} id="Artículo" label="Artículo" variant="outlined" onChange={handleArticuloChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Color" label="Color" variant="outlined" onChange={handleColorChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Tipo" label="Tipo" variant="outlined" onChange={handleTipoChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Kind" label="Kind" variant="outlined" onChange={handleKindChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Wholes Hide" label="Wholes Hide" variant="outlined" onChange={handleWholesHideChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Sides" label="Sides" variant="outlined" onChange={handleSidesChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Shrunken Shoulder" label="Shrunken Shoulder" variant="outlined" onChange={handleShrunkenShoulderChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Double Butt" label="Double Butt" variant="outlined" onChange={handleDoubleButtChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Total" label="Total" variant="outlined" onChange={handleTotalChange} />
                        </Stack>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Grado" label="Grado" variant="outlined" onChange={handleGradoChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Ubicación" label="Ubicación" variant="outlined" onChange={handleUbicacionChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Pallet" label="Pallet" variant="outlined" onChange={handlePalletChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Locación" label="Locación" variant="outlined" onChange={handleLocacionChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Costo por Piel" label="Costo por Piel" variant="outlined" onChange={handleCostoHideChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Piezas x Costo" label="Piezas x Costo" variant="outlined" onChange={handlePiezasCostoChange} />
                            <TextField sx={{ minWidth: "15em" }} select id="Hongo" label="Hongo" defaultValue={false} variant="outlined" onChange={handleHongoChange}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Shaved" label="Shaved" defaultValue={false} variant="outlined" onChange={handleShavedChange}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} id="Grosor" label="Grosor" variant="outlined" onChange={handleGrosorChange} />
                        </Stack>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} select id="Lavado" label="Lavado" defaultValue={false} variant="outlined" onChange={handleLavadoChange}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Rechazados" label="Rechazados" defaultValue={false} variant="outlined" onChange={handleRechazadosChange}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} id="UPO/Truck" label="UPO/Truck" variant="outlined" onChange={handleUpoTruckChange} />
                            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale='es-mx'>
                                <DesktopDatePicker label="Fecha" value={dayjs(fecha)} onChange={(newValue) => setFecha((newValue.$d).toDateString())}
                                />
                            </LocalizationProvider>
                            <TextField sx={{ minWidth: "15em" }} id="Evaluador" label="Evaluador" variant="outlined" onChange={handleEvaluadorChange} />
                            <TextField sx={{ minWidth: "15em" }} select id="Modificaciones" label="Modificaciones" defaultValue={false} variant="outlined" onChange={handleModificacionesChange}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                            <TextField sx={{ minWidth: "15em" }} select id="Evaluado" label="Evaluado" defaultValue={false} variant="outlined" onChange={handleEvaluadoChange}>
                                <MenuItem value={true}> Si </MenuItem>
                                <MenuItem value={false}> No </MenuItem>
                            </TextField>
                        </Stack>
                    </Box>
                    <Box sx={{ marginTop: "2em" }}>
                        <TextField id="Observaciones" label="Observaciones" variant="outlined" fullWidth multiline onChange={handleObservacionesChange} />
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Button variant="contained" sx={{ maxWidth: "6.5em", marginTop: "2em", marginBottom: "2em" }} onClick={postPallet}>Aceptar</Button>
                        <Button variant="contained" sx={{ maxWidth: "6.5em", marginTop: "2em", marginBottom: "2em" }} onClick={handleCloseNew} >Cancelar</Button>
                    </Box>

                </Box>
            </Modal>
        </div>
    )
}

export default inventario_pieles