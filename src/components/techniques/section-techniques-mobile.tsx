import { Box, Paper, Typography } from '@mui/material';
import BrushIcon from '@mui/icons-material/Brush';
import GroupsIcon from '@mui/icons-material/Groups';
import TerminalIcon from '@mui/icons-material/Terminal';
import GitHubIcon from '@mui/icons-material/GitHub';
export default function TechniquesComponentMobile() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(360deg, rgba(34,34,34) , #333 80%)',
        width: '100%',
        pb: 2,
      }}
    >
      <Typography textAlign="center" variant="h2" color="grey.200">
        Habilidades e Técnicas
      </Typography>
      <Box
        sx={{
          mt: 2,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          p: 2,
          gap: 2,
        }}
      >
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: 'transparent',
            border: '2px solid #ccc',
            alignItems: 'center',
            p: 2,
          }}
          elevation={0}
        >
          <BrushIcon sx={{ fontSize: 64, color: '#ccc' }} />
          <Typography
            textAlign="center"
            variant="h4"
            color="grey.400"
            gutterBottom
          >
            UI & UX Designer
          </Typography>
          <Typography textAlign="center" variant="body1" color="grey.600">
            Experiência e usabilidade do usuário.
          </Typography>
        </Paper>
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: 'transparent',
            border: '2px solid #ccc',
            alignItems: 'center',
            p: 2,
          }}
          elevation={0}
        >
          <GroupsIcon sx={{ fontSize: 64, color: '#ccc' }} />
          <Typography
            textAlign="center"
            variant="h4"
            color="grey.400"
            gutterBottom
          >
            Scrum & Kambam
          </Typography>
          <Typography textAlign="center" variant="body1" color="grey.600">
            Trabalho em equipe e produtividade.
          </Typography>
        </Paper>
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: 'transparent',
            border: '2px solid #ccc',
            alignItems: 'center',
            p: 2,
          }}
          elevation={0}
        >
          <TerminalIcon sx={{ fontSize: 64, color: '#ccc' }} />
          <Typography
            textAlign="center"
            variant="h4"
            color="grey.400"
            gutterBottom
          >
            Arquitetura de Código
          </Typography>
          <Typography textAlign="center" variant="body1" color="grey.600">
            Organiza, otimiza e facilita manutenção.
          </Typography>
        </Paper>
        <Paper
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            background: 'transparent',
            border: '2px solid #ccc',
            alignItems: 'center',
            p: 2,
          }}
          elevation={0}
        >
          <GitHubIcon sx={{ fontSize: 64, color: '#ccc' }} />
          <Typography
            textAlign="center"
            variant="h4"
            color="grey.400"
            gutterBottom
          >
            Git Hub Repositório
          </Typography>
          <Typography textAlign="center" variant="body1" color="grey.600">
            Versionamentos e colaboração eficiente.
          </Typography>
        </Paper>
      </Box>
    </Box>
  );
}
