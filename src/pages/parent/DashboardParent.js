/* eslint-disable */
// material
import { Box, Grid, Container, Typography } from '@mui/material';
// components
import Page from '../../components/Page';
import {
  AppStartAssessment,
  AppChildDetails,
  AppWelcomeBox
} from '../../components/_dashboard/app';

// ----------------------------------------------------------------------

export default function DashboardParent() {
  return (
    <Page title="Dashboard">
      <Container maxWidth="xl">
        <Grid container spacing={3} sx={{mt:0}}>
          <Grid item xs={12} md={6} lg={8}>
            <Grid container spacing={3}>
              <Grid item xs={12} md={12} lg={12}>
                <AppWelcomeBox />
              </Grid>

              <Grid item xs={12} md={12} lg={12}>
                <AppStartAssessment />
              </Grid>
            </Grid>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppChildDetails />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
