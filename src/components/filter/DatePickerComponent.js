import React from 'react';
import TextField from '@mui/material/TextField';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

export default function DatePickerCompontent(props) {


  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label="Move In Date"
        value={props.value}
        onChange={(newValue) => {
          props.onDateChange(newValue);
        }}
        renderInput={(params) => {
          return <TextField {...params} />
        }}
      />
    </LocalizationProvider>
  );
}
