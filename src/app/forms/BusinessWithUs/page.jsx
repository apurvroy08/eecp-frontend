

"use client"

import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import Businesswithdoctors from './forms/Businesswithdoctor';
import Businesswithbusinessman from './forms/Businessiwthbusinessman';


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



export default function BusinessWithUs({ onClose }) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };


  return (
    <Box sx={{ width: '100%' }}>
      <Box fullWidth sx={{ display: "flex", justifyContent: "end" }}>
        {onClose && (
          <Button
            onClick={onClose}
            sx={{
              "&:hover": {
                backgroundColor: "transparent",
              },
            }}
          >
            <HighlightOffIcon sx={{ fontSize: "32px", color: "#9d3892" }} />
          </Button>
        )}
      </Box>
      <Typography sx={{ fontSize: "24px", textAlign: "center" }}>
        Business With Us
      </Typography>
      <Typography sx={{ textAlign: "center", fontSize: "13px", padding: "10px 0px 38px" }}>
        Connects you with top EECP therapy doctors, providing non-invasive treatment for heart conditions. Enhance your cardiovascular health with expert care and innovative therapy solutions.
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
         <Tab label=" Doctor " {...a11yProps(0)} />

          <Tab label="partner" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
       <Businesswithdoctors/>
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
    
      <Businesswithbusinessman/>
      </CustomTabPanel>
    </Box>
  );
}
