import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { InputLabel } from '@mui/material';
import { MdAttachMoney} from 'react-icons/md'

function valuetext(value) {
  return `$${value}°C`;
}

export default function RangeSlider(props) {
  return (
      <Box sx={{ width: 200 }} style={{ display: 'flex',flexDirection:'column', alignItems: 'center' }}>
          <InputLabel id="filterlables"><MdAttachMoney style={{color:"var(--base)"}} />Price Range</InputLabel>
        <Slider
            color="secondary"
            min={5000}
            max={20000}
            getAriaLabel={() => 'Price Range'}
            value={props.value}
            onChange={(event, newValue)=>props.handleChange(newValue)}
            valueLabelDisplay="auto"
            getAriaValueText={valuetext}
      />
    </Box>
  );
}
