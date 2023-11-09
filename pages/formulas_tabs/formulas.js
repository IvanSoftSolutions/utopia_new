import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DataGrid, GridToolbar } from '@mui/x-data-grid';


export default function Formulas() {
    const [pallet, setPallet] = React.useState('');
    const [articulo, setArticulo] = React.useState('');
    const [color, setColor] = React.useState('');
    const [peso, setPeso] = React.useState(0);
    const [grosor, setGrosor] = React.useState(0);
    const [material, setMaterial] = React.useState('');
    const [detalles, setDetalles] = React.useState('');
    const fecha = new Date().toDateString();

    const [rows, setRows] = useState([]);
    const [totales, setTotales] = React.useState([]);
    const [quimicosInv, setQuimicosInv] = React.useState([]);

    const handlePalletChange = (event) => {
        setPallet(event.target.value);
    };

    const handleArticleChange = (event) => {
        setArticulo(event.target.value);
    };

    const handleColorChange = (event) => {
        setColor(event.target.value);
    };

    const handlePesoChange = (event) => {
        setPeso(event.target.value);
    };

    const handleGrosorChange = (event) => {
        setGrosor(event.target.value);
    };

    const handleMaterialChange = (event) => {
        setMaterial(event.target.value);
    };

    const handleDetallesChange = (event) => {
        setDetalles(event.target.value);
    };


    function getFormulaRows(nombreFormula) {
        axios
            .get('http://localhost:5555/getformula/' + nombreFormula)
            .then((response) => {
                setRows(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })

        axios
            .get('http://localhost:5555/formulas_totales/' + nombreFormula)
            .then((response) => {
                setTotales(response.data.data);
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })


        let aux = 1;
        axios
            .get('http://localhost:5555/quimico_inventario/')
            .then((response) => {
                response.data.data.forEach(function (element) {
                    element.id = aux;
                    aux++;
                })
                setQuimicosInv(response.data.data);
                console.log(response.data.data);
            })

            .catch((error) => {
                console.log(error);
            })
    }

    function postBitacoraLog() {
        const formula = articulo + color;

        const data = {
            // usuario,
            fecha,
            formula,
            peso,
            grosor,
            material,
            detalles
        }

        console.log(data);

        axios
            .post('http://localhost:5555/bitacora/', data)
            .then((response) => {
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function getCantidades() {
        let cantidades = []

        let totalesKeys = Object.keys(totales[0]);
        let totalesValues = Object.values(totales[0]);

        for (let i = 2; i < totalesKeys.length; i++) {
            let data = {
                nombre: stringFormatter(totalesKeys[i]),
                cantidad: (totalesValues[i] * peso) / 100
            }
            cantidades.push(data);
        }

        return cantidades;

    }

    function updateQuimicoInv() {
        let data = getCantidades();

        for (let i = 0; i < data.length; i++) {
            data[i].cantidad = quimicosInv.find(x => x.nombre === data[i].nombre).cantidad - data[i].cantidad;
        }

        console.log(data);

        axios
            .put('http://localhost:5555/formulas_totales/', data)
            .then((response) => {
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function postQuimicoBitacora() {
        let data = getCantidades();

        for (let i = 0; i < data.length; i++) {
            data[i].fecha = fecha;
            data[i].entradaSalida = 'Salida';
        }

        console.log(data);

        axios
            .post('http://localhost:5555/quimico_bitacora_out/', data)
            .then((response) => {
                console.log(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            })
    }

    function cantidadValueGetter(params) {
        if (params.row.porcentaje === null) {
            return null;
        }
        return (params.row.porcentaje * peso / 100)
    }

    function stringFormatter(nombre) {
        let result = nombre.charAt(0).toUpperCase() + nombre.slice(1);
        result = result.replace(/.{1}$/, ' $&');
        return result;
    }

    const columns = [
        {
            field: 'porcentaje',
            headerName: 'Porcentaje %',
            type: 'number',
            width: 110,
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            valueFormatter: (params) => {
                if (params.value == null) {
                    return '';
                }
                return `${params.value.toLocaleString()} %`;
            },
        },
        {
            field: 'cantidad',
            headerName: 'Cantidad',
            type: 'number',
            width: 110,
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            valueGetter: cantidadValueGetter,
        },
        {
            field: 'producto',
            headerName: 'Producto',
            width: 350,
            sortable: false,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'temp',
            headerName: 'Temp (C°)',
            type: 'number',
            width: 110,
            sortable: false,
            headerAlign: 'center',
            align: 'center',
            valueFormatter: (params) => {
                if (params.value == null) {
                    return '';
                }
                return `${params.value.toLocaleString()} °`;
            },
        },
        {
            field: 'tiempo',
            headerName: 'Tiempo (min)',
            type: 'number',
            width: 110,
            sortable: false,
            headerAlign: 'center',
            align: 'center',
        },
        {
            field: 'cut',
            headerName: '#Cut',
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

    return (
        <div>
            <Box sx={{ display: "flex", justifyContent: "space-around" }}>
                <Stack spacing={2}>
                    <FormControl>
                        <InputLabel id="articulo-label">Articulo</InputLabel>
                        <Select
                            labelId="articulo-label"
                            id="articulo"
                            value={articulo}
                            label="articulo"
                            onChange={handleArticleChange}
                            sx={{ minWidth: "15em" }}
                        >
                            <MenuItem value={'Diva'}>Diva</MenuItem>
                            <MenuItem value={'DoubleButt'}>DoubleButt</MenuItem>
                            <MenuItem value={'DoubleShoulder'}>DoubleShoulder</MenuItem>
                            <MenuItem value={'Shrunken'}>Shrunken</MenuItem>
                            <MenuItem value={'Leon'}>Leon</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="color-label">Color</InputLabel>
                        <Select
                            labelId="color-label"
                            id="color"
                            value={color}
                            label="color"
                            onChange={handleColorChange}
                            sx={{ minWidth: "15em" }}
                        >
                            <MenuItem value={'Brown'}>Brown</MenuItem>
                            <MenuItem value={'Black'}>Black</MenuItem>
                            <MenuItem value={'Natural'}>Natural</MenuItem>
                            <MenuItem value={'Red'}>Red</MenuItem>
                        </Select>
                    </FormControl>
                    <FormControl>
                        <InputLabel id="pallet-label">Pallet</InputLabel>
                        <Select
                            labelId="pallet-label"
                            id="pallet"
                            value={pallet}
                            label="pallet"
                            onChange={handlePalletChange}
                            sx={{ minWidth: "15em" }}
                        >
                            <MenuItem value={10}></MenuItem>
                            <MenuItem value={20}></MenuItem>
                            <MenuItem value={30}></MenuItem>
                        </Select>
                    </FormControl>
                </Stack>
                <Stack spacing={2}>
                    <TextField sx={{ minWidth: "15em" }} id="peso" label="Peso" variant="outlined" onChange={handlePesoChange} />
                    <TextField sx={{ minWidth: "15em" }} id="grosor" label="Grosor" variant="outlined" onChange={handleGrosorChange} />
                    <TextField sx={{ minWidth: "15em" }} id="material" label="Material" variant="outlined" onChange={handleMaterialChange} />
                    <TextField sx={{ minWidth: "15em" }} id="detalles" label="Detalles" variant="outlined" onChange={handleDetallesChange} />
                </Stack>
            </Box>
            <Box sx={{ display: "flex", justifyContent: "space-around" }} >
                <Button variant="contained" sx={{ minWidth: "15em", marginTop: "2em", marginBottom: "2em" }} onClick={() => getFormulaRows(articulo + color)} >Buscar</Button>
                <Button variant="contained" sx={{ minWidth: "15em", marginTop: "2em", marginBottom: "2em" }} onClick={() => {
                    updateQuimicoInv(); postQuimicoBitacora(); postBitacoraLog();
                }} >Correr</Button>
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
        </div>
    )
}
