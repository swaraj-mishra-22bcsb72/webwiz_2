import { createTheme } from '@mui/material/styles';

export const createAppTheme = (mode) => {
  return createTheme({
    palette: {
      mode,
      primary: {
        main: mode === 'dark' ? '#f5f5f5' : '#121212',
      },
      background: {
        default: mode === 'dark' ? '#121212' : '#ffffff',
        paper: mode === 'dark' ? '#1e1e1e' : '#f5f5f5',
        subtle: mode === 'dark' ? '#2d2d2d' : '#e5e5e5',
      },
      text: {
        primary: mode === 'dark' ? '#f5f5f5' : '#121212',
        secondary: mode === 'dark' ? '#d4d4d4' : '#999999',
      },
    },
    typography: {
      fontFamily: '"Google Sans", sans-serif',
      h1: {
        fontSize: '2.5rem',
        fontWeight: 700,
        letterSpacing: '-0.02em',
      },
      h2: {
        fontSize: '2rem',
        fontWeight: 600,
        letterSpacing: '-0.01em',
      },
      body1: {
        fontSize: '1rem',
        lineHeight: 1.7,
      },
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            textTransform: 'none',
            fontWeight: 500,
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 12,
            boxShadow: mode === 'dark' 
              ? '0 4px 20px rgba(0,0,0,0.4)'
              : '0 4px 20px rgba(0,0,0,0.08)',
          },
        },
      },
    },
  });
}; 