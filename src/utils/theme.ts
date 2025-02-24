'use client';
import { type_first, type_second } from '@/src/utils/font';
import { createTheme, responsiveFontSizes } from '@mui/material/styles';

let theme = createTheme({
  typography: {
    htmlFontSize: 16,
    fontFamily: type_first.style.fontFamily,
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
    h1: {
      fontFamily: type_first.style.fontFamily,
      fontWeight: 300,
      lineHeight: 1.0,
      letterSpacing: '-0.01562em',
    },
    h2: {
      fontFamily: type_first.style.fontFamily,
      fontWeight: 300,
      lineHeight: 1.0,
      letterSpacing: '-0.00833em',
    },
    h3: {
      fontFamily: type_first.style.fontFamily,
      fontWeight: 400,
      lineHeight: 1.0,
      letterSpacing: '0em',
    },
    h4: {
      fontFamily: type_first.style.fontFamily,
      fontWeight: 400,
      lineHeight: 1.0,
      letterSpacing: '0.00735em',
    },
    h5: {
      fontFamily: type_second.style.fontFamily,
      fontWeight: 400,
      lineHeight: 1.334,
      letterSpacing: '0em',
    },
    h6: {
      fontFamily: type_second.style.fontFamily,
      fontWeight: 500,
      lineHeight: 1.6,
      letterSpacing: '0.0075em',
    },
    subtitle1: {
      fontFamily: type_second.style.fontFamily,
      fontWeight: 400,
      lineHeight: 1.75,
      letterSpacing: '0.00938em',
    },
    subtitle2: {
      fontFamily: type_second.style.fontFamily,
      fontWeight: 500,
      lineHeight: 1.57,
      letterSpacing: '0.00714em',
    },
    body1: {
      fontFamily: type_second.style.fontFamily,
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '0.00938em',
    },
    body2: {
      fontFamily: type_second.style.fontFamily,
      fontWeight: 400,
      lineHeight: 1.2,
      letterSpacing: '0.01071em',
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
