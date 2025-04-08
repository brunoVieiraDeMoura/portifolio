import { Box, Divider } from '@mui/material';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
export default function TechComponentMobile() {
  return (
    <Box sx={{ height: '100%', background: '#333', width: '100%' }}>
      <Box sx={{ p: 2 }}>
        <Divider sx={{ background: '#555', mb: 4 }} />
        <Typography
          sx={{
            mt: {
              xs: 2,
              md: 8,
            },
          }}
          textAlign="center"
          variant="h2"
          color="grey.200"
          gutterBottom
        >
          Tecnologias usadas em projetos.
        </Typography>
        <Box
          sx={{
            mt: 8,
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            borderRadius: 2,
            alignItems: 'center',
            gap: {
              xs: 2,
              md: 4,
              lg: 6,
            },
          }}
        >
          {/* NEXT */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '60%',
              }}
            >
              <Image alt="logo next" height={64} width={64} src="/next.png" />
              <Typography textAlign="center" variant="h4" color="grey.400">
                Next JS
              </Typography>
            </Box>
            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
                flexDirection: 'column',
              }}
            >
              <Typography variant="h5" color="grey.300">
                Desenvolvimentos Web
              </Typography>
              <Typography variant="body1" color="grey.500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                earum saepe quae cum mollitia recusandae voluptates esse
                incidunt, similique, hic cumque!
              </Typography>
            </Box>
          </Box>
          {/* MUI */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '60%',
              }}
            >
              <Image alt="logo mui" height={64} width={64} src="/mui.png" />
              <Typography textAlign="center" variant="h4" color="grey.400">
                Material UI
              </Typography>
            </Box>
            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
                flexDirection: 'column',
              }}
            >
              <Typography variant="h5" color="grey.300">
                Estilização Responsiva
              </Typography>
              <Typography variant="body1" color="grey.500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                earum saepe quae cum mollitia recusandae voluptates esse
                incidunt, similique, hic cumque!
              </Typography>
            </Box>
          </Box>
          {/* REACT */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '60%',
              }}
            >
              <Image alt="logo mui" height={64} width={64} src="/react.png" />
              <Typography variant="h4" color="grey.400">
                React
              </Typography>
            </Box>
            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
                flexDirection: 'column',
              }}
            >
              <Typography variant="h5" color="grey.300">
                Aplicativos Mobile
              </Typography>
              <Typography variant="body1" color="grey.500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                earum saepe quae cum mollitia recusandae voluptates esse
                incidunt, similique, hic cumque!
              </Typography>
            </Box>
          </Box>
          {/* TS */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: 4,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '60%',
              }}
            >
              <Image alt="logo mui" height={64} width={64} src="/ts.png" />
              <Typography textAlign="center" variant="h4" color="grey.400">
                Type Script
              </Typography>
            </Box>
            <Box
              sx={{
                display: {
                  xs: 'none',
                  md: 'flex',
                },
                flexDirection: 'column',
              }}
            >
              <Typography variant="h5" color="grey.300">
                Código Tipado
              </Typography>
              <Typography variant="body1" color="grey.500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
                earum saepe quae cum mollitia recusandae voluptates esse
                incidunt, similique, hic cumque!
              </Typography>
            </Box>
          </Box>
        </Box>
        <Divider
          sx={{
            background: '#555',
            mt: {
              xs: 5,
              md: 12,
            },
            mb: {
              xs: 2,
              md: 6,
            },
          }}
        />
      </Box>
    </Box>
  );
}
