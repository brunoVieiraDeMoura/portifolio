import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
export default function HomeProfileMobile() {
  return (
    <Box
      sx={{
        position: 'relative',
        background: 'linear-gradient(180deg, rgba(255,255,255,0.1) , #333 60%)',
        display: 'flex',
      }}
    >
      <Box
        sx={{ position: 'absolute', height: '100%', width: '100%', zIndex: -1 }}
      >
        <Image
          priority
          src="/background.jpg"
          alt="always add alt"
          fill
          style={{ objectFit: 'cover', objectPosition: '65% 20%' }}
        />
      </Box>

      <Box
        sx={{
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          alignItems: 'center',
          p: 2,
          mt: 4,
          mb: 2,
        }}
      >
        <Image
          alt="Foto de Bruno Moura"
          width={160}
          height={160}
          src={'/bruno-photo.jpg'}
          style={{
            borderRadius: '50%',
            boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
          }}
        />
        <Typography
          sx={{ mt: 2 }}
          textAlign="center"
          variant="body1"
          color="grey.400"
        >
          Olá, eu sou Bruno Moura! 👋
        </Typography>
        <Typography textAlign="center" variant="h2" color="grey.200">
          Desenvolvedor Web, Front-end & Designer
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
          <Button
            sx={{
              textTransform: 'none',
              background: '#444',
              color: '#ddd',
            }}
            size="large"
            variant="contained"
          >
            Contatos
          </Button>
          <Button
            sx={{
              textTransform: 'none',
              border: '2px solid #444444',
              color: '#ddd',
              boxShadow: 'rgba(0, 0, 0, 0.24) 0px 2px 4px',
            }}
            size="large"
            variant="outlined"
            color="primary"
          >
            Projetos
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
