import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import SaveAndCancelButtons from '../../../shared/components/SaveAndCancelButtons';
import { Grid } from '@mui/material';
import SelectEntityInput from './SelectEntityInput';
import NewRelationshipInput from './NewRelationshipInput';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { useNodeNames } from '../hooks/useNodeNames';
import { useNeo4jRelationshipFormState } from '../../../../state/hooks/useNeo4jRelationshipFormState';

export function RelationshipForm() {

    const { name, nodeA, nodeB, setName, setNodeA, setNodeB } = useNeo4jRelationshipFormState()
    const { names } = useNodeNames()
    const [formValid, setFormValid] = useState(false)

    useEffect(() => {
        setFormValid(![name, nodeA, nodeB].some(x => x === ''))
    }, [name, nodeA, nodeB])

    const uniquenames = [...new Set(names)]
    const nodeOptions = uniquenames.map(n => ({ id: n, name: n }))

    const handleOnChangePrimaryNode = (value: string) => setNodeA(value)

    const handleOnChangeSecondaryNode = (value: string) => setNodeB(value)

    const handleOnChangeName = (value: string) => setName(value)

    const handleOnSave = () => {

    }

    const handleOnCancel = () => {
        setName('')
        setNodeA('')
        setNodeB('')
    }
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <SelectEntityInput title="Nodo Primario" value={nodeA} options={nodeOptions} onChange={handleOnChangePrimaryNode} />
                </Grid>
                <Grid item xs={2}>
                    <Box sx={{ textAlign: 'center' }}>
                        <ArrowForwardIcon color="success" sx={{ fontSize: 40 }} />
                    </Box>
                </Grid>
                <Grid item xs={4}>
                    <SelectEntityInput title="Nodo Secundario" value={nodeB} options={nodeOptions} onChange={handleOnChangeSecondaryNode} />
                </Grid>
                <Grid item xs={10}>
                    <NewRelationshipInput value={name} onChange={handleOnChangeName} />
                </Grid>
                <Grid item xs={10}>
                    <SaveAndCancelButtons disabled={!formValid} onCancel={handleOnCancel} onSave={handleOnSave} />
                </Grid>
            </Grid>
        </Box>
    )
}