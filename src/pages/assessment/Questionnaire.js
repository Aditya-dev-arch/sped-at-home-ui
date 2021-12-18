/* eslint-disable */
import { useState } from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Page from '../../components/Page';
import AssessmentQuestionInfo from 'src/components/_assessment/AssessmentQuestionInfo';
import AssessmentQuestion from 'src/components/_assessment/AssessmentQuestion';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel-${index}`}
            aria-labelledby={`vertical-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
};

function a11yProps(index) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}


export default function Questionnaire() {
    const [value, setValue] = useState(0);
    const[openModal, setOpenModal] = useState(true);

    const toggleQuestionInfo = () => {
        setOpenModal(oldOpen => !oldOpen);
    }   
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabStyle = (image, title) => <div style={{ width: '100%', textAlign: 'left' }}><Box component="img" src={"/static/assets/" + image} style={{ float: 'left', marginRight: '15px' }} /> {title}</div>;

    return (
        <Page title="Assessment">
            <Box
                sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex' }}
            >
                <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    value={value}
                    onChange={handleChange}
                    aria-label="Vertical tabs example"
                    sx={{ borderRight: 1, borderColor: 'divider', width: '300px' }}
                >
                    <Tab label={tabStyle('assessment_tab_1.png', 'School Information')} {...a11yProps(0)} />
                    <Tab label={tabStyle('assessment_tab_2.png', 'Reason for Referral')} {...a11yProps(1)} />
                    <Tab label={tabStyle('assessment_tab_3.png', 'Parent Information')} {...a11yProps(2)} />
                    <Tab label={tabStyle('assessment_tab_4.png', 'Behavioral Assessement')} {...a11yProps(3)} disabled={true} />
                    <Tab label={tabStyle('assessment_tab_5.png', 'OT Screeening')} {...a11yProps(4)} disabled={true} />
                    <Tab label={tabStyle('assessment_tab_6.png', 'OT Assessment')} {...a11yProps(5)} disabled={true} />
                </Tabs>
                <TabPanel value={value} index={0} style={{ width: '100%' }}>
                    <AssessmentQuestion type="School Information" icon='assessment_tab_1.png' />
                </TabPanel>
                <TabPanel value={value} index={1} style={{ width: '100%' }}>
                    <AssessmentQuestion type="Reason for Referral" icon='assessment_tab_2.png' />
                </TabPanel>
                <TabPanel value={value} index={2} style={{ width: '100%' }}>
                    <AssessmentQuestion type="Parent Information" icon='assessment_tab_3.png' />
                </TabPanel>
                <TabPanel value={value} index={3} style={{ width: '100%' }}>
                    <AssessmentQuestion type="Behavioral Assessement" icon='assessment_tab_4.png' />
                </TabPanel>
                <TabPanel value={value} index={4} style={{ width: '100%' }}>
                    <AssessmentQuestion type="OT Screeening" icon='assessment_tab_5.png' />
                </TabPanel>
                <TabPanel value={value} index={5} style={{ width: '100%' }}>
                    <AssessmentQuestion type="OT Assessment" icon='assessment_tab_6.png' />
                </TabPanel>
            </Box>
            <AssessmentQuestionInfo openModal={openModal} toggleQuestionInfo={toggleQuestionInfo} />
        </Page>
    );
}