import * as React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';

const columns = [
    {
        field: 'concepto',
        headerName: 'Concepto',
        width: 250,
        editable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'unidad',
        headerName: 'Unidad',
        width: 350,
        editable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'seleccion',
        headerName: 'Seleccion',
        width: 350,
        editable: false,
        headerAlign: 'center',
        align: 'center',
    },
    {
        field: 'tipo',
        headerName: 'Tipo',
        width: 450,
        editable: false,
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

function ventas_conceptos() {
    const [rows, setRows] = React.useState([]);
    const [concepto, setConcepto] = React.useState('');
    const [unidad, setUnidad] = React.useState(new Date().toDateString());
    const [seleccion, setSeleccion] = React.useState('');
    const [tipo, setTipo] = React.useState('');

    const [openNew, setOpenNew] = React.useState(false);

    const handleConceptoChange = (event) => {
        setConcepto(event.target.value);
    };

    const handletUnidadChange = (event) => {
        setUnidad(event.target.value);
    };

    const handleSeleccionChange = (event) => {
        setSeleccion(event.target.value);
    };

    const handleTipoChange = (event) => {
        setTipo(event.target.value);
    };


    const handleOpenNew = () => setOpenNew(true);
    const handleCloseNew = () => setOpenNew(false);

    React.useEffect(() => {
        let aux = 1;
        axios
            .get('http://localhost:5555/ventas_conceptos/')
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

    function postConcepto() {

        const data = {
            concepto,
            unidad,
            seleccion,
            tipo,
        }

        console.log(data);

        axios
            .post('http://localhost:5555/ventas_conceptos/', data)
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
                <Button variant="contained" sx={{ minWidth: "15em", marginTop: "2em", marginBottom: "2em" }} onClick={handleOpenNew} >Nuevo Concepto</Button>
            </Box>
            <Modal
                open={openNew}
                onClose={handleCloseNew}
                aria-labelledby="nuevo-concepto"
                aria-describedby="modal-nuevo-concepto"
            >
                <Box sx={style}>
                    <h3>IFORMACION DE CONCEPTO</h3>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Stack spacing={2}>
                            <TextField sx={{ minWidth: "15em" }} id="Concepto" label="Concepto" variant="outlined" onChange={handleConceptoChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Unidad" label="Unidad" variant="outlined" onChange={handletUnidadChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Selección" label="Selección" variant="outlined" onChange={handleSeleccionChange} />
                            <TextField sx={{ minWidth: "15em" }} id="Tipo" label="Tipo" variant="outlined" onChange={handleTipoChange} />
                        </Stack>
                    </Box>
                    <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                        <Button variant="contained" sx={{ maxWidth: "6.5em", marginTop: "2em", marginBottom: "2em" }} onClick={postConcepto}>Aceptar</Button>
                        <Button variant="contained" sx={{ maxWidth: "6.5em", marginTop: "2em", marginBottom: "2em" }} onClick={handleCloseNew} >Cancelar</Button>
                    </Box>
                </Box>
            </Modal>
            <Box>
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

export default ventas_conceptos