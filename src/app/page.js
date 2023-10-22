'use client'

import * as React from 'react';
import styles from './page.module.css'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import Formulas from '../../pages/formulas_tabs/formulas';
import Bitacora_reportes from '../../pages/formulas_tabs/bitacora_reportes';
import Engrases from '../../pages/formulas_tabs/engrases';
import Quimicos_inventario from '../../pages/quimicos_tabs/quimicos_inventario';
import Quimicos_entrada_salida from '../../pages/quimicos_tabs/quimicos_entrada_salida';
import Inventario_pieles from '../../pages/inventario_pieles';
import Importaciones from '../../pages/importaciones';
import Ventas from '../../pages/ventas';

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function Home() {
  const [value, setValue] = React.useState(0);
  const [nestedValue, setNestedValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    setNestedValue(0);
  };

  const handleNestedChange = (event, newValue) => {
    setNestedValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="main tabs" centered>
          <Tab label="Formulas" {...a11yProps(0)} />
          <Tab label="Quimicos" {...a11yProps(1)} />
          <Tab label="Inventario Pieles" {...a11yProps(2)} />
          <Tab label="Importaciones" {...a11yProps(3)} />
          <Tab label="Ventas" {...a11yProps(4)} />
          <Tab label="Maquilas" {...a11yProps(5)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={nestedValue} onChange={handleNestedChange} aria-label="formulas tabs" centered>
            <Tab label="Buscar/Correr" {...a11yProps(0)} />
            <Tab label="Bitacora/Reportes" {...a11yProps(1)} />
            <Tab label="Engrases" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={nestedValue} index={0}>
          <Formulas />
        </CustomTabPanel>
        <CustomTabPanel value={nestedValue} index={1}>
          <Bitacora_reportes />
        </CustomTabPanel>
        <CustomTabPanel value={nestedValue} index={2}>
          <Engrases />
        </CustomTabPanel>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={nestedValue} onChange={handleNestedChange} aria-label="quimicos tabs" centered>
            <Tab label="Inventario Quimicos" {...a11yProps(0)} />
            <Tab label="Entrada/Salida" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={nestedValue} index={0}>
          <Quimicos_inventario />
        </CustomTabPanel>
        <CustomTabPanel value={nestedValue} index={1}>
          <Quimicos_entrada_salida />
        </CustomTabPanel>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        <Inventario_pieles />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        <Importaciones />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        <Ventas />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={5}>
        Item One
      </CustomTabPanel>
    </Box>
  )
}
