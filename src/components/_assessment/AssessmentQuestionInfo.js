/* eslint-disable */
// material
import React from 'react';
import { Card, Grid, Box, Typography, Button, Modal, Paper } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';
import closeOutline from '@iconify/icons-eva/close-outline';
import Checkbox from '@mui/material/Checkbox';


export default function AssessmentQuestionInfo(props) {
    const theme = useTheme();
    const [openModal, setOpenModal] = useState(false);
    const [disableConfirm, setDisableConfirm] = useState(true);

    const readConfirmation = () => {
        setDisableConfirm(oldValue => !oldValue);
    }
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
                    Questionnaire
                </Typography>
                <Typography variant="body2">
                    Answer the Basic Questions, Which help us to know more about the Child
                </Typography>

                <Card className="sped_modal_description" sx={{ background: theme.palette.primary.lighter }}>
                    <Box sx={{ p: 3 }} dir="ltr">
                        <Grid container sx={{ mb: 2 }}>
                            <Grid item md={4}>
                                <Typography variant="body1" >
                                    <Box component="img" src={"/static/assets/basic_info.png"} style={{ float: 'left', width: '30px', marginRight: '10px' }} />
                                    Basic Information
                                </Typography>
                            </Grid>
                            <Grid item md={6}>
                                <Typography variant="body1" sx={{ ml: 5, float: 'left' }}>
                                    <Box component="img" src={"/static/assets/6chapters.png"} style={{ float: 'left', width: '30px', marginRight: '10px' }} />
                                    6 Chapters
                                </Typography>
                            </Grid>
                        </Grid>
                        <Paper className='sped_assessment_info'>
                            <Typography variant="h6" noWrap>
                                Instructions
                            </Typography>
                            <Box sx={{ ml: 1, mt: 1 }}>
                                <Typography variant="body2" noWrap>
                                    <ol>
                                        <li>1. All Questions are Mandartory</li>
                                        <li>2. Answers wil be Autosaved</li>
                                        <li>3. All Questions is of Short Answers / MCQ / Dropdown</li>
                                        <li>4. You can review or edit the answer until you submit your answers</li>
                                    </ol>
                                </Typography>
                            </Box>
                            <Box sx={{ mt: 3 }}>
                                <Checkbox size="small" onChange={readConfirmation} style={{ marginLeft: '-5px' }} />
                                <Typography variant="caption" noWrap>I’ve Read All the Instructions</Typography>
                            </Box>
                        </Paper>
                    </Box>
                    <Button
                        variant="contained"
                        to="#"
                        sx={{ float: 'right', mb: 2, mr: 3 }}
                        disabled={disableConfirm}
                        onClick={props.toggleQuestionInfo}
                    >
                        {'Confirm'}
                    </Button>
                </Card>
            </Box>
        </Modal>
    );
}