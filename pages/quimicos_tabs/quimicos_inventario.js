import { useEffect, useState } from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
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
        field: 'nombre',
        headerName: 'Nombre',
        width: 200,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'productor',
        headerName: 'Productor',
        width: 200,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'presentacion',
        headerName: 'Presentación',
        width: 110,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'cantidad',
        headerName: 'Cantidad',
        type: 'number',
        width: 150,
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
        valueFormatter: (params) => {
            if (params.value == null) {
                return '';
            }
            return `${params.value.toLocaleString()} kg`;
        },
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
        width: 125,
        sortable: false,
        headerAlign: 'center',
        align: 'center',
        valueGetter: (params) => params.row.cantidad * params.row.precio
    },
    {
        field: 'divisa',
        headerName: 'Divisa',
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
    width: "20em",
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
    textAlign: "center"
};

function Quimicos_inventario() {
    const [rows, setRows] = useState([]);
    const [nombre, setNombre] = useState('');
    const [productor, setProductor] = useState('');
    const [presentacion, setPresentacion] = useState('');
    const [cantidad, setCantidad] = useState(0);
    const [peso, setPeso] = useState(0);
    const [precio, setPrecio] = useState(0);
    const [divisa, setDivisa] = useState('');
    const [quimico, setQuimico] = useState('');
    const [addCantidad, setAddCantidad] = useState(0);

    const [openNew, setOpenNew] = useState(false);
    const [openAdd, setOpenAdd] = useState(false);

    const handleOpenNew = () => setOpenNew(true);
    const handleCloseNew = () => setOpenNew(false);

    const handleOpenAdd = () => setOpenAdd(true);
    const handleCloseAdd = () => setOpenAdd(false);

    const handleNombreChange = (event) => {
        setNombre(event.target.value);
    };

    const handleProductorChange = (event) => {
        setProductor(event.target.value);
    };

    const handlePresentacionChange = (event) => {
        setPresentacion(event.target.value);
    };

    const handleCantidadChange = (event) => {
        setCantidad(event.target.value);
    };

    const handlePesoChange = (event) => {
        setPeso(event.target.value);
    };

    const handlePrecioChange = (event) => {
        setPrecio(event.target.value);
    };

    const handleDivisaChange = (event) => {
        setDivisa(event.target.value);
    };

    const handleQuimicoChange = (event) => {
        setQuimico(event.target.value);
    };

    const handleAddCantidadChange = (event) => {
        setAddCantidad(event.target.value);
    };

    useEffect(() => {
        let aux = 1;
        axios
            .get('https://utopia-new-api.onrender.com/quimico_inventario/')
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

    function postQuimico() {

        const data = {
            nombre,
            productor,
            presentacion,
            cantidad,
            peso,
            precio,
            divisa
        }

        console.log(data);

        axios
            .post('https://utopia-new-api.onrender.com/quimico_inventario/', data)
            .then((response) => {
                // console.log(response.data.data);
                // setOpenNew(false);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function postAddQuimico() {

        const data = {
            nombre: quimico,
            cantidad: rows.find(x => x.nombre === quimico).cantidad + +addCantidad
        }

        console.log(data);

        axios
            .put('https://utopia-new-api.onrender.com/quimico_inventario/', data)
            .then((response) => {
                // console.log(response.data.data);
                setOpenAdd(false);
            })
            .catch((error) => {
                console.log(error);
            })

        const data2 = {
            nombre: quimico,
            cantidad: addCantidad,
            fecha: new Date().toDateString(),
            entradaSalida: 'Entrada'
        }

        console.log(data2);

        axios
            .post('https://utopia-new-api.onrender.com/quimico_bitacora_in/', data2)
            .then((response) => {
                // console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })


    }

    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "space-around" }} >
                <Button variant="contained" sx={{ minWidth: "15em", marginTop: "2em", marginBottom: "2em" }} onClick={handleOpenNew} >Nuevo Quimico</Button>
                <Button variant="contained" sx={{ minWidth: "15em", marginTop: "2em", marginBottom: "2em" }} onClick={handleOpenAdd} >Agregar a existente</Button>
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
                aria-labelledby="nuevo-quimico"
                aria-describedby="modal-nuevo-quimico"
            >
                <Box sx={style}>
                    <h3>INFORMACION</h3>
                    <Stack spacing={2}>
                        <TextField sx={{ minWidth: "15em" }} id="Nombre" label="Nombre" variant="outlined" onChange={handleNombreChange} />
                        <TextField sx={{ minWidth: "15em" }} id="Productor" label="Productor" variant="outlined" onChange={handleProductorChange} />
                        <TextField sx={{ minWidth: "15em" }} id="Presentacion" label="Presentacion" variant="outlined" onChange={handlePresentacionChange} />
                        <TextField sx={{ minWidth: "15em" }} id="Cantidad" label="Cantidad" variant="outlined" onChange={handleCantidadChange} />
                        <TextField sx={{ minWidth: "15em" }} id="Peso" label="Peso" variant="outlined" onChange={handlePesoChange} />
                        <TextField sx={{ minWidth: "15em" }} id="Precio" label="Precio" variant="outlined" onChange={handlePrecioChange} />
                        <TextField sx={{ minWidth: "15em" }} id="Divisa" label="Divisa" variant="outlined" onChange={handleDivisaChange} />
                    </Stack>
                    <Button variant="contained" sx={{ minWidth: "6.5em", marginTop: "2em", marginBottom: "2em", marginRight: "1em" }} onClick={postQuimico} >Aceptar</Button>
                    <Button variant="contained" sx={{ minWidth: "6.5em", marginLeft: "1em" }} onClick={handleCloseNew} >Cancelar</Button>
                </Box>
            </Modal>
            <Modal
                open={openAdd}
                onClose={handleCloseAdd}
                aria-labelledby="agregar-existente"
                aria-describedby="modal-agregar-existente"
            >
                <Box sx={style}>
                    <h3>AGREGAR A INVENTARIO</h3>
                    <Stack spacing={2}>
                        <FormControl>
                            <InputLabel id="quimico-label">Quimico</InputLabel>
                            <Select
                                labelId="quimico-label"
                                id="quimico"
                                value={quimico}
                                label="quimico"
                                onChange={handleQuimicoChange}
                                sx={{ minWidth: "15em" }}
                            >
                                {rows.map((item) => (
                                    <MenuItem key={item.id} value={item.nombre}>{item.nombre}</MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                        <TextField sx={{ minWidth: "15em" }} id="quimico-cantidad" label="Cantidad" variant="outlined" onChange={handleAddCantidadChange} />
                    </Stack>
                    <Button variant="contained" sx={{ minWidth: "6.5em", marginTop: "2em", marginBottom: "2em", marginRight: "1em" }} onClick={postAddQuimico} >Aceptar</Button>
                    <Button variant="contained" sx={{ minWidth: "6.5em", marginLeft: "1em" }} onClick={handleCloseAdd} >Cancelar</Button>
                </Box>
            </Modal>
        </div>
    )
}

export default Quimicos_inventario