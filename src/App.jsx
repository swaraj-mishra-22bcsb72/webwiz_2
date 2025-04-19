import { useState, useEffect } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { BrowserRouter } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import CssBaseline from '@mui/material/CssBaseline';
import { createAppTheme } from './theme';
import Layout from './components/Layout';
import AppRoutes from './routes/routes';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createAppTheme(darkMode ? 'dark' : 'light');

  useEffect(() => {
    // Check system preference for dark mode
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setDarkMode(prefersDark);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <Layout darkMode={darkMode} setDarkMode={setDarkMode}>
          <AnimatePresence mode="wait">
            <AppRoutes />
          </AnimatePresence>
        </Layout>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
