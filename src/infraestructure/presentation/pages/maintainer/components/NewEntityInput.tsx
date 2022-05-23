import React from 'react';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

export default function NewEntityInput() {
  const [name, setName] = React.useState('Nestjs Framework');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <FormControl fullWidth>
        <TextField
          id="outlined-name"
          label="Nueva entidad"
          value={name}
          placeholder="Ingrese el nombre de la entidad"
          onChange={handleChange}
        />
      </FormControl>
  );
}
