import React, { useState } from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import SelectNodeInput from './SelectNodeInput';
import NameEntityInput from './NameEntityInput';
import SelectLabelInput from './SelectLabelInput';
import AcceptCancelButtons from './AcceptCancelButtons';
import { useNeo4jFormState } from '../../../../state/hooks/useNeo4jFormState';

export default function Neo4jNodeForm() {
  
  const { node,nodeName, nodeLabels, setNode, setNodeName, setNodeLabels } = useNeo4jFormState()

  const handleOnNameChange = (name: string) => {
    setNodeName(name)
  }

  const handleOnLabelsChange = (values: string[]) => {
    setNodeLabels(values)
  }


  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          <SelectNodeInput value={node} onChange={setNode} />
        </Grid>
        <Grid item xs={4}>
          <NameEntityInput value={nodeName} onChange={handleOnNameChange} />
        </Grid>
        <Grid item xs={8}>
          <SelectLabelInput value={nodeLabels} onChange={handleOnLabelsChange} />
        </Grid>
        <Grid item xs={8}>
          <AcceptCancelButtons/>
        </Grid>
      </Grid>
    </Box>
  )

}
