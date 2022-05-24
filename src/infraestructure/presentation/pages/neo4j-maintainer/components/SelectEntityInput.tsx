import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectEntityInput() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Seleccionar Nodo</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Entidad"
          onChange={handleChange}
        >
          <MenuItem value={10}>Nestjs</MenuItem>
          <MenuItem value={20}>Java</MenuItem>
          <MenuItem value={30}>Python</MenuItem>
          <MenuItem value={4}>Linux</MenuItem>
        </Select>
      </FormControl>
  );
}
