import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import { CustomInputProps } from '../../../shared/utils/CustomInputProps';



export default function NameEntityInput(props: CustomInputProps<string>) {
 
  const { value, onChange } = props;

  const handleOnChange = (event: any) => {
    onChange(event.target.value)
  }

  return (
    <FormControl fullWidth>
        <TextField
          id="outlined-name"
          label="Nombre"
          value={value}
          placeholder="Ingrese el nombre del nodo"
          onChange={handleOnChange}
        />
      </FormControl>
  );
}
