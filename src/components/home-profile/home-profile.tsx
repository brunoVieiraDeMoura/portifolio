'use client';
import { Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';

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
          mt: {
            xs: 4,
            md: 6,
          },
          mb: {
            xs: 4,
            md: 6,
          },
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
        <Typography
          sx={{
            width: {
              xs: '100%',
              md: '70%',
              lg: '40%',
            },
          }}
          textAlign="center"
          variant="h2"
          color="grey.200"
        >
          Desenvolvedor Web, Front-end & Designer
        </Typography>
        <Box sx={{ display: 'flex', gap: 2, mt: 3 }}>
          <Button
            href="https://wa.me/5521999433890?text=Ol%C3%A1%20Bruno%2C%20estou%20entrando%20em%20contato%20para%20saber%20sua%20disponibilidade%20para%20trabalhos%2C%20podemos%20conversar%3F"
            startIcon={<WhatsAppIcon />}
            sx={{
              textTransform: 'none',
              background: '#444',
              color: '#ddd',
            }}
            size="large"
            variant="contained"
          >
            Contato
          </Button>
          <Button
            startIcon={<PictureAsPdfIcon />}
            href="/bruno.moura.code-curriculum.pdf"
            download="Bruno-Moura-Curriculo.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
            Curriculum
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
