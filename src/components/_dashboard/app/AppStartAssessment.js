/* eslint-disable */
// material
import { Card, CardHeader, Box, Typography, Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import AssessmentInfo from '../../_assessment/AssessmentInfo';
import { useState } from 'react';
export default function AppStartAssessment() {
    const theme = useTheme();
    const[openModal, setOpenModal] = useState(false);
    const toggleInfoAssessment = () => {
        setOpenModal(oldOpen => !oldOpen);
    }   
    return (
        <Card>
            <CardHeader title="Assessment" />
            <Box sx={{ p: 3 }} dir="ltr">
                <Card sx={{ boxShadow: 0, background: theme.palette.primary.lighter, textAlign: 'center' }}>
                    <Box sx={{ p: 3 }} dir="ltr">
                        <center><Box component="img" src="/static/assets/assesment.png" /></center>
                        <Typography variant="body2" sx={{ mt: 3}} noWrap>
                            You have not started your assesments yet.<br />
                            <strong>Lets Get Started!</strong>
                        </Typography>
                        <Button
                            sx={{ textAlign: 'right', mt: 3 }}
                            variant="contained"
                            onClick={toggleInfoAssessment}
                            to="#"
                        >
                            Start your assessment
                        </Button>
                    </Box>

                </Card>
            </Box>
            <AssessmentInfo openModal={openModal} toggleInfoAssessment={toggleInfoAssessment} />
        </Card>
    );
}