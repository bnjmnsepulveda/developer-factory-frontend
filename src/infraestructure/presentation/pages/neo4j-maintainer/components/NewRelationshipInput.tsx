import React from 'react';
import TextField from '@mui/material/TextField';
import { FormControl } from '@mui/material';

export default function NewRelationshipInput() {
  const [name, setName] = React.useState('LANGUAGE_TO_DOMAIN');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <FormControl fullWidth>
        <TextField
          id="outlined-name"
          label="Nueva relación"
          value={name}
          placeholder="Ingrese el nombre de la relacion"
          onChange={handleChange}
        />
      </FormControl>
  );
}
