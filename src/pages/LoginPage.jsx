import React from 'react';
import FormLogin from 'components/FormLogin/FormLogin';
import { Card, Stack, Typography, styled } from '@mui/material';

const Container = styled(Card)`
  margin: 0 auto;
  width: 600px;
  border-radius: 14px;
  padding: 34px 0 64px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function LoginPage() {
  return (
    <Container>
      <Stack m={6}>
        <Typography variant="h5" sx={{ margin: '0 auto' }}>
          Login
        </Typography>
      </Stack>
      <FormLogin />
    </Container>
  );
}

export default LoginPage;
