import { Box, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
export default function TechComponentMobile() {
  return (
    <Box sx={{ height: '400px', background: '#333', width: '100%' }}>
      <Box sx={{ p: 2 }}>
        <Divider sx={{ background: '#ccc', mb: 4 }} variant="middle" />
        <Typography
          sx={{ mt: 2 }}
          textAlign="center"
          variant="h2"
          color="grey.200"
          gutterBottom
        >
          Tecnologias usadas em projetos.
        </Typography>
        <Box
          sx={{
            mt: 4,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderRadius: 2,
            alignItems: 'center',
            gap: 2,
          }}
        >
          {/* NEXT */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image alt="logo next" height={64} width={64} src="/next.png" />
            <Typography variant="h4" color="grey.400">
              Next JS
            </Typography>
          </Box>
          {/* MUI */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image alt="logo mui" height={64} width={64} src="/mui.png" />
            <Typography variant="h4" color="grey.400">
              Material UI
            </Typography>
          </Box>
          {/* REACT */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image alt="logo mui" height={64} width={64} src="/react.png" />
            <Typography variant="h4" color="grey.400">
              React
            </Typography>
          </Box>
          {/* TS */}
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Image alt="logo mui" height={64} width={64} src="/ts.png" />
            <Typography variant="h4" color="grey.400">
              Type Script
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
