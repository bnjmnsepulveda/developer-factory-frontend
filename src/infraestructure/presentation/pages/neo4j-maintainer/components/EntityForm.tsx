import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SelectNodeInput from './SelectNodeInput';
import NewEntityInput from './NewEntityInput';
import SelectLabelInput from './SelectLabelInput';
import AcceptCancelButtons from './AcceptCancelButtons';
import { Container, Grid } from '@mui/material';

export default function StateTextFields() {
  const [name, setName] = React.useState('Cat in the Hat');
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SelectNodeInput />
        </Grid>
        <Grid item xs={4}>
          <NewEntityInput/>
        </Grid>
        <Grid item xs={8}>
          <SelectLabelInput/>
        </Grid>
        <Grid item xs={8}>
          <AcceptCancelButtons/>
        </Grid>
      </Grid>
    </Box>
  )

}
