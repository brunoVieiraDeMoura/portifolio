import { Box, Paper, Typography, Button } from '@mui/material';
import Image from 'next/image';

export default function TutorialComponentMobile() {
  return (
    <Box
      sx={{
        position: 'relative',
        background:
          'linear-gradient(180deg, rgba(34,34,34) 10% ,rgba(34,34,34,.1)  )',
      }}
    >
      <Box
        sx={{ position: 'absolute', height: '100%', width: '100%', zIndex: -1 }}
      >
        <Image
          priority={true}
          src="/background.jpg"
          alt="always add alt"
          fill
          style={{ objectFit: 'cover', objectPosition: '65% 20%' }}
        />
      </Box>
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Typography
          gutterBottom
          textAlign="center"
          variant="h2"
          color="grey.200"
        >
          Projetos
        </Typography>
        <Paper
          sx={{
            p: 2,
            background:
              'linear-gradient(200deg,rgba(204,204,204,.05)  ,rgba(170,170,170,.1) 80% )',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: 2,
            }}
          >
            <Image
              width={400}
              height={400}
              style={{
                borderRadius: '8px',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 8px',
              }}
              alt="img-fitboost"
              src="/vercel-img.jpg"
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography gutterBottom variant="h4" color="grey.300">
                fit<span style={{ color: '#BBEE33' }}>boost</span>
              </Typography>
              <Typography gutterBottom variant="body1" color="grey.400">
                Desenvolvido com Next.js e MUI, a plataforma de treinos
                personalizados, gráficos de progresso e uma interface intuitiva.
              </Typography>
              <Button
                href="https://fitboost-two.vercel.app/"
                sx={{
                  background: '#BBEE33',
                  color: '#333',
                  textTransform: 'none',
                  fontWeight: 'bold',
                }}
                variant="contained"
              >
                Veja o Projeto
              </Button>
            </Box>
          </Box>
        </Paper>
        <Paper
          sx={{
            p: 2,
            background:
              'linear-gradient(200deg,rgba(0,0,0,.2) 30% ,rgba(0,0,0,.6)  )',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '2fr 1fr',
              gap: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography variant="h4" color="grey.200">
                e<span style={{ color: '#5599cc' }}>Galpão</span>
              </Typography>
              <Typography variant="body1" color="grey.300">
                Desenvolvido em Next.js e MUI para cálculo automatizado de
                galpões metálicos, com exportação para AutoCAD.
              </Typography>
              <Button
                href="https://egalpao.vercel.app/"
                sx={{
                  background: '#5599cc',
                  color: '#eee',
                  textTransform: 'none',
                  fontWeight: 'bold',
                }}
                variant="contained"
              >
                Veja o Projeto
              </Button>
            </Box>
            <Image
              width={400}
              height={400}
              style={{
                borderRadius: '8px',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 8px',
              }}
              alt="img-fitboost"
              src="/egalapo-img.jpg"
            />
          </Box>
        </Paper>
        <Paper
          sx={{
            p: 2,
            background:
              'linear-gradient(200deg,rgba(0,0,0,.3)  ,rgba(0,0,0,.7) 80% )',
          }}
        >
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '1fr 2fr',
              gap: 2,
            }}
          >
            <Image
              width={400}
              height={400}
              style={{
                borderRadius: '8px',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 8px',
              }}
              alt="img-fitboost"
              src="/safetrip-img.jpg"
            />
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
              }}
            >
              <Typography gutterBottom variant="h4" color="grey.300">
                Safe<span style={{ color: '#ff9944' }}>Trip</span>
              </Typography>
              <Typography gutterBottom variant="body1" color="grey.200">
                Desenvolvi um aplicativo em Next.js que integra múltiplas APIs
                para planejamento de viagens, priorizando orçamento e
                experiência personalizada.
              </Typography>
              <Button
                href="https://trip-project-theta.vercel.app/"
                sx={{
                  background: '#ff9944',
                  color: '#eee',
                  textTransform: 'none',
                  fontWeight: 'bold',
                }}
                variant="contained"
              >
                Veja o Projeto
              </Button>
            </Box>
          </Box>
        </Paper>
        <Button
          sx={{
            background:
              'linear-gradient(200deg,rgba(150,150,150,.9)  ,rgba(50,50,50,.9) 40% )',
            color: '#ccc',
            fontWeight: 'bold',
          }}
          variant="contained"
        >
          ver todos os projetos
        </Button>
      </Box>
    </Box>
  );
}
