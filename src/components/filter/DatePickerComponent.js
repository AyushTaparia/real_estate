import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import './filter.css';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerCompontent(props) {

  const color = props.theme ? 'white' : 'black';

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        className='datePickerlabel'
        label="Move In Date"
        value={props.value}
        onChange={(newValue) => {
        props.onDateChange(newValue);
        }}
        renderInput={(params) => {
          return <TextField
            sx={{
            svg: { color },
            input: { color },
            label: { color },
            borderColor: {color}
            }}
            {...params} />
        }}
      />
    </LocalizationProvider>
  );
}
