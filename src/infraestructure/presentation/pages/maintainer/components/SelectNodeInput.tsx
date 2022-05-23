import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function SelectNodeInput() {
  const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };

  return (
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Tipo entidad</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Entidad"
          onChange={handleChange}
        >
          <MenuItem value={10}>Roadmap</MenuItem>
          <MenuItem value={20}>Language</MenuItem>
          <MenuItem value={30}>Framework</MenuItem>
          <MenuItem value={4}>Knowledge</MenuItem>
          <MenuItem value={5}>Library</MenuItem>
          <MenuItem value={6}>Youtube Resource</MenuItem>
          <MenuItem value={7}>Course</MenuItem>
        </Select>
      </FormControl>
  );
}
