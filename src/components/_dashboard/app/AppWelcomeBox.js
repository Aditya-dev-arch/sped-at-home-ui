/* eslint-disable */
// material
import { Card, Typography, Box, Grid } from '@mui/material';
import { useTheme } from '@mui/material/styles';

export default function AppWelcomeBox() {
    const theme = useTheme();
    return (
        <Grid sx={{position:'relative'}}>
            <Card sx={{ background: theme.palette.primary.light, boxShadow: 0 }}>
                <Box sx={{ p: 3 }} dir="ltr">
                    <Typography variant="h4" noWrap>
                        <strong>Welcome Nitin!</strong>
                    </Typography>
                    <Typography variant="body2" noWrap>
                        You will find all your progress and progress in this dashboard <br />to let you know your growth and improve even more
                    </Typography>
                </Box>
            </Card>
            <Box component="img" src="/static/assets/hello.png" sx={{ top: -40, height: 170, right:30, position: 'absolute' }} />
        </Grid>
    );
}