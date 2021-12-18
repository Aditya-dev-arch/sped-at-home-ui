/* eslint-disable */
// material
import React from 'react';
import { Button, Grid, Box, Typography, Divider } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';

const steps = [
    '1', '1',
    '2', '1',
    '2', '1',
    '2', '1',
    '2', '1',
    '2', '3',

];

export default function AssessmentQuestion(props) {
    const theme = useTheme();
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        setOpenModal(props.openModal);
    }, [props.openModal]);
    return (
        <>
            <Box>
                <Box component="img" src={"/static/assets/" + props.icon} style={{ float: 'left', marginRight: '12px', width: '22px' }} />
                <Typography variant="h6" component="h2">
                    {props.type}
                </Typography>
            </Box>
            <Divider sx={{ mt: 2, mb: 3 }} />
            <Box sx={{ width: '100%' }}>
                <Stepper activeStep={5} alternativeLabel>
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel></StepLabel>
                        </Step>
                    ))}
                </Stepper>
                <Box sx={{ height: 200 }}>

                </Box>
                <Divider sx={{ mt: 2, mb: 2 }} />
                <Box style={{height:'30px'}}>
                    <Button
                        variant="contained"
                        to="#"
                        style={{float:'right'}}
                    >
                        {'Next >'}
                    </Button>
                </Box>
            </Box>
        </>
    );
}