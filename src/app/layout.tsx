import type { Metadata } from 'next';
import './globals.css';
import { ThemeProvider } from '@mui/material/styles';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import theme from '../utils/theme';

export const metadata: Metadata = {
  title: 'portifolio',
  authors: { name: 'Bruno Vieira de Moura' },
  description: '',
  keywords: '',
  openGraph: {
    type: 'website',
    url: '',
    title: '',
    description: '',
    images: '',
  },
  twitter: {
    card: 'summary_large_image',
    title: '',
    description: '',
    images: '',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body suppressHydrationWarning>
        <AppRouterCacheProvider>
          <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
