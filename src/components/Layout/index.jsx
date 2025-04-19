import { Box } from '@mui/material';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children, darkMode, setDarkMode }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header darkMode={darkMode} setDarkMode={setDarkMode} />
      <Box sx={{ display: 'flex', flex: 1, pt: '64px' }}>
        <Sidebar />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            height: 'calc(100vh - 64px)',
            overflow: 'auto',
            p: { xs: 2, sm: 3, md: 4 },
          }}
        >
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default Layout; 