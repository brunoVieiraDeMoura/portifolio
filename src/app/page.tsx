import { Box } from '@mui/material';
import HomeProfile from '../components/home-profile/home-profile';
import HeaderComponent from '../components/header/header-component-mobile';

export default function Home() {
  return (
    <Box>
      <HeaderComponent />
      <main>
        <HomeProfile />
      </main>
    </Box>
  );
}
