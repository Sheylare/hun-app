import React from 'react';
import { Box, Container, Link, Typography, Stack, IconButton, Grid2 } from '@mui/material';

import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: '#800000',
        color:'#f8e8e8',
        padding: '2rem 0',
      }}
    >
      <Container maxWidth="lg">
        <Grid2 container spacing={4} justifyContent="center" alignItems="center" textAlign="center">
          <Grid2 item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              HUN NAILS
            </Typography>
            <Typography variant="body2">
              Nail Art Studio en Barcelona
            </Typography>
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Enlaces
            </Typography>
            <Link href="/" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '0.5rem' }}>
              Inicio
            </Link>
            <Link href="/reserva" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '0.5rem' }}>
              Reservar
            </Link>
            <Link href="/servicios" color="inherit" underline="none" sx={{ display: 'block', marginBottom: '0.5rem' }}>
              Servicios
            </Link>
          </Grid2>
          <Grid2 item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contacto
            </Typography>
            <Typography variant="body2" sx={{ marginBottom: '0.5rem' }}>
              Email: info@hunnails.com
            </Typography>
            <Typography variant="body2">
              Teléfono: +34 123 456 789
            </Typography>
            <Stack direction="row" spacing={1} mt={2} justifyContent="center">
              <IconButton href="https://www.instagram.com" target="_blank" color="inherit">
                <InstagramIcon />
              </IconButton>
            </Stack>
          </Grid2>
        </Grid2>
        <Box textAlign="center" pt={5} pb={2}>
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} HUN NAILS. Todos los derechos reservados.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;