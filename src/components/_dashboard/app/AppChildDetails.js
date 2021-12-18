/* eslint-disable */
// material
import { Card, CardHeader, Box, Avatar, Stack, Typography, Button, Divider, Link } from '@mui/material';
import { useState } from 'react';
import { Icon } from '@iconify/react';
import arrowDownFill from '@iconify/icons-eva/arrow-down-fill';
import { Link as RouterLink } from 'react-router-dom';

export default function AppChildDetails() {
  const [avatarUrl, setAvatarUrl] = useState('');
  return (
    <Card>
      <CardHeader title="Child Details" />
      <Stack spacing={2} sx={{ p: 3, pb: 1 }} direction="row" alignItems="center">
        <Avatar src={avatarUrl} sx={{ width: 60, height: 60 }} />
        <Box>
          <Typography variant="subtitle2" noWrap>
            <strong>John Max</strong>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            Grade: 5
          </Typography>
        </Box>
      </Stack>

      <Stack spacing={2} sx={{ p: 3, pb: 0 }} direction="row" alignItems="center">
        <Typography type="title" color="inherit" style={{ flex: 1 }}>
          Plan Details:
        </Typography>

        <Button
          sx={{ textAlign: 'right' }}
          variant="contained"
          component={RouterLink}
          to="#"
        >
          Upgrade Plan
        </Button>
      </Stack>

      <Stack spacing={0} sx={{ p: 3 }}>
        <Divider />
        <Box sx={{ pb: 2, pt: 2 }}>
          <Typography variant="subtitle2" noWrap>
            <strong>OT Therapy</strong>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            We identify the child's physical and occupation...
          </Typography>
          <Typography variant="caption" noWrap>
            02 Weekly session  |  10 Months
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ pb: 2, pt: 2 }}>
          <Typography variant="subtitle2" noWrap>
            <strong>Remedial Therapy</strong>
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            We identify the child's physical and occupation...
          </Typography>
          <Typography variant="caption" noWrap>
            02 Weekly session  |  10 Months
          </Typography>
        </Box>
        <Divider />
      </Stack>

    </Card>
  );
}