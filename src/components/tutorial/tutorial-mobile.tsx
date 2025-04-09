import { Box, Paper, Typography, Button, Divider } from '@mui/material';
import Image from 'next/image';
import React from 'react';
export default function TutorialComponentMobile() {
  return (
    <Box
      id="projetos"
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
      {/* MOBILE */}
      <Box
        sx={{
          p: 2,
          display: {
            xs: 'flex',
            md: 'none',
          },
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Divider
          sx={{
            background: 'rgba(255,255,255,0.1)',
            mt: {
              xs: 5,
              md: 6,
            },
            mb: {
              xs: 2,
              md: 6,
            },
          }}
        />
        <Typography
          gutterBottom
          textAlign="center"
          variant="h2"
          sx={{
            mb: {
              xs: 2,
              md: 4,
            },
          }}
          color="grey.300"
        >
          Projetos Desenvolvidos
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
      </Box>
      {/* DESKTOP */}
      <Box
        sx={{
          p: 2,
          display: {
            xs: 'none',
            md: 'flex',
          },
          flexDirection: 'column',
          gap: 2,
        }}
      >
        <Divider
          sx={{
            background: 'rgba(255,255,255,0.1)',
            mt: {
              xs: 5,
              md: 6,
            },
            mb: {
              xs: 2,
              md: 6,
            },
          }}
        />
        <Typography
          sx={{ mt: 6 }}
          textAlign="center"
          variant="h2"
          color="grey.200"
        >
          Projetos Desenvolvidos
        </Typography>
        {/* FITBOOST DESK */}
        <Box
          sx={{
            mt: 4,
            display: 'flex',
            justifyContent: 'center',
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              width: {
                xs: '70%',
                lg: '60%',
              },
              p: 2,
              background:
                'linear-gradient(200deg,rgba(50,50,50,.3)  ,rgba(50,50,50,.6) 80% )',
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Image
                width={200}
                height={200}
                style={{
                  border: '2px solid #333',
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
                  justifyContent: 'space-around',
                }}
              >
                <Box>
                  <Typography variant="h4" color="grey.300">
                    fit<span style={{ color: '#BBEE33' }}>boost</span>
                  </Typography>
                  <Typography variant="h6" color="grey.500">
                    <span style={{ fontWeight: 'bold' }}>Stack:</span>{' '}
                    TypeScript · Next.js · MUI
                  </Typography>
                  <Typography gutterBottom variant="body1" color="grey.200">
                    O FitBoost é uma plataforma moderna de treinos online,
                    desenvolvida para oferecer uma experiência completa e
                    personalizada para usuários que buscam melhorar sua
                    performance física. Com interface responsiva e navegação
                    intuitiva, o sistema permite acompanhar o progresso, criar
                    rotinas e manter a motivação em alta.
                  </Typography>
                  <Typography gutterBottom variant="body2" color="grey.200">
                    🔍 Funcionalidades:
                  </Typography>
                  <Typography variant="body2" color="grey.300">
                    <span style={{ fontWeight: 'bold', color: '#BBEE33' }}>
                      *
                    </span>{' '}
                    Treinos personalizados com base no nível e nos objetivos do
                    usuário.
                  </Typography>
                  <Typography variant="body2" color="grey.300">
                    <span style={{ fontWeight: 'bold', color: '#BBEE33' }}>
                      *
                    </span>{' '}
                    Gráficos de progresso para acompanhar a evolução física ao
                    longo do tempo.
                  </Typography>
                  <Typography variant="body2" color="grey.300">
                    <span style={{ fontWeight: 'bold', color: '#BBEE33' }}>
                      *
                    </span>{' '}
                    Alertas e lembretes inteligentes para manter a consistência
                    nos treinos.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    fullWidth
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

                  <Button
                    href="https://github.com/brunoVieiraDeMoura/fitboost"
                    fullWidth
                    sx={{
                      borderColor: '#BBEE33',
                      color: '#eee',
                      textTransform: 'none',
                      fontWeight: 'bold',
                    }}
                    variant="outlined"
                  >
                    GitHub
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
        {/* SAFETRIP DESK */}
        <Box
          sx={{
            mt: 4,
            display: 'flex',
            justifyContent: 'center',
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              width: {
                xs: '70%',
                lg: '60%',
              },
              p: 2,
              background:
                'linear-gradient(200deg,rgba(40,40,40,.4)  ,rgba(40,40,40,.8) 80% )',
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                }}
              >
                <Box>
                  <Typography variant="h4" color="grey.300">
                    safe<span style={{ color: '#ff9944' }}>trip</span>
                  </Typography>
                  <Typography variant="h6" color="grey.500">
                    <span style={{ fontWeight: 'bold' }}>Stack:</span>{' '}
                    TypeScript · Next.js · MUI
                  </Typography>
                  <Typography gutterBottom variant="body1" color="grey.200">
                    O SafeTrip é uma plataforma completa de comparação de preços
                    voltada para viagens, oferecendo aos usuários a
                    possibilidade de economizar até 60% ao comparar tarifas de
                    hotéis, voos, translados, pedágios, restaurantes e atrações
                    turísticas em mais de 200 sites..
                  </Typography>
                  <Typography gutterBottom variant="body2" color="grey.200">
                    🔍 Funcionalidades:
                  </Typography>
                  <Typography variant="body2" color="grey.300">
                    <span style={{ fontWeight: 'bold', color: '#ff9944' }}>
                      *
                    </span>{' '}
                    Comparação inteligente entre diferentes meios de transporte:
                    avião, carro, ônibus e Uber.
                  </Typography>
                  <Typography variant="body2" color="grey.300">
                    <span style={{ fontWeight: 'bold', color: '#ff9944' }}>
                      *
                    </span>{' '}
                    Seção de destaques com melhores ofertas e recursos de busca
                    instantânea.
                  </Typography>
                  <Typography variant="body2" color="grey.300">
                    <span style={{ fontWeight: 'bold', color: '#ff9944' }}>
                      *
                    </span>{' '}
                    Sugestões de translado com detalhes das empresas, tipo de
                    transporte e avaliações.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    fullWidth
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
                  <Button
                    fullWidth
                    href="https://trip-project-theta.vercel.app/"
                    disabled
                    sx={{
                      borderColor: '#ff9944',
                      color: '#eee',
                      textTransform: 'none',
                      fontWeight: 'bold',
                    }}
                    variant="outlined"
                  >
                    GitHub
                  </Button>
                </Box>
              </Box>
              <Image
                width={200}
                height={200}
                style={{
                  border: '2px solid #333',
                  borderRadius: '8px',
                  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 8px',
                }}
                alt="img-fitboost"
                src="/safetrip-img.jpg"
              />
            </Box>
          </Box>
          {/* EGALPAO DESK */}
        </Box>
        {/* EGALPAO DESKTOP */}
        <Box
          sx={{
            mt: 4,
            display: 'flex',
            justifyContent: 'center',
            borderRadius: 2,
          }}
        >
          <Box
            sx={{
              width: {
                xs: '70%',
                lg: '60%',
              },
              p: 2,
              background:
                'linear-gradient(200deg,rgba(50,50,50,.6)  ,rgba(50,50,50,.9) 80% )',
              borderRadius: 2,
            }}
          >
            <Box sx={{ display: 'flex', gap: 4 }}>
              <Image
                width={200}
                height={200}
                style={{
                  border: '2px solid #333',
                  borderRadius: '8px',
                  boxShadow: 'rgba(0, 0, 0, 0.35) 0px 2px 8px',
                }}
                alt="img-fitboost"
                src="/egalapo-img.jpg"
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-around',
                }}
              >
                <Box>
                  <Typography variant="h4" color="grey.300">
                    e<span style={{ color: '#5599cc' }}>Galpão</span>
                  </Typography>
                  <Typography variant="h6" color="grey.500">
                    <span style={{ fontWeight: 'bold' }}>Stack:</span>{' '}
                    TypeScript · Next.js · MUI
                  </Typography>
                  <Typography gutterBottom variant="body1" color="grey.200">
                    O FitBoost é uma plataforma moderna de treinos online,
                    desenvolvida para oferecer uma experiência completa e
                    personalizada para usuários que buscam melhorar sua
                    performance física. Com interface responsiva e navegação
                    intuitiva, o sistema permite acompanhar o progresso, criar
                    rotinas e manter a motivação em alta.
                  </Typography>
                  <Typography gutterBottom variant="body2" color="grey.200">
                    🔍 Funcionalidades:
                  </Typography>
                  <Typography variant="body2" color="grey.300">
                    <span style={{ fontWeight: 'bold', color: '#5599cc' }}>
                      *
                    </span>{' '}
                    Treinos personalizados com base no nível e nos objetivos do
                    usuário.
                  </Typography>
                  <Typography variant="body2" color="grey.300">
                    <span style={{ fontWeight: 'bold', color: '#5599cc' }}>
                      *
                    </span>{' '}
                    Gráficos de progresso para acompanhar a evolução física ao
                    longo do tempo.
                  </Typography>
                  <Typography variant="body2" color="grey.300">
                    <span style={{ fontWeight: 'bold', color: '#5599cc' }}>
                      *
                    </span>{' '}
                    Alertas e lembretes inteligentes para manter a consistência
                    nos treinos.
                  </Typography>
                </Box>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    fullWidth
                    href="https://egalpao.vercel.app"
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

                  <Button
                    href="https://egalpao.vercel.app"
                    fullWidth
                    disabled
                    sx={{
                      borderColor: '#5599cc',
                      color: '#eee',
                      textTransform: 'none',
                      fontWeight: 'bold',
                    }}
                    variant="outlined"
                  >
                    GitHub
                  </Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
