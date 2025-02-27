import { Box } from '@mui/material';
import HomeProfileMobile from '../components/home-profile/home-profile';
import HeaderComponentMobile from '../components/header/header-component-mobile';
import TechComponentMobile from '../components/technology/section-tech-mobile';
import TechniquesComponentMobile from '../components/techniques/section-techniques-mobile';

export default function Home() {
  return (
    <Box>
      <HeaderComponentMobile />
      <main>
        <HomeProfileMobile />
      </main>
      <section>
        <TechComponentMobile />
      </section>
      <section>
        <TechniquesComponentMobile />
      </section>
    </Box>
  );
}
