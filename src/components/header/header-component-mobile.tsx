'use client';
import MenuIcon from '@mui/icons-material/Menu';
import {
  AppBar,
  Box,
  Drawer,
  IconButton,
  Toolbar,
  Typography,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import GitHubIcon from '@mui/icons-material/GitHub';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

export default function HeaderComponentMobile() {
  const [openDrawer, setOpenDrawer] = React.useState(false);
  return (
    <>
      <AppBar
        position="relative"
        sx={{
          boxShadow: 'rgba(0, 0, 0, 0.16) 0px 1px 2px',
          background: '#333',
          display: 'flex',
          justifyContent: 'end',
        }}
      >
        <Box>
          <Toolbar>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                width: '100%',
              }}
            >
              <Link
                style={{
                  display: 'flex',
                  gap: 4,
                }}
                href={'/'}
              >
                <Box
                  sx={{
                    display: 'flex',
                    height: '100%',
                    alignItems: 'center',

                    gap: 1,
                  }}
                >
                  <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ color: '#ccc' }} variant="body1">
                      bruno.moura.code
                    </Typography>
                  </Box>
                </Box>
              </Link>
            </Box>
            {/* MOBILE MENU */}
            <Box
              sx={{
                display: {
                  xs: 'flex',
                  md: 'none',
                },
              }}
            >
              <IconButton
                sx={{ display: 'flex', flexDirection: 'column', gap: '6px' }}
                onClick={() => setOpenDrawer(true)}
                edge="end"
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon sx={{ fontSize: 28, color: '#ccc' }} />
              </IconButton>
            </Box>
            <Drawer
              anchor="right"
              open={openDrawer}
              sx={{}}
              PaperProps={{
                sx: {
                  width: '80%',
                  background: 'linear-gradient(320deg,#222 , #333 60%)',
                },
              }}
              onClose={() => setOpenDrawer(false)}
            >
              <Box sx={{ p: 4 }}>
                <Typography
                  sx={{ mt: 4 }}
                  textAlign="center"
                  variant="h4"
                  color="grey.200"
                >
                  Contatos
                </Typography>
                <ul>
                  <li>
                    <Link href={'https://github.com/brunoVieiraDeMoura'}>
                      <Box sx={{ display: 'flex', gap: 1, mt: 6 }}>
                        <GitHubIcon sx={{ color: '#ccc' }} />
                        <Typography variant="h5" color="grey.400">
                          GitHub
                        </Typography>
                      </Box>
                    </Link>
                  </li>
                  <li>
                    <Link href="https://wa.me/5521999433890?text=Ol%C3%A1%20Bruno%2C%20estou%20entrando%20em%20contato%20para%20saber%20sua%20disponibilidade%20para%20trabalhos%2C%20podemos%20conversar%3F">
                      <Box sx={{ display: 'flex', gap: 1, mt: 6 }}>
                        <WhatsAppIcon sx={{ color: '#ccc' }} />
                        <Typography variant="h5" color="grey.400">
                          WhatsApp
                        </Typography>
                      </Box>
                    </Link>
                  </li>
                  <li>
                    <Link href="mailto:bruno.moura.code@gmail.com?subject=Contato%20para%20trabalhos&body=Olá%20Bruno%2C%20gostaria%20de%20falar%20sobre%20uma%20possível%20colaboração.">
                      <Box sx={{ display: 'flex', gap: 1, mt: 6 }}>
                        <AlternateEmailIcon sx={{ color: '#ccc' }} />
                        <Typography variant="h5" color="grey.400">
                          e-mail
                        </Typography>
                      </Box>
                    </Link>
                  </li>
                </ul>
              </Box>
            </Drawer>
            {/* DESKTOP MENU */}
            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
              }}
            >
              <Box sx={{ display: 'flex', gap: 4 }}>
                <Link href={'https://github.com/brunoVieiraDeMoura'}>
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <GitHubIcon sx={{ color: '#ccc' }} />
                    <Typography variant="body1" color="grey.400">
                      GitHub
                    </Typography>
                  </Box>
                </Link>
                <Link
                  href={
                    'https://wa.me/5521999433890?text=Ol%C3%A1%20Bruno%2C%20estou%20entrando%20em%20contato%20para%20saber%20sua%20disponibilidade%20para%20trabalhos%2C%20podemos%20conversar%3F'
                  }
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <WhatsAppIcon sx={{ color: '#ccc' }} />
                    <Typography variant="body1" color="grey.400">
                      WhatsApp
                    </Typography>
                  </Box>
                </Link>
                <Link
                  href={
                    'mailto:bruno.moura.code@gmail.com?subject=Contato%20para%20trabalhos&body=Olá%20Bruno%2C%20gostaria%20de%20falar%20sobre%20uma%20possível%20colaboração.'
                  }
                >
                  <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                    <AlternateEmailIcon sx={{ color: '#ccc' }} />
                    <Typography variant="body1" color="grey.400">
                      email
                    </Typography>
                  </Box>
                </Link>
              </Box>
            </Box>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
}
