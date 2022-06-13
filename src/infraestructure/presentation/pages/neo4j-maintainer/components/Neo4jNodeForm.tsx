import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import SelectNodeInput from './SelectNodeInput';
import NameEntityInput from './NameEntityInput';
import SelectLabelInput from './SelectLabelInput';
import SaveAndCancelButtons from '../../../shared/components/SaveAndCancelButtons';
import { useNeo4jNodeFormState } from '../../../../state/hooks/useNeo4jNodeFormState';
import { KeyValueInput } from '../../../shared/components/KeyValueInput';
import KeyValuePreview from '../../../shared/components/KeyValuePreview';
import { KeyValueData } from '../dto/key-value-data.dto';
import { createNeo4jNode } from '../../../../../core/application/service/createNeo4jNode';
import swal from 'sweetalert';

export default function Neo4jNodeForm() {

  const { node, nodeName, nodeLabels, nodeProperties, setNode, setNodeName, setNodeLabels, addNodeProperties, resetNodeProperties } = useNeo4jNodeFormState()
  const [formValid, setFormValid] = useState(false)

  const handleOnNameChange = (name: string) => {
    setNodeName(name)
  }

  const handleOnLabelsChange = (values: string[]) => {
    setNodeLabels(values)
  }

  const handleOnKeyValueAdded = (keyValueData: KeyValueData) => {
    addNodeProperties(keyValueData)
  }

  const handleOnSave = async () => {
    
    if (formValid) {

      await createNeo4jNode({
        node,
        name: nodeName,
        labels: nodeLabels,
      })
        .then(() => swal(`Información`, `Nodo Neo4j ${nodeName} Guardado!`, "success"))
        .finally(() => handleOnCancel())

    }
  }

  const handleOnCancel = () => {
    interface Dict<T> {
      [key: string]: T;
    }
    console.log('properties', nodeProperties)

    let dic: Dict<string> = {
      
    }

    setNode('')
    setNodeName('')
    setNodeLabels([])
    resetNodeProperties()
  }

  useEffect(() => {
    setFormValid(![node, nodeName].some(x => x === ''))
  }, [node, nodeName, nodeLabels])



  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <SelectNodeInput value={node} onChange={setNode} />
        </Grid>
        <Grid item xs={6}>
          <NameEntityInput value={nodeName} onChange={handleOnNameChange} />
        </Grid>
        <Grid item xs={12}>
          <SelectLabelInput value={nodeLabels} onChange={handleOnLabelsChange} />
        </Grid>
        {/* <Grid item xs={12}>
          <KeyValueInput onAddKeyValue={handleOnKeyValueAdded} />
        </Grid>
        <Grid item xs={12} >
          <KeyValuePreview keyValueData={nodeProperties} />
        </Grid> */}
        <Grid item xs={8}>
          <SaveAndCancelButtons disabled={!formValid} onSave={handleOnSave} onCancel={handleOnCancel} />
        </Grid>
      </Grid>
    </Box>
  )

}
