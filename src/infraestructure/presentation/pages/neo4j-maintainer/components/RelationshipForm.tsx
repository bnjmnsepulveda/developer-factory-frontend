import React from 'react';
import Box from '@mui/material/Box';
import SaveAndCancelButtons from '../../../shared/components/SaveAndCancelButtons';
import { Grid, Typography } from '@mui/material';
import SelectEntityInput from './SelectEntityInput';
import NewRelationshipInput from './NewRelationshipInput';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { getSelectNodeNames } from '../../../../../core/application/service/getSelectNodeNames';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const nodeOptions = getSelectNodeNames()

const handleOnChangePrimaryNode = (e: any) => {

}

const handleOnChangeSecondaryNode = (e: any) => {

}

export function RelationshipForm() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <SelectEntityInput title="Nodo Primario" value='' options={nodeOptions} onChange={handleOnChangePrimaryNode} />
                </Grid>
                <Grid item xs={2}>
                    <Box sx={{ textAlign: 'center' }}>
                        <ArrowForwardIcon color="success" sx={{ fontSize: 40 }} />
                    </Box>
                </Grid> 
                <Grid item xs={4}>
                    <SelectEntityInput title="Nodo Secundario" value='' options={nodeOptions} onChange={handleOnChangeSecondaryNode} />
                </Grid>
                <Grid item xs={10}>
                    <NewRelationshipInput />
                </Grid>
                <Grid item xs={10}>
                    <SaveAndCancelButtons />
                </Grid>
            </Grid>
        </Box>
    )
}