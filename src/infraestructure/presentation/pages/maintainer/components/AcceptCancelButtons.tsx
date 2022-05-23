import * as React from 'react';
import Button from '@mui/material/Button';
import DoneIcon from '@mui/icons-material/Done';
import Stack from '@mui/material/Stack';
import CloseIcon from '@mui/icons-material/Close';

export default function AcceptCancelButtons() {
  return (
    <Stack direction="row" spacing={2}>
      <Button variant="contained" startIcon={<DoneIcon />}>
        Guardar
      </Button>
      <Button variant="outlined" endIcon={<CloseIcon />}>
        Cancelar
      </Button>
    </Stack>
  );
}