/* eslint-disable */
// material
import React from 'react';
import Carousel from 'react-material-ui-carousel'
import { Card, Grid, Box, Typography, Button, Modal, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import closeOutline from '@iconify/icons-eva/close-outline';
import { Link as RouterLink } from 'react-router-dom';


export default function AssessmentInfo(props) {
    const theme = useTheme();
    const [openModal, setOpenModal] = useState(false);
    useEffect(() => {
        setOpenModal(props.openModal);
    }, [props.openModal]);
    return (
        <Modal
            open={openModal}
            //onClose={props.toggleInfoAssessment}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <Box className='sped_modal'>
                <Typography id="modal-modal-title" className="sped_modal_title" variant="h5" component="h2">
                    Assessment Instructions
                    <Icon icon={closeOutline} onClick={props.toggleInfoAssessment} />
                </Typography>
                <Typography variant="body2" noWrap>
                    <ul>
                        <li>There are four sections of Assessment</li>
                        <li>You need to complete it by 7 Days</li>
                    </ul>
                </Typography>

                <Card className="sped_modal_description" sx={{ background: theme.palette.primary.lighter }}>
                    <Box sx={{ p: 3 }} dir="ltr">
                        <Carousel
                            stopAutoPlayOnHover={true}
                            autoPlay={true}
                            next={(next, active) => console.log(`we left ${active}, and are now at ${next}`)}
                            prev={(prev, active) => console.log(`we left ${active}, and are now at ${prev}`)}
                        >
                            <Paper className='sped_assessment_info'>
                                <Typography variant="h6" noWrap>
                                    1. Questionnaire
                                </Typography>
                                <Grid container className='sped_info_box'>
                                    <Grid item xs={4} sm={4} md={4}>
                                        <Box component="img" src="/static/assets/assess_info1.png" />
                                    </Grid>
                                    <Grid item xs={8} sm={8} md={8} className='sped_info'>
                                        <Typography variant="body2">
                                            Answer the Basic Questions, Which help us to know more about the Child
                                        </Typography>
                                        <center><Box sx={{ mt: 2 }} component="img" src="/static/assets/assess_info_title1.png" /></center>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper className='sped_assessment_info'>
                                <Typography variant="h6" noWrap>
                                    2. Play with Worksheet
                                </Typography>
                                <Grid container className='sped_info_box'>
                                    <Grid item xs={4} sm={4} md={4}>
                                        <Box component="img" src="/static/assets/assess_info2.png" />
                                    </Grid>
                                    <Grid item xs={8} sm={8} md={8} className='sped_info'>
                                        <Typography variant="body2">
                                        Child will play with Worksheet as a part of Assessment
                                        </Typography>
                                        <center><Box sx={{ mt: 2 }} component="img" src="/static/assets/assess_info_title3.png" /></center>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper className='sped_assessment_info'>
                                <Typography variant="h6" noWrap>
                                    3. Meet Our Coach
                                </Typography>
                                <Grid container className='sped_info_box'>
                                    <Grid item xs={4} sm={4} md={4}>
                                        <Box component="img" src="/static/assets/assess_info3.png" />
                                    </Grid>
                                    <Grid item xs={8} sm={8} md={8} className='sped_info'>
                                        <Typography variant="body2">
                                        Our Coach will Meet Parent & Child for Better Understanding
                                        </Typography>
                                        <center><Box sx={{ mt: 2 }} component="img" src="/static/assets/assess_info_title3.png" /></center>
                                    </Grid>
                                </Grid>
                            </Paper>
                            <Paper className='sped_assessment_info'>
                                <Typography variant="h6" noWrap>
                                    4. Child Report
                                </Typography>
                                <Grid container className='sped_info_box'>
                                    <Grid item xs={4} sm={4} md={4}>
                                        <Box component="img" src="/static/assets/assess_info4.png" />
                                    </Grid>
                                    <Grid item xs={8} sm={8} md={8} className='sped_info'>
                                        <Typography variant="body2">
                                            Our Coach willl connect you to explain the Child Report
                                        </Typography>
                                        <center><Box sx={{ mt: 2 }} component="img" src="/static/assets/assess_info_title1.png" /></center>
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Carousel>
                        <Box sx={{ textAlign: 'right', mt: 1 }}>
                            <Button
                                variant="contained"
                                component={RouterLink}
                                to="/dashboard/assessment_questionnaire"
                            >
                                Start your assessment
                            </Button>
                        </Box>
                    </Box>

                </Card>
            </Box>
        </Modal>
    );
}