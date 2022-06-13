import React from 'react';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';
import { CustomInputProps } from '../../../shared/utils/CustomInputProps';

interface Props extends CustomInputProps<string> {

}
export default function NewRelationshipInput({ value, onChange }: Props) {

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => onChange(event.target.value);

  return (
    <FormControl fullWidth>
      <TextField
        id="outlined-name"
        label="Nueva relación"
        value={value? value.replaceAll(' ', '_') : ''}
        placeholder="Ingrese el nombre de la relacion"
        onChange={handleChange}
        inputProps={{ style: { textTransform: "uppercase" } }}
      />
    </FormControl>
  );
}
