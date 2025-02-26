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
            <Box sx={{ flexGrow: 1 }}>
              <Link
                style={{
                  display: 'flex',
                  width: '100%',
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
            <Box>
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
              PaperProps={{
                sx: { width: '80%' },
              }}
              onClose={() => setOpenDrawer(false)}
            ></Drawer>
          </Toolbar>
        </Box>
      </AppBar>
    </>
  );
}
