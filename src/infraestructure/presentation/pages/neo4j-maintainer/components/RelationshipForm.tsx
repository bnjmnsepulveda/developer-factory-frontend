import React from 'react';
import Box from '@mui/material/Box';
import AcceptCancelButtons from './AcceptCancelButtons';
import { Grid } from '@mui/material';
import SelectEntityInput from './SelectEntityInput';
import NewRelationshipInput from './NewRelationshipInput';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export function RelationshipForm() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={4}>
                    <SelectEntityInput />
                </Grid>
                <Grid item xs={2}>
                    <ArrowRightAltIcon/>
                </Grid>
                <Grid item xs={4}>
                <SelectEntityInput />
                </Grid>
                <Grid item xs={10}>
                    <NewRelationshipInput/>
                </Grid>
                <Grid item xs={10}>
                    <AcceptCancelButtons/>
                </Grid>
            </Grid>
        </Box>
    )
}