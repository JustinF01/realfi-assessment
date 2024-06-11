'use client'

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import useMainContext from '@/hooks/useMain.context';
import Table from '@/components/charts/table/Table.component';
import VisualisationsTab from './VisualisationTab/VisualisationTab.component';
import { ButtonGroup, Typography, Button } from '@mui/material';

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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);
  const {users, dispatch} = useMainContext();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleFilter = (type) => {
    switch(type) {
        case 'male':
            fetch('/data.json')
                .then(response => response.json())
                .then(json => {
                    const users = json.data;
                    const update = users.filter((user) => user.Gender === 'Male');
                    dispatch({type: 'setUsers', payload: update});
                    
                })
            break;
           
        case 'female':
            fetch('/data.json')
                .then(response => response.json())
                .then(json => {
                    const users = json.data;
                    const update = users.filter((user) => user.Gender === 'Female');
                    dispatch({type: 'setUsers', payload: update});
                    
                })
            break;
        default:
            fetch('/data.json')
                .then(response => response.json())
                .then(json => {
                    dispatch({type: 'setUsers', payload: json.data});
                })
            break;
    }

  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingRight: '10px' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Table" {...a11yProps(0)} />
          <Tab label="Overview" {...a11yProps(1)} />
        </Tabs>
        <Box>
            <ButtonGroup>
                <Button type="button" onClick={() => handleFilter('male')}>Male</Button>
                <Button type="button" onClick={() => handleFilter('female')}>Female</Button>
                <Button type="button" onClick={() => handleFilter('remove')}>All</Button>
            </ButtonGroup>
          </Box>
      </Box>
      <Box sx={{
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
      <CustomTabPanel value={value} index={0}>
        <Typography component="h2" variant='h6'>All Users</Typography>
        <Table />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        <VisualisationsTab />
      </CustomTabPanel>
      </Box>
    </Box>
  );
}
