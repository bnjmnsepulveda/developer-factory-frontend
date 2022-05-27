import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import SelectNodeInput from './SelectNodeInput';
import NameEntityInput from './NameEntityInput';
import SelectLabelInput from './SelectLabelInput';
import SaveAndCancelButtons from '../../../shared/components/SaveAndCancelButtons';
import { useNeo4jFormState } from '../../../../state/hooks/useNeo4jFormState';

export default function Neo4jNodeForm() {

  const { node, nodeName, nodeLabels, setNode, setNodeName, setNodeLabels } = useNeo4jFormState()
  const [formValid, setFormValid] = useState(false)

  const handleOnNameChange = (name: string) => {
    setNodeName(name)
  }

  const handleOnLabelsChange = (values: string[]) => {
    setNodeLabels(values)
  }

  const handleOnSave = () => {
    if (formValid) {
      const data = {
        node,
        nodeName,
        nodeLabels
      }
      console.log('Save node', data)
    }
  }

  const handleOnCancel = () => {
    setNode('')
    setNodeName('')
    setNodeLabels([])
  }

  useEffect(() => {
    setFormValid(![node, nodeName].some(x => x === ''))
  }, [node, nodeName, nodeLabels])


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
          <SaveAndCancelButtons disabled={!formValid} onSave={handleOnSave} onCancel={handleOnCancel} />
        </Grid>
      </Grid>
    </Box>
  )

}
