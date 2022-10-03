import { InputLabel, MenuItem, Select } from '@mui/material'
import {FormControl} from '@mui/material'
import React from 'react'
import './filter.css'

export default function Filter(prop) {
  const theme = prop.theme && 'darkTheme';
  return (
    <div className="filterOpts" >
      <FormControl variant="standard" sx={{minWidth: 150 }}>
        <InputLabel id="filterlables" className={`filterlables ${theme}`}>{prop.symbol}{prop.place}</InputLabel>
        <Select
        labelId="filterlables"
        id="loc"
        className='loc'
        value={prop.value}
        label="filterlables"
        onChange={(e)=>prop.handleChange(e.target.value)}
        >
          <MenuItem value="" className="menuList">
            <em>None</em>
          </MenuItem>
        {
          prop.list.map(item =><MenuItem value={item} className="menuList">{item}</MenuItem>)
        }
        </Select>
      </FormControl> 
    </div>
  )
}


